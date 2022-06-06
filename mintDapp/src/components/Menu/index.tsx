import * as React from 'react';
import { Box} from '@mui/system';
import { Link } from "react-router-dom";
import {StyledMenu} from './style';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const MenuLinks = ({smallView}: any) => {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return( 
  

  <Box sx={StyledMenu}>
    {
      smallView ?
      <>
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuOpenIcon sx={{fill: 'white'}} fontSize='large'/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}><Link to="/gallery">Gallery</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/admin">Admin</Link></MenuItem>
        </Menu>             
      </>
      :
      <>
        <Link to="/gallery">Gallery</Link>
        <Link to="/admin">Admin</Link>
      </>
    }
    
  </Box>
  )
  
};

export default MenuLinks;
