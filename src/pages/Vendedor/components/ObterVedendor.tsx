import React from 'react';

import axios from 'axios';

import { Button, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

const ObterVedendor = ({ }) => {

    const [cpfVendedor, setCpfVedendor] = React.useState<string>('');

    const [nome, setNome] = React.useState<string>('');
    const [idLoja, setIdLoja] = React.useState<string>('');
    const [salario, setSalario] = React.useState<string>('');
    const [numVendas, setNumVendas] = React.useState<string>('');
    const [bonusMensal, setBonusMensal] = React.useState<string>('');

    const handleClick = () => {
        console.log(cpfVendedor);
        const getVendedor = { cpf: parseFloat(cpfVendedor) }
        axios.put('http://localhost:5000/vendedor/consultar', getVendedor)
            .then(res => {
                setNome(res.data[0].nome);
                setIdLoja(res.data[0].idestabelecimento);
                setSalario(res.data[0].salariobase);
                setNumVendas(res.data[0].numvendas);
                setBonusMensal(res.data[0].bonusmensal)
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
                        Obter dados do cadastro:
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
                        <CampoDeTexto label={'Cpf'} setValue={setCpfVedendor} />
                        <CampoDeTextoLeitura label={'Nome'} value={nome} />
                        <CampoDeTextoLeitura label={'ID Loja'} value={idLoja} />
                        <CampoDeTextoLeitura label={'Salario'} value={salario} />
                        <CampoDeTextoLeitura label={'Numero de vendas'} value={numVendas} />
                        <CampoDeTextoLeitura label={'Bonus mensal'} value={bonusMensal} />
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Pesquisar vendedor </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterVedendor;