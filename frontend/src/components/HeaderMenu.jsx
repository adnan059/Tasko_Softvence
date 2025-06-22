import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

export default function HeaderMenu() {
  const { currentUser } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    setAnchorEl(null);
  };

  return (
    <div className="headerMenu">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar
          alt="User"
          src="https://static.thenounproject.com/png/1122811-200.png"
          sx={{
            width: 24,
            height: 24,
            background: "#fff",
          }}
        />
        <p className="userName">{currentUser?.fullName.split(" ")[0]}</p>
        <ArrowDropDownIcon sx={{ width: 23, height: 23, color: "white" }} />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleLogout} sx={{ fontSize: "16px" }}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
