import React from 'react';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

import ICarro from '../../../interface/ICarro';
import IVedendor from '../../../interface/IVedendor';

const ObterLoja = ({ }) => {

    const [idLoja, setIdLoja] = React.useState<string>('');

    const [endereco, setEndereco] = React.useState<string>('');

    const [carros, setCarros] = React.useState<ICarro[]>([]);
    const [vedendores, setVedendores] = React.useState<IVedendor[]>([]);

    const handleClick = () => {
        console.log(idLoja, endereco);
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
                        <CampoDeTexto label={'ID Loja'} setValue={setIdLoja} />                    
                        <CampoDeTextoLeitura label={'Endereco'} value={endereco} />
                        <FormControl fullWidth sx={{ margin: 2, maxWidth: "50vw" }}>
                            <InputLabel id="select-carros">Carros</InputLabel>
                            <Select
                                id="select-carros"
                                label="Clientes"
                                value={carros}
                            >
                                {carros?.map((item: ICarro) => {
                                    return <MenuItem value={item.placa}> Placa:{item.placa} - Modelo:{item.modelo} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ margin: 2, maxWidth: "50vw" }}>
                            <InputLabel id="select-carros">Vedendores</InputLabel>
                            <Select
                                id="select-carros"
                                label="Clientes"
                                value={vedendores}
                            >
                                {vedendores?.map((item: IVedendor) => {
                                    return <MenuItem value={item.cpf}> CPF:{item.cpf} - Nome:{item.nome} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Pesquisar aluguel </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterLoja;