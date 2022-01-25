import { Container } from './styles'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import Skeleton from 'react-loading-skeleton'

interface SummaryProps {
    entradas: number;
    saidas: number;
    total: number;
}

export function Summary({ entradas, saidas, total }: SummaryProps) {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>
                    {
                        entradas !== undefined ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(entradas)
                                 : <Skeleton />
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>
                    {
                       saidas !== undefined ? '- ' + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(saidas)
                              : <Skeleton/>
                    } 
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {
                      total !== undefined ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)
                            : <Skeleton/>
                    }
                </strong>
            </div>
        </Container>
    )
}