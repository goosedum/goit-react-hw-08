import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations'; 
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors'; 

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); 

  const handleLogout = () => {
    dispatch(logOut()); 
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button className={css.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
