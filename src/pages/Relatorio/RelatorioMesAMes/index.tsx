import { useEffect } from 'react';
import { Container } from './styles'

export function RelatorioMesAMes(){

    return (
        <Container>
            <iframe id="exibePaginas" src="https://localhost:44390/RelatorioMovimentacaoMesMes" scrolling="no"></iframe>
        </Container>
    )
}