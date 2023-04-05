import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import 'E:/ts-header/src/index.css'; 
import './Assets/profile-icon.png'
import { Stack } from '@mui/material';
import {Grid} from '@mui/material';
import './css/topBar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const StyledToolbar = styled(Toolbar)({
  display:'flex', 
  justifyContent:'space-between',
  backgroundColor:'#F8FDFF',
})

const StyledAppBar = styled(AppBar)({
  backgroundColor:'#F8FDFF',

})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: (theme.shape.borderRadius),
  border: '1px solid #A8B0B9',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '60%',
  height:'50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '60%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: '#A8B0B9',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const NotificationIconWrapper = styled('div')(({ theme }) => ({
  color: '#0F0F59',
  width:'5%',
  height: '50%',
  position: 'relative',
  top:'25%',
  
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        width: '20ch',
      },
    },
  },
  input: {
    '&::placeholder': {
      color:'black',
    }
  }
}));

const drawerWidth = 240;


function TopBar(){
  return (
    <StyledAppBar position='sticky' sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}>
      <StyledToolbar sx={{height:'95px'}}>
        <Grid container spacing={1} alignItems={'center'} justifyContent={'center'}>
          <Grid item xs={3}>
            <Stack direction={'column'} width={'100%'}>
              <Typography variant='h5' component={'h6'} className='top-bar-head' fontSize={'1.5rem'} >Welcome, Admin!</Typography>
              <Typography component={'p'} className='top-bar-context' fontSize={'12px'}>View complete details of all location and its corresponding details.</Typography>
            </Stack>
          </Grid>
            <Grid item xs={6} >
              <Stack flexDirection={'row'} justifyContent={'space-evenly'}>
              <Search className='search-bar' >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  />
              </Search>
                <NotificationIconWrapper>
                  <NotificationsNoneIcon/>
                </NotificationIconWrapper>
                <img src={require("./Assets/profile-icon.png" )} width={'7%'} height={'7%'} />
                <Typography component={'p'} className='profile-name' >
                  HR Admin
                </Typography>
              </Stack>
            </Grid>
        </Grid>
      </StyledToolbar>
        
      
    </StyledAppBar>
  )
}







export default TopBar;

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));
// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '280px',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));
// export default function SearchAppBar() {
//   return (
//     <Box sx={{display:"flex", alignItems:"flex-end"}}>
//       <AppBar position="static" >
//         <Toolbar sx = {{height:"104px"}}>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
//             MUI
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}/>
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }