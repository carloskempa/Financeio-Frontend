import { Console } from 'console';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Container } from './styles'


const MAXIMO_ITENS = 6;
const MAXIMO_LEFT = (MAXIMO_ITENS - 1) / 2;


interface PaginacaoProps {
    limite: number;
    total: number;
    offset: number;
    setOffset: (page: number) => void;
}

export function Paginacao({ limite, total, offset, setOffset }: PaginacaoProps) {

    const current = offset;
    const pages = Math.ceil(total / limite);
    const maxFirst = Math.max(pages - (MAXIMO_ITENS - 1), 1);

    const first = Math.min(
        Math.max(current - MAXIMO_LEFT, 1),
        maxFirst
    );

    function onPageChange(page: number) {
        setOffset(page);
    }


    return (
        <Container>
            <ul className="pagination">
                <li>
                    <button
                        onClick={() => onPageChange(current - 1)}
                        disabled={current === 1}
                    >
                        <FiChevronLeft />
                    </button>
                </li>
                {Array.from({ length: Math.min(MAXIMO_ITENS, pages) })
                    .map((_, index) => index + first)
                    .map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => onPageChange(page)}
                                className={page === current
                                    ? 'active'
                                    : ''
                                }
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                <li>
                    <button
                        onClick={() => onPageChange(current + 1)}
                        disabled={current === pages}
                    >
                        <FiChevronRight />
                    </button>
                </li>
            </ul>
        </Container>
    )
}