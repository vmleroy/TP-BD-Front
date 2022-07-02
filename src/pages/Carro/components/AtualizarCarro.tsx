import React from 'react';

import axios from 'axios';

import { Button, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';

const AtualizarCarro = ({ }) => {

    const [placa, setPlaca] = React.useState<string>('');
    const [idEstabelecimento, setIdEstabelecimento] = React.useState<string>('');
    const [custoDia, setCustoDia] = React.useState<string>('');

    const handleClick = () => {
        const updtCarro = { placa: placa, idestabelecimento: idEstabelecimento, custodia: custoDia };
        axios.put("http://localhost:5000/carro/atualizar", updtCarro)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <>
            <Grid
                container
                width="95%"
                margin="0.5rem"
                alignItems="center"
                direction="row"
                sx={{ minHeight: "25vh" }}
            >
                <Grid item alignItems="center" xs={12} sx={{ backgroundColor: '#120458' }}>
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "1.5rem",
                            color: 'white',
                            margin: "1rem"
                        }}
                    >
                        Atualizar cadastro:
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    alignItems="left"
                    sx={{ minHeight: "20vh", border: 2, borderColor: "#120458" }}
                >
                    <Grid item xs={10} >
                        <CampoDeTexto label={'Placa'} setValue={setPlaca} />
                        <CampoDeTexto label={'ID Estabelecimento'} setValue={setIdEstabelecimento} />
                        <CampoDeTexto label={'Custo dia'} setValue={setCustoDia} />
                    </Grid>
                    <Grid item container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Atualizar cadastro </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default AtualizarCarro;