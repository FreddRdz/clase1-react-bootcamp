import { Link } from "react-router-dom";
import logo from "../assets/images/logo-DH.png";

const SiderBar = () => {
  return (
    <>
      <ul
        className='navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        <a
          className='sidebar-brand d-flex align-items-center justify-content-center'
          href='/'
        >
          <div className='sidebar-brand-icon'>
            <img className='w-100' src={logo} alt='Digital House' />
          </div>
        </a>

        <hr className='sidebar-divider my-0' />

        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard - DH movies</span>
          </Link>
        </li>

        <hr className='sidebar-divider' />

        <div className='sidebar-heading'>Actions</div>

        <li className='nav-item'>
          <a className='nav-link collapsed' href='/'>
            <i className='fas fa-fw fa-folder'></i>
            <span>Pages</span>
          </a>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='fas fa-fw fa-chart-area'></i>
            <span>Charts</span>
          </a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className='nav-item'>
          <a className='nav-link' href='/'>
            <i className='fas fa-fw fa-table'></i>
            <span>Tables</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className='sidebar-divider d-none d-md-block' />

        <div className='sidebar-heading'>Sections</div>

        <li className='nav-item'>
          <Link className='nav-link collapsed' to='/genres-in-database'>
            <i className='fas fa-fw fa-folder'></i>
            <span>Generos in database</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className='nav-item'>
          <Link className='nav-link' to='/content-row-movies'>
            <i className='fas fa-fw fa-chart-area'></i>
            <span>Content row movies</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className='nav-item'>
          <Link className='nav-link' to='/last-movie-in-database'>
            <i className='fas fa-fw fa-table'></i>
            <span>Last movie in database</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className='sidebar-divider d-none d-md-block' />
      </ul>
    </>
  );
};

export default SiderBar;
