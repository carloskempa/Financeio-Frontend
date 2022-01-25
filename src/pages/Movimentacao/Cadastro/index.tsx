import { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'


import { Container, LinhaCol4, LinhaCol1, TransactionTypeContainer, RadioBox, ContainerButton } from './styles'
import { shemaCadastro } from '../validations'
import { handlerSubmitForm, Movimento } from '../actions';

import { FiCornerUpLeft, FiSave } from 'react-icons/fi'

import income from '../../../assets/income.svg'
import outcome from '../../../assets/outcome.svg'
import { api } from '../../../services/api'
import Input from '../../../components/Imput';

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

export function CadastroMovimentacao() {

    const [tipoLancamento, setTipoLancamento] = useState('')
    const [isPago, setIsPago] = useState(false)

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [centroCustos, setCentroCustos] = useState<CentroCusto[]>([])
    const [contasFinanceira, setContasFinanceira] = useState<ContaFinanceira[]>([])
    const [fornecedores, setFornecedores] = useState<Fornecedor[]>([])


    const { handleSubmit, register, clearErrors, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(shemaCadastro)
    });


    const selecionarTipoLancamento = (tipoLancamento: string) => {
        setTipoLancamento(tipoLancamento)
        setValue('tipoLancamento', tipoLancamento)
        clearErrors('tipoLancamento')
    }

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


    const onHandlerSubmitForm = (data: Movimento) => {
        console.log(data)
    }


    return (
        <Container onSubmit={handleSubmit(onHandlerSubmitForm)}>
            <h2>Novo Lançamento</h2>
            <LinhaCol4>
                <div>
                    <label htmlFor="conta">Conta ou Cartão *</label>
                    <select className={!!errors.contaId?.message ? 'errors' : ''} {...register('contaId')}>
                        <option value="">Selecione...</option>
                        {
                            contasFinanceira && (
                                contasFinanceira.map(prop => (
                                    <option key={prop.id} value={prop.id}>{prop.nome}</option>
                                ))
                            )
                        }
                    </select>
                    <p className="colorError">{errors.contaId?.message}</p>
                </div>
                <div>
                    <label htmlFor="pessoaId">Pessoa *</label>
                    <select {...register('pessoaId')} className={!!errors.pessoaId?.message ? 'errors' : ''}>
                        <option value="">Selecione...</option>
                        {
                            pessoas && (
                                pessoas.map(prop => (
                                    <option key={prop.id} value={prop.id}>{prop.nome}</option>
                                ))
                            )
                        }
                    </select>
                    <p className="colorError">{errors.pessoaId?.message}</p>
                </div>
                <div>
                    <label htmlFor="fornecedorId">Fornecedor *</label>
                    <select {...register('fornecedorId')} className={!!errors.fornecedorId?.message ? 'errors' : ''} >
                        <option value="">Selecione...</option>
                        {
                            fornecedores && (
                                fornecedores.map(prop => (
                                    <option key={prop.id} value={prop.id}>{prop.nome}</option>
                                ))
                            )
                        }
                    </select>
                    <p className="colorError">{errors.fornecedorId?.message}</p>
                </div>
                <div>
                    <label htmlFor="centroCustoId">Centro Custo *</label>
                    <select {...register('controCustoId')} className={!!errors.centroCustoId?.message ? 'errors' : ''} >
                        <option value="">Selecione...</option>
                        {
                            centroCustos && (
                                centroCustos.map(prop => (
                                    <option key={prop.id} value={prop.id}>{prop.nome}</option>
                                ))
                            )
                        }
                    </select>
                    <p className="colorError">{errors.centroCustoId?.message}</p>
                </div>
            </LinhaCol4>

            <LinhaCol4>
                <div>
                    <Input name="dataMovimento" errors={errors} register={register} label='Data do Movimento' type="date" className={!!errors.dataMovimento?.message ? 'errors' : ''} />
                </div>
                <div>
                    <Input name='valorMovimento' errors={errors} register={register} label='Valor' />
                </div>
                <div>
                    <Input name="dataVencimento" errors={errors} register={register} label='Data Vencimento' type="date" />
                </div>

                <div className="pagador">
                    <div>
                        <label htmlFor="isPago">Pago</label>
                        <input type="checkbox" name="dtLancamento" checked={isPago} onClick={() => setIsPago(!isPago)} />
                    </div>

                    <div>
                        <label htmlFor="pagador">Pagador</label>
                        <select name="pagador" disabled={isPago === false}>
                            <option value="">Selecione...</option>{
                                pessoas && (
                                    pessoas.map(prop => (
                                        <option key={prop.id} value={prop.id}>{prop.nome}</option>
                                    ))
                                )
                            }
                        </select>
                    </div>
                </div>
            </LinhaCol4>


            <LinhaCol1>
                <Input name="descricao" errors={errors} register={register} label='Histórioco do Lançamento' />
            </LinhaCol1>

            <LinhaCol1>
                <label htmlFor="observacao">Observação</label>
                <textarea name="observacao" rows={8}></textarea>
            </LinhaCol1>

            <LinhaCol1>
                <label htmlFor="">Tipo Lançamento</label>
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={tipoLancamento === 'entrada'}
                        activeColor={'green'}
                        onClick={() => selecionarTipoLancamento('entrada')}
                        {...register('tipoLancamento')}
                    >
                        <img src={income} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        activeColor={'red'}
                        isActive={tipoLancamento === 'despesa'}
                        onClick={() => selecionarTipoLancamento('despesa')}
                        {...register('tipoLancamento')}
                    >
                        <img src={outcome} alt="Saida" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <p className="colorError">{errors.tipoLancamento?.message}</p>
            </LinhaCol1>
            <ContainerButton>
                <button><FiCornerUpLeft /> Voltar</button>
                <button type="submit" className='sucesso'><FiSave /> Cadastrar</button>
            </ContainerButton>

        </Container>
    )
}