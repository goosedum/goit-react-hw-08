import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success('Contact was deleted successfully', {
          style: {
            border: '1px solid rgb(0, 106, 255)',
            padding: '16px',
            color: 'rgb(0, 106, 255)',
          },
          iconTheme: {
            primary: 'rgb(0, 226, 45)',
            secondary: '#FFFAEE',
          },
        });
      });
  };

  return (
    <div className={css.contactContainer}>
      <p className={css.text}>
        <FaUser className={css.userIcon} />
        {name}
      </p>
      <p className={css.text}>
        <BsFillTelephoneFill className={css.userIcon} />
        {number}
      </p>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        <MdDeleteForever className={css.deleteIcon} />
      </button>
    </div>
  );
};

export default Contact;
