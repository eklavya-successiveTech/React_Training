"use client"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ValidationForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    
    if (!formValues.name.trim()) {
      tempErrors.name = 'Name is required.';
    }
    
    if (!formValues.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = 'Email is not valid.';
    }

    setErrors(tempErrors);
    
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <TextField
          label="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name || ''}
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email || ''}
          margin="normal"
        />
      </div>
      <div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ValidationForm;