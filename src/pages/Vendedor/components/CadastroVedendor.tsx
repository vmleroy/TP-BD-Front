import React from 'react';

import axios from 'axios';

import { Button, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';

const CadastroVedendor = ({ }) => {

    const [idLoja, setIdLoja] = React.useState<string>('');
    const [cpfVedendor, setCpfVendedor] = React.useState<string>('');
    const [nome, setNome] = React.useState<string>('');
    const [salario, setSalario] = React.useState<string>('');


    const handleClick = () => {
        const newVendedor = {idestabelecimento: idLoja, nome: nome, cpf: cpfVedendor, salariobase: salario}
        axios.post('http://localhost:5000/vendedor/cadastro', newVendedor)
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
                        Cadastro vedendores:
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
                        <CampoDeTexto label={'ID Loja'} setValue={setIdLoja} />
                        <CampoDeTexto label={'Cpf'} setValue={setCpfVendedor} />
                        <CampoDeTexto label={'Nome'} setValue={setNome} />
                        <CampoDeTexto label={'Salario'} setValue={setSalario} />
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Completar cadastro </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default CadastroVedendor;