const fs = require('fs');

class FileSystemContainer {
    constructor(route) {
        this.route = route;
        this.fileExists = fs.existsSync(this.route)
    }    
    async writeFile(input) {
        fs.promises.writeFile(this.route, JSON.stringify(input));
    }
    async save(obj) {
        try {
            let data = await this.getAll();
            let id = !data.length ? 1 : parseInt(data[data.length - 1].id) + 1;
            data = [...data, { ...obj, id: id }];
            await this.writeFile(data);
            return id;
        } catch (err) {
            console.error(err);
        }
    }
    async getById(id) {
        try {
            const data = await this.getAll();
            const obj = data.find((x) => x.id == id);
            return obj ? obj : null;
        } catch (error) {
            console.error(error);
        }
    }
    async getAll() {
        try {
            if (this.fileExists === false) {
                this.writeFile([])
            }
            const data = await fs.promises.readFile(this.route, 'utf-8');
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error(error);
        }
    } 
    async deleteById(id) {
        try {
            const data = await this.getAll();
            const index = data.findIndex((obj) => obj.id == id);
            if (index > -1) {
                const newData = data.slice(0, index).concat(data.slice(index + 1));
                await this.writeFile(newData);
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
        }
    }
    async deleteAll() {
        try {
            await this.writeFile([]);
            console.log('Se han eliminado todos los elementos');
        } catch (err) {
            console.error(err);
        }
    }
}