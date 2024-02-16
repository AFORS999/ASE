import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import DialogBox from "../authentication/DialogBox";
import name from '../static/Name3.png';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import logo1 from '../static/logo2.png';
import { useNavigate } from "react-router-dom";
import './Landing.css';
import backgroundImage from '../static/landingbg3.jpg';

const LandingPage = () => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const paragraphs = ['🟢 Life is a complex journey filled with experiences, challenges, and opportunities. It’s a dynamic process of growth and change, where every individual navigates their unique path. Life is not just about survival, but also about exploring one’s passions, nurturing relationships, and striving for personal and professional fulfillment. It’s about learning from our mistakes, celebrating our successes, and constantly evolving as individuals.', '🔵 Quality of life, on the other hand, is a broad multidimensional concept that includes subjective evaluations of both positive and negative aspects of life. It’s not just about material wealth or physical well-being, but also about emotional, social, and psychological well-being. Quality of life encompasses factors such as health, education, employment, environment, social relationships, and personal beliefs. It’s about feeling satisfied, happy, and fulfilled in different areas of life.', '🔴 The interplay between life and quality of life is significant. While life offers us various experiences, it’s the quality of these experiences that determines our satisfaction and happiness. A high quality of life can enhance our overall life experience, making it more meaningful and enjoyable. Conversely, a low quality of life can make life challenging and less satisfying. Therefore, striving for a better quality of life is an integral part of living a fulfilling and contented life.'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        }, 7000); // 5 seconds to show the paragraph, 1 second to fade in, 1 second to fade out
        return () => clearTimeout(timer);
    }, [index, paragraphs.length]);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const redirectToProfile = () => {
        navigate('/about');
    };

    const styles = {
        container: {
            backgroundImage: `url('background.jpg')`,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            margin: '10px',
            position: 'absolute',
            bottom: '10px',
            color: '#000000',
            backgroundColor: 'rgba(0,0,0,0)',
            cursor: 'pointer',

        },
        loginButton: {
            margin: '10px',
            position: 'absolute',
            right: '20px',
            top: '25px',
            color: '#25995c',
            backgroundColor: 'white',
            borderColor: '#25995c',
            border: '2px solid'
        },
        bgPaper: {
            position: 'absolute',
            top: '15vh',
            width: '100%',
            height: '85vh',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            filter: 'blur(3px)'
        },
        inTextName: {
            height: '18px',
            marginTop: '10px'

        },
        quotes: {
            marginTop: "20px",
            width: '70%',
            minHeight: '25vh',
            position: 'absolute',
            top: '50vh',
            textAlign: 'justify',
            textJustify: 'inter-word',
        },
        name: {
            maxWidth: '80%',
            maxHeight: '20vh',
            position: 'absolute',
            top: '20vh'
        }

    };

    return (

        <Box style={styles.container}>
            <DialogBox state={isDialogOpen} handleClose={handleDialogClose} />
            <img src={logo1} className="App-logo" alt="logo" />
            <Button variant="contained" color="primary" style={styles.loginButton} onClick={handleDialogOpen}>
                Login / Signup
            </Button>
            <Paper style={styles.bgPaper}>

            </Paper>
            <Grid
                container
                justifyContent="center"
                alignItems="center" >
                <Grid
                    item
                    container
                    xl={12}
                    lg={12}
                    xs={12}
                    alignItems="center"
                    justifyContent="center"
                >
                    <img src={name} style={styles.name} />
                </Grid>
                <Grid
                    item
                    container
                    xl={12}
                    lg={12}
                    xs={12}
                    alignItems="center"
                    justifyContent="center"
                >
                    <div style={styles.quotes}>
                        <div key={index} className="fade">
                            {paragraphs[index]}
                        </div>
                    </div>
                </Grid>

                <div variant="contained" color="secondary" style={styles.button} onClick={redirectToProfile}>
                    If you want tips on how <img src={name} style={styles.inTextName} /> click here!
                </div>
            </Grid>
        </Box>
    );
};

export default LandingPage;
