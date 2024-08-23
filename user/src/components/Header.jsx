import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/authActions';
import { selectCartItems, selectFavoriteItems } from '../redux/selectors';
import { searchProducts } from '../redux/actions/productsActions';
import logo from '../assets/images/logo.webp';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const cartItems = useSelector(selectCartItems);
  const favoriteItems = useSelector(selectFavoriteItems);

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login'); 
  };

  const handleSearchChange = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  const links = [
    { path: '/', name: 'Home' },
    { path: '/shop', name: 'Shop' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' }
  ];

  return (
    <header>
      {/* Navbar for small and medium screens */}
      <div className="w-100 position-fixed top-0 bg-light shadow-sm py-3 d-lg-none header-fixed">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="img-fluid" style={{ maxHeight: '30px' }} />
            <span className="fw-bold fs-5 ms-2">eStore</span>
          </div>
          <div className="d-flex align-items-center">
            <div className="icons d-flex align-items-center">
              <Link to="/cart" className="me-3">
                <i className="bi bi-cart-plus fs-4">
                  <span className="badge bg-danger">{cartItems.length}</span>
                </i>
              </Link>
              <Link to="/favorites" className="me-3">
                <i className="bi bi-heart fs-4">
                  <span className="badge bg-danger">{favoriteItems.length}</span>
                </i>
              </Link>
              {user ? (
                <>
                  <span className="me-3">Hello, {user.displayName || 'User'}</span>
                  <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar for small and medium screens */}
      <div className="d-sm-block d-md-block d-lg-none bg-light vh-100 position-fixed" style={{ top: '70px', width: '250px' }}>
        <div className="container py-3">
          <nav className="mt-4">
            <ul className="nav flex-column">
              {links.map((item, index) => (
                <li key={index} className="nav-item my-2">
                  <Link to={item.path} className="nav-link text-dark fw-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="search-bar mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>

      {/* Navbar for large screens */}
      <div className="d-none d-lg-flex w-100 position-fixed top-0 bg-light shadow-sm py-3 header-fixed">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={logo} alt="logo" className="img-fluid" style={{ maxHeight: '30px' }} />
            <span className="fw-bold fs-5 ms-2">eStore</span>
          </div>
          <nav className="flex-grow-1 mx-3">
            <ul className="nav d-flex justify-content-center mb-0">
              {links.map((item, index) => (
                <li key={index} className="nav-item mx-2">
                  <Link to={item.path} className="nav-link text-dark fw-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="d-flex align-items-center">
            <div className="search-bar mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              onChange={handleSearchChange}
            />
          </div>
            <div className="icons d-flex align-items-center">
              <Link to="/cart" className="me-3">
                <i className="bi bi-cart-plus fs-4">
                  <span className="badge bg-danger">{cartItems.length}</span>
                </i>
              </Link>
              <Link to="/favorites" className="me-3">
                <i className="bi bi-heart fs-4">
                  <span className="badge bg-danger">{favoriteItems.length}</span>
                </i>
              </Link>
              {user ? (
                <>
                  <span className="me-3">Hello, {user.displayName || 'User'}</span>
                  <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
