"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const InfoDialog = () => {
  const [open, setOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubscribed(false);
  };

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div>
        <h2>Successfully Subscribed!</h2>
        <p>Thank you for subscribing to our newsletter. You'll receive updates occasionally.</p>
        <p>We've sent a confirmation email to verify your subscription.</p>
        <Button onClick={() => setSubscribed(false)}>Back</Button>
      </div>
    );
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubscribe}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InfoDialog;