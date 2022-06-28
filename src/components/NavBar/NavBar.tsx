import React from 'react'
import { useNavigate } from "react-router-dom";

import { AppBar, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';

import BarButtons from '../../components/Buttons/BarButtons';

interface Props {
    turnButtonsOn: boolean,
    name: string
}

const NavBar: React.FC<Props> = ({ turnButtonsOn, name }) => {

    const navigate = useNavigate();

    const handleClickAluguel = () => { navigate('/aluguel'); };
    const handleClickCarros = () => { navigate('/carro'); };
    const handleClickCliente = () => { navigate('/cliente'); };
    const handleClickLoja = () => { navigate('/loja'); };
    const handleClickVedendor = () => { navigate('/vedendor'); };

    return (
        <>
            <CssBaseline />
            <Grid sx={{ width: "100vw" }}>
                <AppBar position="static" sx={{ backgroundColor: "#120458" }}>
                    <Toolbar>
                        <Typography variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, margin: 1, color: "white" }}>
                            Locadora de carros - {name}
                        </Typography>
                        {turnButtonsOn &&
                            <BarButtons name={'Aluguel'} handleClick={handleClickAluguel}/>
                        }
                        {turnButtonsOn &&
                            <BarButtons name={'Carros'} handleClick={handleClickCarros} />
                        }
                        {turnButtonsOn &&
                            <BarButtons name={'Cliente'} handleClick={handleClickCliente} />
                        }
                        {turnButtonsOn &&
                            <BarButtons name={'Loja'} handleClick={handleClickLoja} />
                        }
                        {turnButtonsOn &&
                            <BarButtons name={'Vedendor'} handleClick={handleClickVedendor} />
                        }
                    </Toolbar>
                </AppBar>
            </Grid>
        </>
    );
}

export default NavBar;