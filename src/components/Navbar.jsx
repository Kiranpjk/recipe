import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import React,{useState} from "react";
import { useTheme } from "../../src/components/ThemeContext";
import { SignedIn, SignInButton, SignedOut, useUser,useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  const { signOut } = useClerk();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {
    await signOut();
  };
  const logosrc =
    theme === "light"
      ? "../../src/assets/appetizer_8615014.png"
      : "../../src/assets/appetizer_8615069.png";

  return (
    <AppBar position="sticky" sx={{ backgroundColor: theme==='light'?'white':'#333' }}>
      <Toolbar>
        <Box sx={{ flexGrow: "1" }}>
          <img
            src={logosrc}
            alt="Recipe "
            style={{ width: "auto", height: "40px" }}
          />
        </Box>
        <SignedIn>
          {user && (
            <>
              <Button
                onClick={toggleTheme}
                variant="contained"
                sx={{ marginRight: 2 }}
              >
                {theme == "light" ? "DarkMode" : "lightMode"}
              </Button>

              <Avatar
                src={user?.imageUrl}
                sx={{cursor:"pointer"}}
                alt="profile"
                onClick={handleProfileClick}
              />
              <Menu
                anchorEl ={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant="outlined" color="primary">
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
