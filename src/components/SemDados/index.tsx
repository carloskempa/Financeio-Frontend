import SemDadosImg from '../../assets/filter-not-found.svg'
import { ContentSemDado } from './styles'

export function SemDados() {
    return (
        <ContentSemDado>
            <h1>Nenhum resultado encontrado.</h1>
            <img src={SemDadosImg} alt="semDados" />
        </ContentSemDado>
    )
}