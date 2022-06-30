import React from 'react';

import axios from 'axios';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';
import CadastroAluguel from './components/CadastroAluguel';
import FinalizarAluguel from './components/FinalizarAluguel';
import ObterAluguel from './components/ObterAluguel';

import IAluguel from '../../interface/IAluguel';

const Aluguel = ({ }) => {

    React.useEffect(() => {
        axios.get("http://localhost:5000/aluguel")
            .then(res => {
                setAlugueis(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const [alugueis, setAlugueis] = React.useState<IAluguel[]>([]);

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
                <FinalizarAluguel aluguelProps={alugueis} />
                <ObterAluguel />
            </Grid>
        </>
    );
}

export default Aluguel;