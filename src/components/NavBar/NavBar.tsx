import React from 'react'

import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';

interface Props {
    turnButtonsOn: boolean
}

const NavBar: React.FC<Props> = ({ turnButtonsOn }) => {
    return (
        <>
            <CssBaseline />
            <Grid sx={{ width: "100vw" }}>
                <AppBar position="static" sx={{ backgroundColor: "#120458" }}>
                    <Toolbar>
                        <Typography variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, margin: 1, color: "white" }}>
                            Locadora de carros
                        </Typography>
                        {turnButtonsOn &&
                            <Button
                                variant='outlined'
                                sx={{ mx: "0.5rem", backgroundColor: "white" }}
                            >
                                Aluguel
                            </Button>
                        }
                        {turnButtonsOn &&
                            <Button
                                variant='outlined'
                                sx={{ mx: "0.5rem", backgroundColor: "white" }}
                            >
                                Carros
                            </Button>
                        }
                        {turnButtonsOn &&
                            <Button
                                variant='outlined'
                                sx={{ mx: "0.5rem", backgroundColor: "white" }}
                            >
                                CLiente
                            </Button>
                        }
                        {turnButtonsOn &&
                            <Button
                                variant='outlined'
                                sx={{ mx: "0.5rem", backgroundColor: "white" }}
                            >
                                Loja
                            </Button>
                        }
                        {turnButtonsOn &&
                            <Button
                                variant='outlined'
                                sx={{ mx: "0.5rem", backgroundColor: "white" }}
                            >
                                Vedendor
                            </Button>
                        }
                    </Toolbar>
                </AppBar>
            </Grid>
        </>
    );
}

export default NavBar;