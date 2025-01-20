import { ContainerPaginacao } from "./styled";

interface PaginacaoProps {
    handlePageClick: (page: number) => void;
    currentPage: number;
    totalPages: number;
}

export default function Paginacao({ handlePageClick, currentPage, totalPages }: PaginacaoProps) {
    return (
        <ContainerPaginacao>
            <button
                className="bi bi-chevron-double-left"
                onClick={() => handlePageClick(1)}
                disabled={currentPage === 1}
            />
            {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={page === currentPage ? 'active' : ''}
                    >
                        {page}
                    </button>
                );
            })}
            <button
                className="bi bi-chevron-double-right"
                onClick={() => handlePageClick(totalPages)}
                disabled={currentPage === totalPages}
            />
        </ContainerPaginacao>
    );
}