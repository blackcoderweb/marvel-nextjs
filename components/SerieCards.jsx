"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

function SerieCards({ serie }) {
  return (
    
    <Card className="max-w-[500px] pb-10" shadow="sm" radius="none">
    <CardBody className="overflow-visible p-0">
    <Link href={`/series/${serie.id}`}>
      <Image
        isZoomed
        shadow="sm"
        radius="none"
        width="100%"
        alt={serie.title}
        className="w-full object-cover h-[300px]"
        src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
      />
      </Link>
    </CardBody>
    <CardFooter className="text-small justify-between">
      <b>{serie.title}</b>
    </CardFooter>
    </Card>
      
  );
}

export default SerieCards;