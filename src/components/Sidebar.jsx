import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utilities/constants";

// making this as a dynamic when we clicked to category name

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: 0, md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => {
      return (
        <button
          className="category-btn"
          style={{
            color: "#F5F5F5",
            backgroundColor: category.name === selectedCategory && "#FF6666",
          }}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      );
    })}
  </Stack>
);

export default Sidebar;
