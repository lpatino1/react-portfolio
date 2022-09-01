import { Grid, Paper, TextareaAutosize, TextField, Typography } from "@mui/material";
import React from "react";

function Contact(){
    const paperStyle = {padding: 15, height:'70vh', width: 450, margin: '40px auto'}
    return (
        <Grid container justifyContent="center" sx={{padding: "3px"}}>
            <Grid item>
                <Paper variant='outlined' elevation={12} style={paperStyle}>
                    <Typography>
                        <h4>Contact Me</h4>
                    </Typography>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField label="Name" placeholder="Enter name" variant="standard" required fullWidth>
                            </TextField>

                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Email" placeholder="Enter email" variant="standard" required fullWidth>
                            </TextField>

                        </Grid>
                        <Grid item xs={12}>
                           <TextareaAutosize  aria-label="minimum height" minRows={3}placeholder="Enter Message" style={{ width: 400}} required/>

                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Contact;