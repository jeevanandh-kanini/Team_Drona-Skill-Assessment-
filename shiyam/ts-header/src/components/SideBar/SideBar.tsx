import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import './css/sideBar.css'

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function SideBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const DashboardIcon = styled('div')(({ theme }) => ({
    margin:'10px'    
  }));

  const drawer = (
    <div>
      <Toolbar className='side-bar'/>
      
      <List>
      <ListItem>
        <ListItemButton /*selected*/>
          <DashboardIcon>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.89853 18C1.36983 18 0.921228 17.8158 0.552737 17.4473C0.184245 17.0788 0 16.6302 0 16.1015V1.92256C0 1.39386 0.184245 0.941255 0.552737 0.564753C0.921228 0.188251 1.36983 0 1.89853 0H16.0774C16.6061 0 17.0587 0.188251 17.4352 0.564753C17.8117 0.941255 18 1.39386 18 1.92256V16.1015C18 16.6302 17.8117 17.0788 17.4352 17.4473C17.0587 17.8158 16.6061 18 16.0774 18H1.89853ZM7.30574 16.1015V9.73298H1.89853V16.1015H7.30574ZM8.74766 16.1015H16.0774V9.73298H8.74766V16.1015ZM1.89853 8.29105H16.0774V1.92256H1.89853V8.29105Z" fill="#0C1116"/>
</svg>
          </DashboardIcon>
          Dashboard
        </ListItemButton>
      </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Box 
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        </Box>
    </Box>
  );
}