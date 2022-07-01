import React from 'react';

import axios from 'axios';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

import ICarro from '../../../interface/ICarro';

interface Props {
    carrosProps: ICarro[];
}

const ObterCarro: React.FC<Props> = ({ carrosProps }) => {

    const [placa, setPlaca] = React.useState<string>('');

    const [idEstabelecimento, setIdEstabelecimento] = React.useState<string>('');
    const [modeloCarro, setModeloCarro] = React.useState<string>('');
    const [corCarro, setCorCarro] = React.useState<string>('');
    const [custoDia, setCustoDia] = React.useState<string>('');
    const [alugado, setAlugado] = React.useState<string>('');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setPlaca(event.target.value as string);
    };

    const handleClick = (placa: string) => {
        axios.get(`http://localhost:5000/carro/consultar/${placa}`)
            .then(res => {
                setIdEstabelecimento(res.data[0].idestabelecimento);
                setModeloCarro(res.data[0].modelo);
                setCorCarro(res.data[0].cor);
                setCustoDia(res.data[0].custodia);
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
                        <FormControl fullWidth sx={{ margin: 2, maxWidth: "50vw" }}>
                            <InputLabel id="select-carro">Carros</InputLabel>
                            <Select
                                id="select-carro"
                                label="Clientes"
                                value={placa}
                                onChange={handleSelectChange}
                            >
                                {carrosProps?.map((item: ICarro) => {
                                    return <MenuItem key={item.placa} value={item.placa}> Placa:{item.placa} - Modelo:{item.modelo} - Cor:{item.cor} - Loja:{item.idestabelecimento} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <CampoDeTextoLeitura label={'ID Estabelecimento'} value={idEstabelecimento} />
                        <CampoDeTextoLeitura label={'Modelo'} value={modeloCarro} />
                        <CampoDeTextoLeitura label={'Cor'} value={corCarro} />
                        <CampoDeTextoLeitura label={'Custo dia'} value={custoDia} />
                        <CampoDeTextoLeitura label={'Alugado?'} value={alugado} />
                    </Grid>
                    <Grid item container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={() => (handleClick(placa))}> Pesquisar aluguel </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterCarro;