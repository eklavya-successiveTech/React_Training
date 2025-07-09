
'use client';

import { useState } from 'react';
import MuiModal from '../components/MuiModal';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function MuiModalDemoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentType, setModalContentType] = useState(null);

  const openModalWithContent = (type) => {
    setModalContentType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
    closeModal();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Reusable MUI Modal Demo
      </Typography>
      <Typography variant="body1">
        Click the buttons below to open the modal with different content.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => openModalWithContent('simple')}>
          Open Simple Modal
        </Button>
        <Button variant="outlined" onClick={() => openModalWithContent('form')}>
          Open Form Modal
        </Button>
      </Stack>

      
      <MuiModal isOpen={isModalOpen} onClose={closeModal}>
       
        {modalContentType === 'simple' && (
          <>
            <Typography id="modal-title" variant="h6" component="h2">
              Simple Modal Title
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              This is a simple modal using MUI components. The backdrop click and Escape key press are handled automatically.
            </Typography>
          </>
        )}

        {modalContentType === 'form' && (
          <Box component="form" onSubmit={handleFormSubmit} noValidate>
            <Typography id="modal-title" variant="h6" component="h2">
              Submission Form
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        )}
      </MuiModal>
    </Box>
  );
}