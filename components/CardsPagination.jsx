"use client";
import { Pagination, Button } from "@nextui-org/react";
import { useState } from "react";
import CharacterCards from "./CharacterCards";
import { arraySlicer } from "@/helpers/arraySlicer";
import { usePathname } from "next/navigation";
import SerieCards from "./SerieCards";
import ComicCards from "./ComicCards";
import EventCards from "./EventCards";
import CreatorCards from "./CreatorCards";

function CardsPagination({ totalItems, items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / 12);
  const pathname = usePathname();

  return (
    <>
    {totalItems > 0 && <>
      <div className="max-w-[1300px] pl-4 pr-4 gap-4 grid grid-cols-2  sm:grid-cols-6">
        {arraySlicer(items, currentPage).map((item) => {
          switch (pathname) {
            case "/characters":
              return <CharacterCards item={item} key={item.id} />;
            case "/series":
              return <SerieCards item={item} key={item.id} />;
            case "/comics":
              return <ComicCards item={item} key={item.id} />;
            case "/events":
              return <EventCards item={item} key={item.id} />;
            case "/creators":
              return <CreatorCards item={item} key={item.id} />;
            case "/characters/search":
                return <CharacterCards item={item} key={item.id} />;
                case "/series/search":
              return <SerieCards item={item} key={item.id} />;
            case "/comics/search":
              return <ComicCards item={item} key={item.id} />;
            case "/events/search":
              return <EventCards item={item} key={item.id} />;
            case "/creators/search":
              return <CreatorCards item={item} key={item.id} />;
            default:
              break;
          }
        })}
      </div>
      <div className="flex flex-col gap-5 pt-5">
        <Pagination
          total={totalPages}
          color="primary"
          page={currentPage}
          onChange={setCurrentPage}
        />
        <div className="flex gap-2 justify-center">
          <Button
            size="sm"
            variant="flat"
            color="primary"
            onPress={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
          >
            Previous
          </Button>
          <Button
            size="sm"
            variant="flat"
            color="primary"
            onPress={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
          >
            Next
          </Button>
        </div>
      </div>
    </>}
    </>
    
  );
}

export default CardsPagination;
