import React from 'react';

import axios from 'axios';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import IFolhaPagamento from '../../../interface/IFolhaPagamento';

const GerarFolhaPagamento = ({ }) => {

    const [ vendedores, setVendedores ] = React.useState<IFolhaPagamento[]>([]);

    const handleClick = () => {
        axios.put('http://localhost:5000/api/vendedor/gerar-pagamentos')
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
                        Gerar folha de pagamento:
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
                            <InputLabel id="select-folha-pagamento">Folha de pagamento</InputLabel>
                            <Select
                                id="select-folha-pagamento"
                                label="Folha de pagamento"
                            >
                                {vendedores?.map((item: IFolhaPagamento) => {
                                    return <MenuItem key={item.cpf} > CPF:{item.cpf} - Nome:{item.nome} - Salario mensal:{item.salariomensal} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={handleClick}> Gerar folha de pagamento </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default GerarFolhaPagamento;