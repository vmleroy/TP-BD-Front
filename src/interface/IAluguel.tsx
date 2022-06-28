export default interface IAluguel {
    idaluguel: number,
    ativo: string,
    datainicio: Date,
    datafim: Date,
    valorbase: number,
    valorfinal: number,
    cpfvendedor: number,
    cpfcliente: number,
    placacarro: string
}