import { api } from '../../services/api'
import { SubmitHandler } from 'react-hook-form'



export interface Movimento {
   contaId: string;
   descricao: string;
   dataVencimento: Date; 
}

const handlerSubmitForm: SubmitHandler<Movimento> = async (data) => {
    console.log(data)
}

export {handlerSubmitForm}