import { Box, Typography } from "@mui/material";
import React from "react";
import logoQuattrus from "./../../../../public/assets/logoQuattrusWhite.svg";
import logoProject from "./../../../../public/assets/logoProject.svg";

const TopBar: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", display: "flex" }}>
      <div className="flex flex-none  items-center justify-center bg-project"      >
        <img className="p-2 flex" src={logoProject.src}></img>
      </div>
      <div className="flex flex-1 items-center h-12">
        <img className="max-h-4 me-2 ms-4" src={logoQuattrus.src}></img>
        <Typography variant="h5" color="common.white">
          | Project
        </Typography>
      </div>
      <div>
        <button></button>
      </div>
    </Box>
  );
};

export default TopBar;
