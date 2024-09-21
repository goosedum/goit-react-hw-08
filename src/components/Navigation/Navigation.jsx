import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; 

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); 

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Home
            </NavLink>
          </li>
          {!isLoggedIn && ( 
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? css.active : css.link)}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? css.active : css.link)}
                >
                  Registration
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && ( 
            <>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => (isActive ? css.active : css.link)}
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <UserMenu /> 
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
