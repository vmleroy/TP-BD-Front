import React from 'react';

import axios from 'axios';

import { Button, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';


const CadastroAluguel = ({ }) => {

    const [cpfVendedor, setCpfVedendor] = React.useState<string>('');
    const [cpfCliente, setCpfCliente] = React.useState<string>('');
    const [placaCarro, setPlacaCarro] = React.useState<string>('');
    const [valorBase, setValorBase] = React.useState<string>('');

    const handleClick = () => {
        const newCadastro={cpfvendedor: parseFloat(cpfVendedor), cpfcliente: parseFloat(cpfCliente), 
            placacarro: placaCarro, valorbase: parseFloat(valorBase)}
        axios.post("http://localhost:5000/api/alugueis/novo", newCadastro)
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
                        Cadastro aluguel:
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
                        <CampoDeTexto label={'Cpf vedendor'} setValue={setCpfVedendor} />
                        <CampoDeTexto label={'Cpf cliente'} setValue={setCpfCliente} />
                        <CampoDeTexto label={'Placa do carro'} setValue={setPlacaCarro} />
                        <CampoDeTexto label={'Valor base'} setValue={setValorBase} />
                    </Grid>
                    <Grid item container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Completar cadastro </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default CadastroAluguel;