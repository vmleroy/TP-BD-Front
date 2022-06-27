import React from 'react';

import { Button, Grid, Typography } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';

const Home = ({ }) => {
    return (
        <>
            <Grid
                container
                item
                direction='column'
                alignItems='center'
                sx={{
                    minWidth: '100vw',
                    minHeight: '100vh'
                }}
            >
                <NavBar turnButtonsOn={false} />
                <Grid container item direction='column' alignItems='center'
                    sx={{
                        my: "2rem",
                    }}
                >
                    <Typography>
                        Telas disponíveis:
                    </Typography>
                    <Button
                        variant='outlined'
                        sx={{ my: 2, width: "10vw", height: "4vh" }}
                    >
                        Aluguel
                    </Button>
                    <Button
                        variant='outlined'
                        sx={{ my: 2, width: "10vw", height: "4vh" }}
                    >
                        Carros
                    </Button>
                    <Button
                        variant='outlined'
                        sx={{ my: 2, width: "10vw", height: "4vh" }}
                    >
                        Cliente
                    </Button>
                    <Button
                        variant='outlined'
                        sx={{ my: 2, width: "10vw", height: "4vh" }}
                    >
                        Loja
                    </Button>
                    <Button
                        variant='outlined'
                        sx={{ my: 2, width: "10vw", height: "4vh" }}
                    >
                        Vedendor
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Home;