import { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Button } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { FavoriteTwoTone } from '@mui/icons-material';

const drawerWidth = 240;
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#2C777A',
}));

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [open] = useState(true);

  const handleListItemClick = (path) => {
    router.push(path);
  };

  const menuItems = [
    { name: 'Characters', path: '/characters' },
    { name: 'Favorites', path: '/favorites' },
  ];

  const handleTitleClick = () => {
    router.push('/');
  };

  const navigateToCharacters = () => {
    router.push('/characters');
  };

  const drawerContent = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item.name} onClick={() => handleListItemClick(item.path)} style={{cursor: 'pointer'}}>
          <ListItemIcon>
            {item.name === 'Characters' ? <InboxIcon /> : <FavoriteTwoTone />}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={navigateToCharacters} 
            color="inherit"
          >
            Characters
          </Button>
          <Typography variant="h6" noWrap component="div" onClick={handleTitleClick} sx={{ flexGrow: 1, textAlign: 'center'}}>
            Rick and Morty Characters
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer variant="permanent" open={open}>
        {drawerContent}
      </StyledDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;