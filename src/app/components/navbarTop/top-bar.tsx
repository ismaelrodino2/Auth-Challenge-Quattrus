import { Box, Typography } from "@mui/material";
import React from "react";
import logoQuattrus from "./../../../../public/assets/logoQuattrusWhite.svg";
import logoProject from "./../../../../public/assets/logoProject.svg";

const TopBar: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", display: "flex" }}>
      
      <div className="flex items-center h-12">
        <img className="max-h-4 me-2" src={logoQuattrus.src}></img>
        <Typography variant="h6" color="common.white">
          {" "}
          | Project{" "}
        </Typography>
      </div>
      <div>
        <button></button>
      </div>
    </Box>
  );
};

export default TopBar;
