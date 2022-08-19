import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Rundown', 'Previous Topic', 'submit new topic', 'informacial'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NEWS DEPARTMENT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Box
        component="img"
        
        sx={{
            borderRadius: '5%',
          height: 30,
          width: 60,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="zwtvLogo"
        src="data:image/png;base64,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"
      />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;