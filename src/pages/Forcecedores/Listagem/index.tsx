import { LoadingTable } from '../../../components/Loading/Tabela'


export function Fornecedores(){
    return (
        <>
            <h1>Lista de Fornecedores</h1>
            <LoadingTable numeroColunas={4}/>
        </>
    )
}