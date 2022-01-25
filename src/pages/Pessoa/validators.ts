import * as yup from "yup";

const shemaCadastro = yup.object({
    nome: yup.string().required("Nome da pessoa é obrigatorio")
})


export {shemaCadastro};