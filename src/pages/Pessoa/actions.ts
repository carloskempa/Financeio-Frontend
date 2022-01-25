import { api } from '../../services/api'
import { SubmitHandler } from 'react-hook-form'
import { AxiosResponse } from 'axios';


export interface Pessoa {
    id: string;
    nome: string;
}

const handlerCreateSubmitForm: SubmitHandler<Pessoa> = async (data) => {

    await api.post("pessoa", data).then(
        resp => {
           tratarResponse(resp)
        }
    ).catch(() => {
        throw new Error('Ocorreu um erro ao cadastrar!')
    })
}



const handlerDelete = async (id: string) => {
   await api.delete(`pessoa/${id}`).then(resp => {
    tratarResponse(resp)

   }).catch(() => {
        throw new Error('Ocorreu um erro ao deletar!')
    })
}

const handlerEditSubmitForm: SubmitHandler<Pessoa> = async (data) => {
    await api.put("pessoa", data).then(
        resp => {
           tratarResponse(resp)
        }
    ).catch(() => {
        throw new Error('Ocorreu um erro ao atualizar!')
    })
}


function tratarResponse(response: AxiosResponse<any, any>){
    if (!response.data.sucesso) {
        let strMsg = '';

        response.data.mensagens.map((msg: string) => {
            return strMsg += (msg + ' ')
        })

        throw new Error(strMsg)
    }
}



export { handlerCreateSubmitForm, handlerEditSubmitForm, handlerDelete }