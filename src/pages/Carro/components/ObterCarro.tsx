import React from 'react';

import axios from 'axios';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

import IAlugueisRealizadosCarro from '../../../interface/IAlugueisRealizadosCarro';

const ObterCarro = ({ }) => {

    const [placa, setPlaca] = React.useState<string>('');

    const [idEstabelecimento, setIdEstabelecimento] = React.useState<string>('');
    const [modeloCarro, setModeloCarro] = React.useState<string>('');
    const [corCarro, setCorCarro] = React.useState<string>('');
    const [custoDia, setCustoDia] = React.useState<string>('');
    const [alugado, setAlugado] = React.useState<string>('');

    const [clientesAlugaram, setClientesAlugaram] = React.useState<IAlugueisRealizadosCarro[]>([]);

    const handleSelectChange = (event: SelectChangeEvent) => {
        setPlaca(event.target.value as string);
    };

    const handleClick = (placa: string) => {
        const getPlaca = { placa: placa };
        axios.put(`http://localhost:5000/carro/consultar`, getPlaca)
            .then(res => {
                setIdEstabelecimento(res.data[0].idestabelecimento);
                setModeloCarro(res.data[0].modelo);
                setCorCarro(res.data[0].cor);
                setCustoDia(res.data[0].custodia);
            })
            .catch(err => {
                console.log(err);
            })
        const getClientesAlugaramCarro = { placacarro: placa }
        axios.put(`http://localhost:5000/api/carro/consultar/aluguel/historico`, getClientesAlugaramCarro)
            .then(res => {
                setClientesAlugaram(res.data);
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
                        <CampoDeTexto label={'Placa do carro'} setValue={setPlaca} />
                        <CampoDeTextoLeitura label={'ID Estabelecimento'} value={idEstabelecimento} />
                        <CampoDeTextoLeitura label={'Modelo'} value={modeloCarro} />
                        <CampoDeTextoLeitura label={'Cor'} value={corCarro} />
                        <CampoDeTextoLeitura label={'Custo dia'} value={custoDia} />
                        {/* <CampoDeTextoLeitura label={'Alugado?'} value={alugado} /> */}
                        <FormControl fullWidth sx={{ margin: 2, maxWidth: "50vw" }}>
                            <InputLabel id="select-clientes-que-alugaram">Clientes que alugaram</InputLabel>
                            <Select
                                id="select-clientes-que-alugaram"
                                label="Clientes que alugaram"
                                value={clientesAlugaram}
                            >
                                {clientesAlugaram?.map((item: IAlugueisRealizadosCarro) => {
                                    return <MenuItem value={item.cpf}> CPF:{item.cpf} - Vezes alugadas:{item.numAlugueis} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={() => (handleClick(placa))}> Pesquisar Carros </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterCarro;