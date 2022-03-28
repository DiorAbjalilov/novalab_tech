import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./style.css";
const Navbar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/profil");
    }
  };

  return (
    <>
      <nav>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab label="Home" />
            <Tab label="Profil" />
          </Tabs>
        </Box>
        <h3>Welcome! Diyor</h3>
      </nav>
    </>
  );
};

export default Navbar;
