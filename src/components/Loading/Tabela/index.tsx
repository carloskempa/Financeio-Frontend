import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Container } from './styles'

interface LoadingTableProps {
    numeroColunas: number;
}

export function LoadingTable({ numeroColunas }: LoadingTableProps) {
    return (
        <Container>
            <Skeleton height={20} width={200} style={{ marginBottom: 10 }} />
            <Skeleton height={60} style={{ marginBottom: 15 }} />
            <Skeleton height={45} count={numeroColunas} style={{ marginBottom: 10 }} />
            <div>
                <Skeleton height={30} width={300} />
            </div>
        </Container>
    )
}