"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const validationSchema = yup.object({
  fullName: yup
    .string('Enter your full name')
    .required('Full name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  feedback: yup
    .string('Enter your feedback')
    .min(15, 'Feedback should be of minimum 15 characters length')
    .required('Feedback is required'),
});

const SubmissionForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      feedback: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert('Form Submitted Successfully!\n' + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div>
     
      {formik.submitCount > 0 && !formik.isValid && (
        <Paper elevation={2} style={{ padding: '1rem', marginBottom: '1rem' }}>
          <Typography variant="h6" color="error">
            Form Errors
          </Typography>
          <List dense>
            {Object.keys(formik.errors).map((key) => (
              <ListItem key={key}>
                <ListItemText
                  primary={formik.errors[key]}
                  primaryTypographyProps={{ color: 'error' }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
          margin="normal"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          id="feedback"
          name="feedback"
          label="Feedback"
          value={formik.values.feedback}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.feedback && Boolean(formik.errors.feedback)}
          helperText={formik.touched.feedback && formik.errors.feedback}
          margin="normal"
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SubmissionForm;