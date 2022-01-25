import { ReactNode, useState } from "react"
import { Table, Container } from "./styles"
import { Paginacao } from '../Paginacao'
import { SemDados } from '../SemDados/index'


interface TabelaProps {
    children: ReactNode;
    totalItens: Number;
    limite: number;
    pagina: number;
    setQuantidadePorPagina: (pagina: number) => void;
    setPagina: (pagina: number) => void;
}

export function Tabela({ children,
    limite,
    totalItens,
    pagina,
    setPagina,
    setQuantidadePorPagina }: TabelaProps) {

    return (
        <Container>

            {
                totalItens > 0 ? <>

                    <div className="header-table">
                        <strong>Total de itens: {totalItens}</strong>

                        <select
                            value={limite}
                            onChange={(e) => setQuantidadePorPagina(Number(e.target.value))}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>

                    </div>
                    <Table>

                        {totalItens > 0 ? children : <SemDados />}
                    </Table>

                    <Paginacao
                        limite={limite}
                        setOffset={setPagina}
                        offset={pagina}
                        total={Number(totalItens)}
                    />
                </> : <SemDados />
            }

        </Container>
    )
}