import React from 'react';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

import IAluguel from '../../../interface/IAluguel';

const ObterVedendor = ({ }) => {

    const [cpfVedendor, setCpfVedendor] = React.useState<string>('');

    const [nome, setNome] = React.useState<string>('');
    const [idLoja, setIdLoja] = React.useState<string>('');
    const [salario, setSalario] = React.useState<string>('');
    const [incSalario, setIncSalario] = React.useState<string>('');
    const [numVendas, setNumVendas] = React.useState<string>('');

    const handleClick = () => {
        console.log(cpfVedendor);
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
                        <CampoDeTextoLeitura label={'Incremento salarial'} value={incSalario} />
                        <CampoDeTextoLeitura label={'Numero de vendas'} value={numVendas} />
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Pesquisar aluguel </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterVedendor;