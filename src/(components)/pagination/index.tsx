import { PaginationProps } from "@/interfaces";
import { Container } from "./styled";

export default function Pagination({
  handlePageClick,
  currentPage,
  totalPages,
  color,
  colorHover,
}: PaginationProps) {
  return (
    <Container $color={color} $colorHover={colorHover}>
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
            className={page === currentPage ? "active" : ""}
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
    </Container>
  );
}
