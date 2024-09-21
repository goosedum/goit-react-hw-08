import { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations'; 
import * as Yup from 'yup'; 
import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  
  const phoneRegExp = /^(\+?[1-9]{1,4}[-\s]?|[0-9]{2,4}[-\s]?)?[0-9]{3,4}[-\s]?[0-9]{3,4}$/;

  
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    validationSchema
      .validate({ name, number })
      .then(() => {
        
        dispatch(addContact({ name, number }));
        
        setName('');
        setNumber('');
      })
      .catch((error) => {
        console.error('Validation Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        variant="outlined"
        fullWidth
        margin="normal"
        required
        helperText="Please enter your name"
      />
      <TextField
        label="Phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)} 
        variant="outlined"
        fullWidth
        margin="normal"
        required
        helperText="Please enter your phone number"
      />
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
    </form>
  );
};

export default ContactForm;
