import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../../components/Imput'
import { useToast } from '../../../hooks/toast'

import closeImg from '../../../assets/close.svg'

import { FiSave, FiX } from 'react-icons/fi'
import { handlerCreateSubmitForm, CentroCusto } from '../actions'

interface CentroCustoModalProps {
    isOpen: boolean;
    onRequestClose: (isOpen: boolean) => void
    reloadGrid: (reload: boolean) => void;
}



const shema = yup.object({
    nome: yup.string().required("Nome do centro de custo é obrigatorio")
})

export function CadastroCentroCustoModal({ isOpen, onRequestClose, reloadGrid }: CentroCustoModalProps) {

    const { handleSubmit, register, resetField, formState: { errors } } = useForm({
        resolver: yupResolver(shema)   
    });

    const { addToast } = useToast();

    const handlerCloseModal = () => {
        resetField('nome')
        onRequestClose(false)
    }

    const onHandlerSubmitForm = async (data: CentroCusto) => {
        try {
            await handlerCreateSubmitForm(data)

            addToast({
                type: 'success',
                title: "Cadastrado com sucesso",
            })

            handlerCloseModal()
            reloadGrid(true)

        } catch (e){
            addToast({
                type: 'error',
                title: "Error!",
                description: (e as Error).message
            })
        }
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => handlerCloseModal()}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <div className="react-modal-header">
                <h2>Cadastro Centro Custo </h2>
                <button type="button" onClick={handlerCloseModal} className="react-modal-close">
                    <img src={closeImg} alt="Fechar Modal" />
                </button>
            </div>

            <form onSubmit={handleSubmit(onHandlerSubmitForm)}>

                <div className="react-modal-body">
                        <Input name="nome" errors={errors} register={register} label='Nome centro custo' />                        
                </div>
                <div className="react-modal-footer">
                    <button onClick={handlerCloseModal} className='secundario'><FiX size={20} /> Fechar</button>
                    <button type='submit' className='sucesso'> <FiSave size={20} /> Cadastrar</button>
                </div>

            </form>

        </Modal>
    )
}