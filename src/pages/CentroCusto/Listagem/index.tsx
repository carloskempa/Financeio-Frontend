import { useEffect, useState } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi'
import { IPaginacao } from '../../../interfaces/IPaginacao'

import { useToast } from '../../../hooks/toast'
import { api } from '../../../services/api'
import { Tabela } from '../../../components/Tabela'
import { LoadingTable } from '../../../components/Loading/Tabela'
import { useModal } from '../../../hooks/modal'
import { Container } from './styles'
import { handlerDelete } from '../actions'

interface ICentroCusto extends IPaginacao {
    items: [{
        id: string;
        nome: string;
        dtCadastro: Date;
        dtAtualizacao: Date;
    }];
}


export function CentroCusto() {

    const [loading, setLoading] = useState(true);
    const [centroCusto, setCentroCusto] = useState<ICentroCusto>({} as ICentroCusto);
    const { addToast } = useToast();
    const [pagina, setPagina] = useState(1);
    const [numeroPagina, setNumeroPorPagina] = useState(5);

    const { setIsOpenModalCadastroCentroCusto, ReloadGrid } = useModal();

    useEffect(() => {

        CarregarGrid();

    }, [pagina, ReloadGrid, numeroPagina])


    function CarregarGrid() {

        setLoading(true);

        const params = { page: pagina, pageSize: numeroPagina }

        api.get<ICentroCusto>("centroCusto", { params: { page: pagina, pageSize: numeroPagina } })
            .then(resp => {
                setCentroCusto(resp.data)
            })

        setLoading(false);
    }


    const onHandlerDelete = async (id: string) => {
        try {
            if(window.confirm('Confirma a exclusão deste item?'))
            {

                await handlerDelete(id);
    
                addToast({
                    type: 'success',
                    title: "deletado com sucesso",
                })
    
                CarregarGrid()
            }

        } catch (error) {
            addToast({
                type: 'error',
                title: "Error!",
                description: (error as Error).message
            })
        }
    }


    return (
        <>
            {
                loading ? <LoadingTable numeroColunas={5} /> :
                (
                    <Container>
                            <button className='new' onClick={() => setIsOpenModalCadastroCentroCusto(true)}>Novo Centro custo</button>
                            <Tabela
                                limite={numeroPagina}
                                setPagina={setPagina}
                                pagina={pagina}
                                setQuantidadePorPagina={setNumeroPorPagina}
                                totalItens={centroCusto.totalItemCount}
                            >
                                <thead>
                                    <tr>
                                        <th className='icon'>Editar</th>
                                        <th className='icon'>Excluir</th>
                                        <th>Nome</th>
                                        <th className='center'>Data Cadastro</th>
                                        <th className='center'>Data Atualização</th>
                                    </tr>
                                </thead>
                                {
                                    <tbody>
                                        {   
                                            centroCusto.items?.map(item => (
                                                <tr key={item.id}>
                                                    <td className='icon'>
                                                        <button onClick={() => {}}><FiEdit2 /></button>
                                                    </td>
                                                    <td className='icon'>
                                                        <button onClick={() => onHandlerDelete(item.id)}><FiTrash2 /></button>
                                                    </td>
                                                    <td><strong>{item.nome}</strong></td>
                                                    <td className='center'>{Intl.DateTimeFormat('pt-BR').format(new Date(item.dtCadastro))}</td>
                                                    <td className='center'>{
                                                        item.dtAtualizacao ? Intl.DateTimeFormat('pt-BR').format(new Date(item.dtAtualizacao))
                                                            : '-'
                                                    }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                }
                            </Tabela>
                        </Container>
                    )
            }
        </>
    )
}