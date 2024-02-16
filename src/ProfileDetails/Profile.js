import React, { useState } from 'react';
import Helmet from 'react-helmet';
import MuiAlert from '@mui/material/Alert';
import {
    CircularProgress, Snackbar, Chip, Button, Link, Grid, Box, Card, CardContent,
    Typography, Container, Divider, Paper, Avatar
} from '@mui/material';

import {
    Email, Assistant, CreditScore,
    LocationOn, StarsRounded, InfoRounded, ImportContactsRounded, PhoneRounded, VerifiedRounded
} from '@mui/icons-material';
import Image from '../static/image.jpg';
import Banner from '../static/landingbg3.jpg';
import Stack from '@mui/material/Stack';


function Profile() {
    const [alreadyApplied, setAlreadyApplied] = useState(false);
    const [userType, setUserType] = useState("");
    const [resReady, setResReady] = useState(false);
    const [url, setUrl] = useState('http://localhost:3000/company-profile/');
    const [loading, setLoading] = useState(false);

    const [copiedAlertOpen, setCopiedAlertOpen] = useState(false);

    const job = {
        id: 0,
        title: "React Front End Developer"
        , country: "Canada"
        , city: "Alberta"
        , workingdistance: true
        , cooperation: "HT"
        , isLoggedIn: false
        , companyname: "Supermojo"
        , email: "Supermojo@gmail.com"
        , nofemployees: "100 - 200"
        , aboutjob: "As a key member of the development team, you possess an understanding of the fundamentals in software development and have pride in the work you do. You're interested in the bleeding edge of technology and want to find more meaning and impact in your everyday work."
        , salary: "$ 80,000 per year"
        , experiencelevel: "J"
        , technologies: ["React js", "Redux", "Github"]
        , essentialskills: "Expert knowledge of modern front-end frameworks such as ReactJS, TypeScript. 1 - 3 years of commercial experience desired. Working knowledge of NodeJS, Typescript and RESTful / GraphQL APIs for front - end clients to consume Working knowledge of database interactions (eg.PostgreSQL and / or IPFS)"
        // , scoringskills: "Excellent command of at least one programming language Deep knowledge of web technologies and large - scale web application architectures. Demonstrable experience of building scalable and performant commercial / enterprise software. Familiarity with whitebox QA and test automation(eg Cypress) Strong customer empathy where you can think critically of how features impact Supermojo’s community of users, and businesses."
        , benefits: ["Life Insurance", "Flexible Schedules", "Education Assistance"]
        , scoringskills: []
    }

    const handleCopiedClick = () => {
        setCopiedAlertOpen(true);
    };

    const handleCopiedClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setCopiedAlertOpen(false);
    };
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    };


    return (
        <div>
            <Helmet bodyAttributes={{ style: 'background-color : #f0f0f0' }}> </Helmet>

            <Container component="main"
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90%',
                }}>
                <img className='banner-image' src={Banner} style={{ marginTop: "-0.5rem", width: '100%', height: '150px', borderRadius: '8px' }} />
                <Grid container>
                    <Grid item xs={10}>
                        <Stack direction="row" sx={{ maxWidth: 345 }} style={{ marginLeft: "2.3rem", marginTop: "-4.8rem" }}>
                            <Avatar variant="rounded" sx={{ bgcolor: "#f2f2f2", width: "130px", height: "130px" }} src={Image}>
                            </Avatar>

                        </Stack>
                    </Grid>
                    <Grid item xs={12} direction="row" style={{ marginLeft: "190px", marginTop: "-40px" }}>
                        <Typography variant="h6" display="inline" style={{ color: "black" }}>
                            Amin Motavasseli
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{ padding: '10px', marginBottom: '30px' }}
                    spacing={1}
                >

                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card variant="outlined" style={{
                            borderRadius: '10px', marginTop: '10px', padding: '15px', height: "400px"
                            , backgroundColor: "#bbfff3"
                        }} >

                            <CardContent>

                                <Typography sx={{ paddingLeft: '3px', paddingBottom: '15px', fontWeight: 'bold' }}>
                                    <ImportContactsRounded style={{ paddingRight: '10px', color: '#25995c', verticalAlign: 'middle' }} />

                                    Portfilo & contact
                                </Typography>
                                <Divider />


                                <Typography sx={{ paddingTop: '30px', paddingBottom: '30px' }} >
                                    <Email style={{ paddingRight: '7px', color: '#25995c', verticalAlign: 'middle' }} />
                                    <Link sx={{ color: 'black', cursor: 'pointer' }} underline="hover" onClick={() => { navigator.clipboard.writeText(job.email); handleCopiedClick(); }}> aminmotavasseli@gmail.com</Link>
                                </Typography>

                                <Snackbar
                                    open={copiedAlertOpen}
                                    autoHideDuration={1150}
                                    onClose={handleCopiedClose}
                                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}

                                >
                                    <Alert onClose={handleCopiedClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                                        Email address copied to clipboard
                                    </Alert>
                                </Snackbar>

                                <Typography sx={{ paddingBottom: '30px' }} >
                                    <PhoneRounded style={{ paddingRight: '9px', color: '#25995c', verticalAlign: 'middle' }} />
                                    09353058666
                                </Typography>

                                <Typography sx={{ paddingBottom: '30px' }} >
                                    <LocationOn style={{ paddingRight: '9px', color: '#25995c', verticalAlign: 'middle' }} />
                                    Iran - Tehran
                                </Typography>

                                <Typography sx={{ paddingBottom: '30px' }} >
                                    <VerifiedRounded style={{ paddingRight: '9px', color: '#25995c', verticalAlign: 'middle' }} />
                                    VIP account
                                </Typography>
                            </CardContent>
                        </Card>

                    </Grid>

                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>

                            <Card variant="outlined" style={{ borderRadius: '10px', marginTop: '10px', padding: '15px', height: "180px" }} >
                                <CardContent>
                                    <Typography sx={{ paddingBottom: '20px', fontWeight: 'bold' }} >
                                        <InfoRounded style={{ paddingRight: '10px', color: '#25995c', verticalAlign: 'middle' }} />
                                        About Me
                                    </Typography>

                                    <Typography sx={{ paddingBottom: '15px' }} >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>

                            <Card variant="outlined" style={{ borderRadius: '10px', marginTop: '10px', padding: '15px', height: "180px" }} >
                                <CardContent>
                                    <Typography sx={{ paddingBottom: '20px', fontWeight: 'bold' }} >
                                        <StarsRounded style={{ paddingRight: '10px', color: '#25995c ', verticalAlign: 'middle' }} />

                                        Favorite categories
                                    </Typography>
                                    <Stack xs={12} direction="row" spacing={2} sx={{ padding: '10px' }}>
                                        <Chip variant="outlined" label="Computer Science" style={{ color: 'black', backgroundColor: '#bbfff3' }} />
                                        <Chip variant="outlined" label="Spanish Language" style={{ color: 'black', backgroundColor: '#bbfff3' }} />
                                        <Chip variant="outlined" label="AI development" style={{ color: 'black', backgroundColor: '#bbfff3' }} />
                                        <Chip variant="outlined" label="Game development" style={{ color: 'black', backgroundColor: '#bbfff3' }} />
                                    </Stack>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>


                </Grid>


            </Container>
        </div>
    )

}




export default Profile;