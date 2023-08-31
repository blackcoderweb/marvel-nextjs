"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

function ComicCards({ comic }) {
  return (
    
    <Card className="max-w-[500px] pb-10" shadow="sm" radius="none">
    <CardBody className="overflow-visible p-0">
    <Link href={`/comics/${comic.id}`}>
      <Image
        isZoomed
        shadow="sm"
        radius="none"
        width="100%"
        alt={comic.title}
        className="w-full object-cover h-[300px]"
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      />
      </Link>
    </CardBody>
    <CardFooter className="text-small justify-between">
      <b>{comic.title}</b>
    </CardFooter>
    </Card>
      
  );
}

export default ComicCards;