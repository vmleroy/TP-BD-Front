import React from 'react';

import axios from 'axios';

import { Button, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';

const CadastroCliente = ({ }) => {

    const [nome, setNome] = React.useState<string>('');
    const [cpfCliente, setCpfCliente] = React.useState<string>('');
    const [idade, setIdade] = React.useState<string>('');
    const [endereco, setEndereco] = React.useState<string>('');


    const handleClick = () => {
        const newCliente = { cpf: cpfCliente, nome: nome, 
            endereco: endereco, idade: idade }
        console.log(newCliente);
        axios.post("http://localhost:5000/cliente/cadastro", newCliente)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
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
                        Cadastro cliente:
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
                        <CampoDeTexto label={'Nome'} setValue={setNome} />
                        <CampoDeTexto label={'Cpf cliente'} setValue={setCpfCliente} />
                        <CampoDeTexto label={'Idade'} setValue={setIdade} />
                        <CampoDeTexto label={'Endereco'} setValue={setEndereco} />
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Completar cadastro </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default CadastroCliente;