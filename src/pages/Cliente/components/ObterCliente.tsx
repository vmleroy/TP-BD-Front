import React from 'react';

import axios from 'axios';

import { Button, Grid, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

const ObterAluguel = ({ }) => {

    const [cpfCliente, setCpfCliente] = React.useState<string>('');

    const [nome, setNome] = React.useState<string>('');
    const [dataNascimento, setDataNascimento] = React.useState<string>('');
    const [endereco, setEndereco] = React.useState<string>('');
    const [jaAlugou, setJaAlugou] = React.useState<boolean>(false);
    const [numAlugueis, setNumAlugueis] = React.useState<string>('');
    const [alugueisFinalizados, setAlugueisFinalizados] = React.useState<string>('');

    const handleClick = (cpfCliente: string) => {
        const getCliente = { cpfcliente: cpfCliente }
        axios.put("http://localhost:5000/cliente/consultar", getCliente)
            .then(res => {
                setNome(res.data[0].nome);
                setDataNascimento(res.data[0].datanascimento);
                setEndereco(res.data[0].endereco);
            })
            .catch(err => {
                console.log(err)
            })
        const getClienteCpf = { cpf: cpfCliente }
        axios.put("http://localhost:5000/api/cliente/consultar/aluguel", getClienteCpf)
            .then(res => {
                setJaAlugou(res.data[0].jaAlugou);
            })
            .catch(err => {
                console.log(err)
            })
        axios.put("http://localhost:5000/api/cliente/consultar/aluguel/contagem")
            .then(res => {
                res.data.forEach((element: { cpf: string; numAlugueis: React.SetStateAction<string>; }) => {
                    if(element.cpf === cpfCliente) {
                        setNumAlugueis(element.numAlugueis);
                    } 
                });
            })
            .catch(err => {
                console.log(err)
            })
            axios.put("http://localhost:5000/api/cliente/consultar/aluguel/historico")
            .then(res => {
                res.data.forEach((element: { cpf: string; numAlugueis: React.SetStateAction<string>; }) => {
                    if(element.cpf === cpfCliente) {
                        setAlugueisFinalizados(element.numAlugueis);
                        return;
                    }                     
                });
                setAlugueisFinalizados('0');
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
                        <CampoDeTexto label={'Cpf cliente'} setValue={setCpfCliente} />
                        <CampoDeTextoLeitura label={'Nome'} value={nome} />
                        <CampoDeTextoLeitura label={'Data nascimento'} value={dataNascimento} />
                        <CampoDeTextoLeitura label={'Endereco'} value={endereco} />
                        <CampoDeTextoLeitura label={'Ja fez alugueis na loja'} value={String(jaAlugou)} />
                        {jaAlugou &&
                            <CampoDeTextoLeitura label={'Numero alugueis realizados'} value={numAlugueis} />
                        }
                        {jaAlugou &&
                            <CampoDeTextoLeitura label={'Alugueis finalizados'} value={alugueisFinalizados} />
                        }
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={() => (handleClick(cpfCliente))}> Pesquisar aluguel </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterAluguel;