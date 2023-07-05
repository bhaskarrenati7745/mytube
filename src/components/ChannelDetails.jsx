import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utilities/fetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Videos from "./Videos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelInfo, setChannelInfo] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelInfo(data?.items[0])
    );

    // for the videos
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetails={channelInfo} marginTop="-93px" />
      </Box>
      <Box sx={{ display: "flex" }} p={2}>
        <Box sx={{ mr: { xs: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetails;
