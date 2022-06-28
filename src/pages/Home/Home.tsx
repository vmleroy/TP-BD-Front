import React from 'react';
import { useNavigate } from "react-router-dom";

import { Grid, Typography } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';
import NavButtons from '../../components/Buttons/NavButtons';

const Home = ({ }) => {

    const navigate = useNavigate();

    const handleClickAluguel = () => { navigate('/aluguel'); };
    const handleClickCarros = () => { navigate('/carro'); };
    const handleClickCliente = () => { navigate('/cliente'); };
    const handleClickLoja = () => { navigate('/loja'); };
    const handleClickVedendor = () => { navigate('/vedendor'); };

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
                <NavBar turnButtonsOn={false} name={'Home'} />
                <Grid container item direction='column' alignItems='center'
                    sx={{
                        my: "2rem",
                    }}
                >
                    <Typography>
                        Telas disponíveis:
                    </Typography>
                    <NavButtons name={'Aluguel'} handleClick={handleClickAluguel} />
                    <NavButtons name={'Carros'} handleClick={handleClickCarros} />
                    <NavButtons name={'Cliente'} handleClick={handleClickCliente} />
                    <NavButtons name={'Loja'} handleClick={handleClickLoja} />
                    <NavButtons name={'Vedendor'} handleClick={handleClickVedendor} />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;