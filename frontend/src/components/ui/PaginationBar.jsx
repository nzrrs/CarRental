import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PropTypes from "prop-types";

export default function PaginationBar({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  return (
    <Pagination>
      <PaginationContent>

        {/* PREV */}
        <PaginationItem>
          <PaginationPrevious
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
          />
        </PaginationItem>

        {/* NUMBERS */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* NEXT */}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(p + 1, totalPages)
              )
            }
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}

PaginationBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
