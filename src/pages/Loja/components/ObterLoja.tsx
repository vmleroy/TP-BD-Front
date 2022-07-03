import React from 'react';

import axios from 'axios';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import CampoDeTexto from '../../../components/TextFields/CampoDeTexto';
import CampoDeTextoLeitura from '../../../components/TextFields/CampoDeTextoLeitura';

import ICarro from '../../../interface/ICarro';
import IVendedor from '../../../interface/IVendedor';

const ObterLoja = ({ }) => {

    const [idLoja, setIdLoja] = React.useState<string>('');

    const [endereco, setEndereco] = React.useState<string>('');

    const [vendedores, setVendedores] = React.useState<IVendedor[]>([]);

    const handleClick = () => {
        const getLoja = { idestabelecimento: idLoja };
        axios.put('http://localhost:5000/estabelecimento/consultar', getLoja)
            .then(res => {
                setEndereco(res.data[0].endereco);
            })
            .catch(err => {
                console.log(err);
            })
        axios.put('http://localhost:5000/api/estabelecimento/consultar/vendedor', getLoja)
            .then(res => {
                setVendedores(res.data);
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
                        <CampoDeTexto label={'ID Loja'} setValue={setIdLoja} />
                        <CampoDeTextoLeitura label={'Endereco'} value={endereco} />
                        <FormControl fullWidth sx={{ margin: 2, maxWidth: "50vw" }}>
                            <InputLabel id="select-carros">Vendedores</InputLabel>
                            <Select
                                id="select-vendedores"
                                label="Vendedores"
                                value={vendedores}
                            >
                                {vendedores?.map((item: IVendedor) => {
                                    return <MenuItem value={item.cpf}> CPF:{item.cpf} - Nome:{item.nome} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Pesquisar loja </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ObterLoja;