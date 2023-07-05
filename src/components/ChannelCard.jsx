import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utilities/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetails, marginTop }) => {
  console.log(channelDetails);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetails?.snippet?.thumbnails?.high?.url}
            alt={channelDetails?.snippet?.title}
            sx={{
              borderRadius: "50%",
              mb: 2,
              height: "180px",
              width: "180px",
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{ color: "gray", fontSize: "15px", ml: "5px" }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}
            >
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
