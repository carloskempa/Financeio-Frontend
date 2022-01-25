import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../../components/Imput'
import { useToast } from '../../../hooks/toast'

import closeImg from '../../../assets/close.svg'

import { FiSave, FiX } from 'react-icons/fi'
import { shemaCadastro } from '../validators'
import { handlerCreateSubmitForm } from '../actions'

interface PessoaModalProps {
    isOpen: boolean;
    onRequestClose: (isOpen: boolean) => void
    reloadGrid: (reload: boolean) => void;
}


export function CadastrarPessoaModal({ isOpen, onRequestClose, reloadGrid }: PessoaModalProps) {

    const { handleSubmit, register, resetField, formState: { errors } } = useForm({
        resolver: yupResolver(shemaCadastro)   
    });

    const { addToast } = useToast();

    const handlerCloseModal = () => {
        resetField('nome')
        onRequestClose(false)
    }


    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={() => handlerCloseModal()}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >

        <div className="react-modal-header">
            <h2>Cadastro Pessoa</h2>
            <button type="button" onClick={handlerCloseModal} className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>
        </div>

        <form onSubmit={handleSubmit(handlerCreateSubmitForm)}>

            <div className="react-modal-body">
                    <Input name="nome" errors={errors} register={register} label='Nome da Pessoa' />                        
            </div>
            <div className="react-modal-footer">
                <button onClick={handlerCloseModal} className='secundario'><FiX size={20} /> Fechar</button>
                <button type='submit' className='sucesso'> <FiSave size={20} /> Cadastrar</button>
            </div>

        </form>

    </Modal>
    )

}