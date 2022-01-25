import { Container } from "./styles";
import { Link } from 'react-router-dom'
import IRota from '../../interfaces/IRota'
import {FiChevronDown } from 'react-icons/fi'

interface MenuProps {
    rotas: IRota[]
}


export function Menu({ rotas }: MenuProps) {
    return (
        <Container>
            <ul className="menu">
                {
                    rotas.map((rota, index) => {
                        return (
                            rota.sub ? (
                                <li key={index}>
                                    <Link to={rota.layout + rota.path}>{rota.name}</Link>
                                    <ul>
                                        {
                                            rota.sub.map((subRota, index2) => (
                                                <li key={index2}>
                                                    <Link to={subRota.layout + subRota.path}>{subRota.name}</Link>
                                                </li> 
                                            ))
                                        } 
                                    </ul>
                                        <FiChevronDown/>
                                </li>
                            ) :
                                <li key={index}>
                                    <Link to={rota.layout + rota.path}>{rota.name}</Link>
                                </li>
                        )
                    }
                    )
                }
            </ul>
        </Container>
    )
}