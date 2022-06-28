import React from 'react';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';
import CadastroAluguel from './components/CadastroAluguel';

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
            </Grid>
        </>
    );
}

export default Aluguel;