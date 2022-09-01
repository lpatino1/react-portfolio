import React from "react";
import { Card, CardMedia, CardContent, Typography, Link, Grid} from '@mui/material';
import pic2 from "../../genshin-impact-fan-quiz.png";
import pic1 from "../../concertopia.png";
import pic3 from "../../bodybackground.png";

function Portfolio(){
    return (
        <div>
        <h2>My apps</h2>
        <Grid container align="center">
            <Grid item xs={4} sx={{marginTop: "15px"}}>
                <Card sx={{ maxWidth: 345 }}>
                    
                    <CardMedia
                    component="img"
                    height="140"
                    image={pic1}
                    alt="deployed app"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       Concertopia
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://github.com/lpatino1/concertopia" target="_blank">Github Repo</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://lpatino1.github.io/concertopia/" target="_blank">Deployed app</Link>
                    </Typography>
                    </CardContent>
                
                </Card>
            </Grid>
            <Grid item xs={4} sx={{marginTop: "15px"}}>
                <Card sx={{ maxWidth: 345 }}>
                   
                    <CardMedia
                    component="img"
                    height="140"
                    image={pic2}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Genshin Impact Fan Quiz (WIP)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://github.com/lpatino1/timed-trivia-quiz" target="_blank">Github Repo</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://lpatino1.github.io/timed-trivia-quiz/" target="_blank">Deployed app</Link>
                    </Typography>
                    </CardContent>
                
                </Card>
            </Grid>
            <Grid item xs={4} sx={{marginTop: "15px"}}>
                <Card sx={{ maxWidth: 345 }}>
                    
                    <CardMedia
                    component="img"
                    height="140"
                    image={pic3}
                    alt="blue sky"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       Password Generator
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://github.com/lpatino1/password-generator" target="_blank">Github Repo</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://lpatino1.github.io/password-generator/" target="_blank">Deployed app</Link>
                    </Typography>
                    </CardContent>
               
                </Card>
            </Grid>
            <Grid item xs={4} sx={{marginTop: "15px"}}>
                <Card sx={{ maxWidth: 345 }}>
                    
                    <CardMedia
                    component="img"
                    height="140"
                    image={pic3}
                    alt="blue sky"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Portfolio
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://github.com/lpatino1/portfolio" target="_blank">Github Repo</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href=" https://lpatino1.github.io/portfolio/" target="_blank">Deployed app</Link>
                    </Typography>
                    </CardContent>
                
                </Card>
            </Grid>
            <Grid item xs={4} sx={{marginTop: "15px"}}>
                <Card sx={{ maxWidth: 345 }}>
                    
                    <CardMedia
                    component="img"
                    height="140"
                    image={pic3}
                    alt="blue sky"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Code Refactor Challenge
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://github.com/lpatino1/code-refactor-challenge" target="_blank">Github Repo</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://lpatino1.github.io/code-refactor-challenge/" target="_blank">Deployed app</Link>
                    </Typography>
                    </CardContent>
                
                </Card>
            </Grid>
            <Grid item xs={4} sx={{marginTop: "15px"}}>
                <Card sx={{ maxWidth: 345 }}>
                    
                    <CardMedia
                    component="img"
                    height="140"
                    image={pic3}
                    alt="blue sky"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Learn Arcana (WIP)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="https://github.com/lpatino1/learn-arcana" target="_blank">Github Repo</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href="#" target="_blank">Not Yet Deployed</Link>
                    </Typography>
                    </CardContent>
                
                </Card>
            </Grid>
        </Grid>
        </div>  
    );
}

export default Portfolio;