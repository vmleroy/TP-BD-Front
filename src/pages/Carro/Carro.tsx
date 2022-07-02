import React, { useState } from 'react';

import axios from 'axios';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';

import CadastroCarro from './components/CadastroCarro';
import AtualizarCarro from './components/AtualizarCarro';
import FinalizarCarro from './components/FinalizarCarro';
import ObterCarro from './components/ObterCarro';

const Carro = ({ }) => {

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
                <NavBar turnButtonsOn={true} name={'Carro'} />
                <CadastroCarro />
                <AtualizarCarro />
                <FinalizarCarro />
                <ObterCarro />
            </Grid>
        </>
    );
}

export default Carro;