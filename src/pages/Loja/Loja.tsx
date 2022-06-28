import React from 'react';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';
import CadastroLoja from './components/CadastroLoja';
import AtualizarLoja from './components/AtualizarLoja';
import FinalizarLoja from './components/FinalizarLoja';
import ObterLoja from './components/ObterLoja';

const Loja = ({ }) => {
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
                <NavBar turnButtonsOn={true} name={'Loja'} />
                <CadastroLoja />
                <AtualizarLoja />
                <FinalizarLoja />
                <ObterLoja />
            </Grid>
        </>
    );
}

export default Loja;