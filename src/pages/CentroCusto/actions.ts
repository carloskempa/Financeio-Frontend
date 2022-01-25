import { api } from '../../services/api'
import { SubmitHandler } from 'react-hook-form'
import { AxiosResponse } from 'axios';


export interface CentroCusto {
    id: string;
    nome: string;
}

const handlerCreateSubmitForm: SubmitHandler<CentroCusto> = async (data) => {

    await api.post("centroCusto", data).then(
        resp => {
           tratarResponse(resp)
        }
    ).catch(() => {
        throw new Error('Ocorreu um erro ao cadastrar!')
    })
}



const handlerDelete = async (id: string) => {
   await api.delete(`centroCusto/${id}`).then(resp => {
    tratarResponse(resp)

   }).catch(() => {
        throw new Error('Ocorreu um erro ao deletar!')
    })
}

const handlerEditSubmitForm: SubmitHandler<CentroCusto> = async (data) => {
    await api.put("centroCusto", data).then(
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