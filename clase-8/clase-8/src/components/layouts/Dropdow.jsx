
const Dropdow = ({lista}) => {
    return (
        <>
          <li className="nav-item dropdown">
          <button className="btn btn-secondary"><a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-chevron-square-down"></i></a></button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">{lista[0]}</a>
            <a className="dropdown-item" href="#">{lista[1]}</a>
            <a className="dropdown-item" href="#">{lista[2]}</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">{lista[3]}</a>
          </div>
        </li>  
        </>
    );
}

export default Dropdow;
