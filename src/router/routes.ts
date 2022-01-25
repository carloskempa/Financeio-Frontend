import { Movimentacao } from '../pages/Movimentacao/Listagem'
import { Pessoa } from '../pages/Pessoa/Listagem'
import { Fornecedores } from '../pages/Forcecedores/Listagem'
import { CentroCusto } from '../pages/CentroCusto/Listagem'
import { ContaFinanceira } from '../pages/ContaFinanceira/Listagem'
import { RelatorioMesAMes } from '../pages/Relatorio/RelatorioMesAMes'
import { RelatorioResumoMovimentacao } from '../pages/Relatorio/RelatorioResumoMovimentacao'
import { CadastroMovimentacao } from '../pages/Movimentacao/Cadastro'

import IRota from '../interfaces/IRota'

const RotasAtivas = [
    {
        name: "Movimentação",
        path: "#",
        exact: true,
        layout: '/pages',
        sub: [
            {
                name: "Lançamentos",
                path: "/movimentacoes",
                exact: true,
                component: Movimentacao,
                layout: '/pages'
            },
            {
                name: 'Cadastrar',
                path: '/novoMovimento',
                exact: true,
                component: CadastroMovimentacao,
                layout: '/pages',
            }
        ],
    },
    {
        name: 'Cadastros',
        path: "#",
        exact: true,
        layout: '/pages',
        sub: [
            {
                name: "Pessoas",
                path: "/pessoas",
                component: Pessoa,
                layout: '/pages',
                exact: true,
            },
            {
                name: "Centro Custo",
                path: "/centroCusto",
                component: CentroCusto,
                layout: '/pages',
                exact: true
            },
            {
                name: "Conta Financeira",
                path: "/contaFinanceira",
                component: ContaFinanceira,
                layout: '/pages',
                exact: true
            },
            {
                name: "Fornecedores",
                path: "/fornecedores",
                layout: '/pages',
                component: Fornecedores,
                exact: true,
            }
        ]
    },
    {
        name: 'Relatórios',
        path: "#",
        exact: true,
        layout: '/pages',
        sub: [
            {
                name: "Resumo Mov.",
                path: "/resumoMovimentacao",
                exact: true,
                layout: '/pages',
                component: RelatorioResumoMovimentacao
            },
            {
                name: "Mês a Mês",
                path: "/relatorioMesAMes",
                exact: true,
                layout: '/pages',
                component: RelatorioMesAMes
            }
        ]
    },
    {
        name: "Configuração",
        path: "#",
        exact: true,
        layout: '/pages',
        sub: [
            {
                name: "Editar Perfil",
                path: "/editarPerfil",
                layout: '/pages',
                exact: true,
            },
            {
                name: "Alterar Senha",
                path: "/alterarSenha",
                layout: '/pages',
                exact: true,
            }
        ]
    }
] as IRota[]

export { RotasAtivas }