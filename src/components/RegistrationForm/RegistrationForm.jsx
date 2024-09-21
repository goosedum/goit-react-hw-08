import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations'; 
import { selectIsLoggedIn } from '../../redux/auth/selectors'; 
import css from './RegistrationForm.module.css'; 
import { useEffect } from 'react';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn); 

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts'); 
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        resetForm(); 
      })
      .catch((error) => {
        console.error('Помилка реєстрації:', error);
      });
  };

  return (
    <div className={css.registrationContainer}>
      <h2 className={css.title}>Registration</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().min(3, 'Занадто коротке!').required('Обов’язково'),
          email: Yup.string().email('Невірний email').required('Обов’язково'),
          password: Yup.string().min(6, 'Пароль має бути мінімум 6 символів').required('Обов’язково'),
        })}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            Name
            <Field className={css.inputForm} type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Email
            <Field className={css.inputForm} type="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Password
            <Field className={css.inputForm} type="password" name="password" />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>

          <button className={css.submitButton} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
