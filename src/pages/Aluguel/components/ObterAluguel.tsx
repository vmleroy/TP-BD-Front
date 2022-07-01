import React, { useEffect } from 'react';

import axios from 'axios';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

import IAluguel from '../../../interface/IAluguel';


const ObterAluguel = ({  }) => {

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

    const [idAluguel, setIdAluguel] = React.useState<string>('');
    const [cpfVendedor, setCpfVendedor] = React.useState<string>('');
    const [cpfCliente, setCpfCliente] = React.useState<string>('');
    const [placaCarro, setPlacaCarro] = React.useState<string>('');
    const [valorBase, setValorBase] = React.useState<string>('');
    const [ativo, setAtivo] = React.useState<string>('');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setIdAluguel(event.target.value as string);
    };

    const handleClick = async (idAluguel: string) => {
        await axios.get(`http://localhost:5000/aluguel/${idAluguel}`)
        .then(res => {
            setCpfCliente(res.data[0].cpfcliente);
            setCpfVendedor(res.data[0].cpfvendedor);
            setPlacaCarro(res.data[0].placacarro);
            setValorBase(res.data[0].valorbase);
            setAtivo(res.data[0].ativo);
        })
        .catch(err => {
            console.log(err);
        });
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
                        Pesquisar aluguel:
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
                        <FormControl fullWidth sx={{ margin: 2, maxWidth: "50vw" }}>
                            <InputLabel id="select-alugueis">Aluguel</InputLabel>
                            <Select
                                id="select-alugueis"
                                label="Alugueis"
                                value={idAluguel}
                                onChange={handleSelectChange}
                            >
                                {alugueis?.map((item: IAluguel) => {
                                    return <MenuItem key={item.idaluguel} value={item.idaluguel}> ID:{item.idaluguel} - Cliente:{item.cpfcliente} - Placa carro:{item.placacarro} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <CampoDeTextoLeitura label={'Cpf cliente'} value={cpfCliente} />
                        <CampoDeTextoLeitura label={'Cpf Vendedor'} value={cpfVendedor} />
                        <CampoDeTextoLeitura label={'Placa do carro'} value={placaCarro} />
                        <CampoDeTextoLeitura label={'Valor base'} value={valorBase} />
                        <CampoDeTextoLeitura label={'Ativo'} value={ativo} />
                    </Grid>
                    <Grid item container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={() => handleClick(idAluguel)}> Pesquisar aluguel </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterAluguel;