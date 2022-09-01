
import "./style.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Paper from '@mui/material/Paper';



export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);


  
  return (
    <Box sx={{ pb: 7}} ref={ref}>
      <CssBaseline />
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction href="https://github.com/lpatino1" target = "blank" label="Github" icon={<GitHubIcon />} />
          <BottomNavigationAction href="https://www.linkedin.com/" target = "blank" label="LinkedIn" icon={<LinkedInIcon />} />
          <BottomNavigationAction href="https://twitter.com/" target = "blank"label="Twitter" icon={<TwitterIcon/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}