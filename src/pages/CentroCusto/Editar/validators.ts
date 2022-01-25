import * as yup from "yup";

const shema = yup.object({
    id: yup.string().required("Id centro de custo é obrigatorio"),
    nome: yup.string().required("Nome do centro de custo é obrigatorio")
})


export default shema;