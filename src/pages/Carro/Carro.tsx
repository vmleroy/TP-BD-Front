import React, { useState } from 'react';

import axios from 'axios';

import { Grid } from '@mui/material';

import NavBar from '../../components/NavBar/NavBar';

import CadastroCarro from './components/CadastroCarro';
import AtualizarCarro from './components/AtualizarCarro';
import FinalizarCarro from './components/FinalizarCarro';
import ObterCarro from './components/ObterCarro';

import ICarro from '../../interface/ICarro';

const Carro = ({ }) => {

    React.useEffect(() => {
        axios.get("http://localhost:5000/carro/consultar")
            .then(resposta => {
                console.log(resposta.data);
                setCarros(resposta.data);
            })
            .catch(erro => {
                console.log(erro);
            });
    });

    const [ carros, setCarros ] = useState<ICarro[]>([]);

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
                <ObterCarro carrosProps={carros} />
            </Grid>
        </>
    );
}

export default Carro;