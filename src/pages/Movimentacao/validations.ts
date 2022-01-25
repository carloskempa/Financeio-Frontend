import * as yup from "yup";

const shemaCadastro = yup.object({
    contaId: yup.string().required("Selecione a conta financeira!"),
    pessoaId: yup.string().required("Selecione a pessoa!"),
    fornecedorId: yup.string().required("Selecione o fornecedor!"),
    centroCustoId: yup.string().required("Selecione o Centro de Custo!"),
    descricao: yup.string().required("A descrição é obrigatorio!"),
    dataVencimento: yup.date()
                       .required('Data de vencimento é obrigátorio!')
                       .typeError('Data informada é inválida!'),
    dataMovimento: yup.date()
                       .required('Data do movimento é obrigátorio!')
                       .typeError('Data informada é inválida!'),
    tipoLancamento: yup.string().required("Selecione o tipo de Lançamento!"),
    valorMovimento: yup.number()
                       .required('Informe o valor do Movimento!')
                       .positive('Valor não pode ser negativo!')
                       .typeError('Valor é inválido!')
})


export {shemaCadastro};