import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () =>{
 return <div>
    <nav>
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item">
            <Link to="/" class="nav-link" >Inicio</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">Sobre nosotros</Link>
          </li>
          <li class="nav-item">
            <Link to="/contacto" class="nav-link">Contacto</Link>
          </li>
        </ul>
    </nav>
  
    <Outlet />
 </div>;
}

export default Layout;