import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utilities/fetchFromApi";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    // the videos are getting as soon as we are selecting the category names so it depends on categorySelection
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          padding: { sx: 0, md: 2 },
        }}
      >
        {/* here goes the sidebar */}
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          sx={{ color: "#fff", mt: 1.5 }}
          className="copyright"
          variant="body2"
        >
          copyright 2023 M media
        </Typography>
      </Box>
      {/* here goes the content feed */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "whitesmoke" }}
        >
          {selectedCategory} <span style={{ color: "red" }}>Videos</span>
        </Typography>
        {/* the videos container */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
