import { useEffect, useState } from 'react'

import { Summary } from '../../../components/Summary'
import { Tabela } from '../../../components/Tabela'
import { FiltroMovimento } from '../../../components/FiltroMovimento'
import { LoadingTable } from '../../../components/Loading/Tabela'
import { useToast } from '../../../hooks/toast'

import { api } from '../../../services/api'

import { IPaginacao } from '../../../interfaces/IPaginacao';

import { FiTrash2, FiEdit2, FiFileText } from 'react-icons/fi'
import { AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai'


interface MovimentoItens extends IPaginacao {
    items: [{
        descricao: string;
        observacao: string;
        valorMovimento: number;
        tipoMovimento: number;
        isPago: boolean;
        dataMovimento: Date;
        centroCusto: {
            nome: string;
        },
        conta: {
            nome: string;
        },
        pessoa: {
            nome: string;
        }
    }]
}

interface Movimento {
    data: MovimentoItens;
    entrada: number;
    saida: number;
    total: number;
}


export function Movimentacao() {

    const [movimentos, setMovimento] = useState<Movimento>({} as Movimento);
    const [mes, setMes] = useState(new Date().getMonth() + 1);
    const [ano, setAno] = useState(new Date().getFullYear());
    const [centroCusto, setCentroCusto] = useState('');
    const [pessoa, setPessoa] = useState('');
    const [contaFinanceira, setContaFinanceira] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [loading, setLoading] = useState(true);
    const { addToast } = useToast();

    const [pagina, setPagina] = useState(1);
    const [numeroPorPagina, setNumeroPorPagina] = useState(5);


    useEffect(() => {

        const query = {
            fornecedorId: fornecedor === '' ? null : fornecedor,
            contaFinanceiraId: contaFinanceira === '' ? null : contaFinanceira,
            centroCustoId: centroCusto === '' ? null : centroCusto,
            pessoaId: pessoa === '' ? null : pessoa,
            mes,
            ano
        }

        const params = {
            page: pagina,
            pageSize: numeroPorPagina
        }

        console.log(JSON.stringify(params))

        api.post<Movimento>(`movimento/listar?page=${pagina}&pageSize=${numeroPorPagina}`, query)
            .then(resp => {
                setMovimento(resp.data)
                setLoading(false);
            })
            .catch(erro => {
                addToast({
                    title: "Error!",
                    description: erro.message,
                    type: 'error'
                })
            })

    }, [mes, ano, centroCusto, pessoa, contaFinanceira, fornecedor, pagina])

    return (
        <>
            <Summary total={movimentos.total} entradas={movimentos.entrada} saidas={movimentos.saida} />

            <FiltroMovimento
                mes={mes}
                ano={ano}
                setAno={setAno}
                setPessoa={setPessoa}
                setMes={setMes}
                setCentroCusto={setCentroCusto}
                setContaFinanceira={setContaFinanceira}
                setFornecedor={setFornecedor}
            />
            {
                loading ? <LoadingTable numeroColunas={numeroPorPagina} />
                    : (
                        <Tabela
                            limite={numeroPorPagina}
                            totalItens={movimentos.data.totalItemCount}
                            setPagina={setPagina}
                            pagina={pagina}
                            setQuantidadePorPagina={setNumeroPorPagina}
                        >
                            <thead>
                                <tr>
                                    <th className='icon'>Editar</th>
                                    <th className='icon'>Excluir</th>
                                    <th className='icon'>Detalhes</th>
                                    <th>Descrição</th>
                                    <th>Data</th>
                                    <th>Valor</th>
                                    <th className='icon'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movimentos.data.items.map(movimento => (
                                        <tr>
                                            <td className='icon'>
                                                <button><FiEdit2 /></button>
                                            </td>
                                            <td className='icon'>
                                                <button><FiTrash2 /></button>
                                            </td>
                                            <td className='icon'>
                                                <button><FiFileText /></button>
                                            </td>
                                            <td>
                                                <strong>{movimento.descricao.toUpperCase()}</strong><br />
                                                <small>{movimento.conta.nome}</small><br />
                                                <small>{movimento.pessoa.nome} - {movimento.centroCusto.nome}</small>
                                            </td>
                                            <td>{Intl.DateTimeFormat('pt-BR').format(new Date(movimento.dataMovimento))}</td>
                                            <td className={movimento.tipoMovimento === 1 ? 'entrada' : 'saida'}>
                                                {
                                                    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                                                        .format(movimento.valorMovimento)
                                                }
                                            </td>
                                            <td className='icon'>
                                                {
                                                    movimento.isPago ? <AiTwotoneLike fontSize={24} /> :
                                                        <AiTwotoneDislike fontSize={24} />
                                                }

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Tabela>
                    )
            }

        </>

    )
}