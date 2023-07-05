import React from "react";
import { Stack } from "@mui/material";
import { logo } from "../utilities/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    p={2}
    alignItems="center"
    sx={{
      background: "#000",
      justifyContent: "space-between",
      position: "sticky",
      top: "0px",
    }}
  >
    <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
