import { createContext, useContext, useState } from "react";
import Modal from 'react-modal'
import { CadastroCentroCustoModal } from '../pages/CentroCusto/Cadastro'
import { CadastrarPessoaModal } from '../pages/Pessoa/Cadastro'

Modal.setAppElement('#root')


interface ModalContextProps {
    setIsOpenModalCadastroCentroCusto: (isOpen: boolean) => void;
    setIsOpenModalCadastroPessoa: (isOpen: boolean) => void;
    ReloadGrid: boolean;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);


const ModalProvider: React.FC = ({ children }) => {
    const [isOpenModalCadastroCentroCusto, setIsOpenModalCadastroCentroCusto] = useState(false)
    const [isOpenModalCadastroPessoa, setIsOpenModalCadastroPessoa] = useState(false)
    const [ReloadGrid, setReloadGrid] = useState(false)


    function handlerReload() {
        setReloadGrid(!ReloadGrid)
    }

    return (
        <ModalContext.Provider value={{ setIsOpenModalCadastroCentroCusto, setIsOpenModalCadastroPessoa, ReloadGrid }}>
            <CadastroCentroCustoModal isOpen={isOpenModalCadastroCentroCusto} onRequestClose={setIsOpenModalCadastroCentroCusto} reloadGrid={handlerReload} />
            <CadastrarPessoaModal isOpen={isOpenModalCadastroPessoa} onRequestClose={setIsOpenModalCadastroPessoa} reloadGrid={handlerReload} />
            {children}
        </ModalContext.Provider>
    );
}

function useModal() {
    const context = useContext(ModalContext);
    return context;
}


export { ModalProvider, useModal }