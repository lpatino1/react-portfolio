import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function Resume(){
    const paperStyle={padding: 15, height:'70vh', width: 450, margin: '40px auto'}
    return (
        <Grid container justifyContent="center" align="center">
            <Grid item>
                <Paper variant="outlined" elevation={10} style={paperStyle}>
                <Typography>
                        <h2>Skills</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Mysql</li>
                            <li>Mongo</li>
                        </ul>
                    </Typography>
                <Button variant="contained">Download Resume</Button>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Resume;