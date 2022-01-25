import { useEffect, useState } from 'react';
import { api } from '../../../services/api'

import { FiTrash2, FiEdit2 } from 'react-icons/fi'
import { useToast } from '../../../hooks/toast';
import { IPaginacao } from '../../../interfaces/IPaginacao'
import { Tabela } from '../../../components/Tabela'
import { LoadingTable } from '../../../components/Loading/Tabela'
import { Container } from './styles'
import { useModal } from '../../../hooks/modal';
import { handlerDelete } from '../actions'

interface IPessoa extends IPaginacao {
  items: [{
    id: string;
    nome: string;
    dtCadastro: Date;
    dtAtualizacao: Date;
  }];
}

export function Pessoa() {

  const [loading, setLoading] = useState(true);
  const [pessoa, setPessoa] = useState<IPessoa>({} as IPessoa);
  const { addToast } = useToast();
  const [pagina, setPagina] = useState(1);
  const [numeroPagina, setNumeroPorPagina] = useState(5);
  const { setIsOpenModalCadastroPessoa, ReloadGrid } = useModal();

  useEffect(() => {

    CarregarGrid();

  }, [pagina, numeroPagina, ReloadGrid])


  function CarregarGrid() {

    setLoading(true);

    api.get<IPessoa>("pessoa", { params: { page: pagina, pageSize: numeroPagina } })
      .then(resp => {
        setPessoa(resp.data)
      })

    setLoading(false);
  }



  const onHandlerDelete = async (id: string) => {
    try {
      if (window.confirm('Confirma a exclusão deste item?')) {

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
              <button className='new' onClick={() => setIsOpenModalCadastroPessoa(true)}>Nova Pessoa</button>
              <Tabela
                limite={numeroPagina}
                setPagina={setPagina}
                pagina={pagina}
                setQuantidadePorPagina={setNumeroPorPagina}
                totalItens={pessoa.totalItemCount}
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
                      pessoa.items?.map(item => (
                        <tr key={item.id}>
                          <td className='icon'>
                            <button onClick={() => { }}><FiEdit2 /></button>
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
