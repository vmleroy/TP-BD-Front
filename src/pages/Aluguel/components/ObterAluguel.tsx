import React, { useEffect } from 'react';

import axios from 'axios';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

import IAluguel from '../../../interface/IAluguel';

interface Props {
    aluguelProps: IAluguel[];
}

const ObterAluguel: React.FC<Props> = ({ aluguelProps }) => {

    const [cpfCliente, setCpfCliente] = React.useState<string>('');

    const [idAluguel, setIdAluguel] = React.useState<string>('');
    const [cpfVedendor, setCpfVedendor] = React.useState<string>('');
    const [placaCarro, setPlacaCarro] = React.useState<string>('');
    const [valorBase, setValorBase] = React.useState<string>('');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setCpfCliente(event.target.value as string);
    };

    const handleClick = (cpfCliente: string) => {
        
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
                            <InputLabel id="select-cpf-cliente">Clientes</InputLabel>
                            <Select
                                id="select-cpf-cliente"
                                label="Clientes"
                                value={cpfCliente}
                                onChange={handleSelectChange}
                            >
                                {aluguelProps?.map((item: IAluguel) => {
                                    return <MenuItem key={item.idaluguel} value={item.cpfcliente}> Cpf:{item.cpfcliente} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <CampoDeTextoLeitura label={'ID Aluguel'} value={idAluguel} />
                        <CampoDeTextoLeitura label={'Cpf vedendor'} value={cpfVedendor} />
                        <CampoDeTextoLeitura label={'Placa do carro'} value={placaCarro} />
                        <CampoDeTextoLeitura label={'Valor base'} value={valorBase} />
                    </Grid>
                    <Grid item container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={() => handleClick(cpfCliente)}> Pesquisar aluguel </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterAluguel;