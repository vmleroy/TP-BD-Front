import React from 'react';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';
import CadastroCliente from './components/CadastroCliente';
import AtualizarCliente from './components/AtualizarCliente';
import FinalizarCliente from './components/FinalizarCliente';
import ObterCliente from './components/ObterCliente';

const Cliente = ({ }) => {
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
                <NavBar turnButtonsOn={true} name={'Cliente'} />
                <CadastroCliente />
                <AtualizarCliente />
                <FinalizarCliente />
                <ObterCliente />
            </Grid>
        </>
    );
}

export default Cliente;