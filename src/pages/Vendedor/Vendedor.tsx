import React from 'react';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';
import CadastroVedendor from './components/CadastroVedendor';
import AtualizarVedendor from './components/AtualizarVedendor';
import FinalizarVedendor from './components/FinalizarVedendor';
import ObterVedendor from './components/ObterVedendor';
import GerarFolhaPagamento from './components/GerarFolhaPagamento';

const Vedendor = ({ }) => {
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
                <NavBar turnButtonsOn={true} name={'Vedendor'} />
                <CadastroVedendor />
                <AtualizarVedendor />
                <FinalizarVedendor />
                <ObterVedendor />
                <GerarFolhaPagamento />
            </Grid>
        </>
    );
}

export default Vedendor;