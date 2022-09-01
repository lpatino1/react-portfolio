import React from "react";
import { Grid, Card, CardMedia, Typography, CardContent, Paper } from "@mui/material";
import XiaoImg from '../../Xiao.jpg'

function About(){
    const paperStyle={height: "70vh", width: "40vw", padding: 20, margin: '20px auto', backgroundColor:"lightgrey"}
    return (
        <div>
            <Grid container spacing = {3}>
                <Grid item xs={12} align="left" sx={{marginLeft: "50px"}}>
                    <h2>About Me</h2>
                </Grid>
                <Grid container align="center" >
                <Grid item xs ={6} sx={{margin: "20px auto"}}>
                    <Card sx={{ maxWidth: 345 }}>
                    
                        <CardMedia
                        component="img"
                        height="340"
                        image={XiaoImg}
                        alt="xiao from genshin impact"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lesli Patino
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Currently Resides in the U.S.
                        </Typography>
                        </CardContent>
                    
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Paper variant = "outlined" elevation={12} style={paperStyle}>
                    <Typography>
                        A newbie dev with a passion for React and Material UI.

                        
                    </Typography>
                    <br></br>
                    <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                    </Paper>
                </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;