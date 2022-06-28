import React from 'react';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';
import CadastroAluguel from './components/CadastroAluguel';
import FinalizarAluguel from './components/FinalizarAluguel';

const Aluguel = ({ }) => {
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
                <NavBar turnButtonsOn={true} name={'Aluguel'} />
                <CadastroAluguel />
                <FinalizarAluguel />
            </Grid>
        </>
    );
}

export default Aluguel;