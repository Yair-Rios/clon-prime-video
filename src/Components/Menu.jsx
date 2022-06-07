import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Menu.css'
const Menu = ()=>{
  return (
    <div className='contaner-menu'>
      {<div className='menu'>
        {/* logo de la pagina */}
        {<img src="video.jpg" alt="logo-clon-video" />}
        <menu className='menu-container'>
          <ul>
            <li> <Link to="/">Inicio </Link>  </li>
            <li> <Link to="/tienda">Tienda </Link></li>
            <li> <Link to="/canales">Canales</Link></li>
            <li> Categorias 
              {/* sub-menu */}
              <ul>
                <li> {/* <Link></Link>  */}</li>
                <li> {/* <Link></Link>  */}</li>
                <li> {/* <Link></Link>  */}</li>
                <li> {/* <Link></Link>  */}</li>                
              </ul>
            </li>
            <li><Link to="/espacio">Mi espacio</Link></li>
          </ul>
        </menu>
      </div>}
      <div className='search'>
        {/* input de busqueda */}

        {/* avatar */}
      </div>
    </div>
  )
}
export default Menu;