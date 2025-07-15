'use client'

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const questions = [
    'question1',
    'question2',
    'question3',
    'question4',
    'question5',
    'question6',
    'question7',
    'question8',
  ];

  const handleNavigate = (question) => {
    router.push(`/${question}`);
    setOpen(false); 
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {questions.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleNavigate(text)}>
              
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
