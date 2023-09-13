"use client"
import {Pagination, Button} from "@nextui-org/react";
import { useState } from "react";

function CardsPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-small text-default-500">Selected Page: {currentPage}</p>
      <Pagination
        total={10}
        color="primary"
        page={currentPage}
        onChange={setCurrentPage}
      />
      <div className="flex gap-2 justify-center">
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </Button>
        <Button
          size="sm"
          variant="flat"
          color="primary"
          onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default CardsPagination

