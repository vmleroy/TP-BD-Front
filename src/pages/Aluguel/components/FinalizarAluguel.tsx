import React from 'react';

import axios from 'axios';

import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'

import IAluguel from '../../../interface/IAluguel';

interface Props {
    aluguelProps: IAluguel[];
}

const FinalizarAluguel: React.FC<Props> = ({ aluguelProps }) => {

    const [idAluguel, setIdAluguel] = React.useState<string>('');

    const handleSelectChange = (event: SelectChangeEvent) => {
        setIdAluguel(event.target.value as string);
        
    };

    const handleClick = (idAluguel: string) => {
        axios.put(`http://localhost:5000/api/alugueis/${idAluguel}/encerrar`)
            .then(res => {
                console.log(res.data);
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
                        Finalizar aluguel:
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
                            <InputLabel id="select-aluguel">Aluguel</InputLabel>
                            <Select
                                id="select-aluguel"
                                label="Aluguel"
                                value={idAluguel}
                                onChange={handleSelectChange}
                            >
                                {aluguelProps?.map((item: IAluguel) => {
                                    return <MenuItem key={item.idaluguel} value={item.idaluguel}> ID:{item.idaluguel} - Cliente:{item.cpfcliente} - Placa carro:{item.placacarro} </MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item container direction='column' xs={2} >
                        <Button variant='outlined' sx={{ mx: "0.5rem", my: "0.5rem", backgroundColor: "white" }} onClick={() => {handleClick(idAluguel)}}> Finalizar aluguel </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default FinalizarAluguel;