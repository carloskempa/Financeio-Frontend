import { useEffect, useState } from 'react';
import { Container, Content } from './styles'
import { api } from '../../services/api'

interface FiltroMovimentoProps {
    mes: number;
    ano: number;
    setMes: (mes: number) => void;
    setAno: (ano: number) => void;
    setPessoa: (pessoa: string) => void;
    setCentroCusto: (centroCusto: string) => void;
    setContaFinanceira: (contaFinanceira: string) => void;
    setFornecedor: (fornecedor: string) => void;
}

interface Pessoa {
    id: string;
    nome: string;
}

interface CentroCusto {
    id: string;
    nome: string;
}

interface ContaFinanceira {
    id: string;
    nome: string;
}

interface Fornecedor {
    id: string;
    nome: string;
}

const months = [
    { mes: "Jan", valor: 1 },
    { mes: "Fev", valor: 2 },
    { mes: "Mar", valor: 3 },
    { mes: "Abr", valor: 4 },
    { mes: "Mai", valor: 5 },
    { mes: "Jun", valor: 6 },
    { mes: "Jul", valor: 7 },
    { mes: "Ago", valor: 8 },
    { mes: "Set", valor: 9 },
    { mes: "Out", valor: 10 },
    { mes: "Nov", valor: 11 },
    { mes: "Dez", valor: 12 }
];

const anos = [2020, 2021, 2022];

export function FiltroMovimento({ mes,
    ano,
    setAno,
    setMes,
    setPessoa,
    setCentroCusto,
    setContaFinanceira,
    setFornecedor }: FiltroMovimentoProps) {

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [centroCustos, setCentroCustos] = useState<CentroCusto[]>([])
    const [contasFinanceira, setContasFinanceira] = useState<ContaFinanceira[]>([])
    const [fornecedores, setFornecedores] = useState<Fornecedor[]>([])

    useEffect(() => {

        api.get<Pessoa[]>('pessoa/obterTodos')
            .then(resp => {
                setPessoas(resp.data)
            })

        api.get<CentroCusto[]>('centroCusto/obterTodos')
            .then(resp => {
                setCentroCustos(resp.data)
            })

        api.get<ContaFinanceira[]>('contaFinanceira/obterTodos')
            .then(resp => {
                setContasFinanceira(resp.data)
            })

        api.get<Fornecedor[]>('fornecedor/obterTodos')
            .then(resp => {
                setFornecedores(resp.data)
            })

    }, [])


    return (
        <Container>
            <h3>Filtros</h3>
            <Content>
                <div className='linha'>
                    <div>
                        <select onChange={(e) => setPessoa(e.target.value)}>
                            <option value="">Pessoa</option>
                            {
                                pessoas && (
                                    pessoas.map(pessoa => (
                                        <option key={pessoa.id} value={pessoa.id}>{pessoa.nome}</option>
                                    ))
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <select onChange={(e) => setCentroCusto(e.target.value)} >
                            <option value="">Centro de Custo</option>
                            {
                                centroCustos && (
                                    centroCustos.map(prop => (
                                        <option key={prop.id} value={prop.id}>{prop.nome}</option>
                                    ))
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <select onChange={(e) => setContaFinanceira(e.target.value)}>
                            <option value="">Conta Financeira</option>
                            {
                                contasFinanceira && (
                                    contasFinanceira.map(conta => (
                                        <option key={conta.id} value={conta.id}>{conta.nome}</option>
                                    ))
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <select onChange={(e) => setFornecedor(e.target.value)}>
                            <option value="">Fornecedor</option>
                            {
                                fornecedores && (
                                    fornecedores.map(fornecedor => (
                                        <option key={fornecedor.id} value={fornecedor.id}>{fornecedor.nome}</option>
                                    ))
                                )
                            }
                        </select>
                    </div>

                    <div>
                        <select value={ano} onChange={(e) => setAno(Number(e.target.value))}>
                            {
                                anos.map((ano, index) => (
                                    <option value={ano} key={index}> {ano}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className='linha'>
                    {
                        months.map((prop, index) => {
                            return (
                                <button key={index} onClick={() => setMes(prop.valor)} className={prop.valor === mes ? 'active' : ''}>{prop.mes}</button>
                            )
                        })
                    }
                </div>

            </Content>
        </Container>

    )
}