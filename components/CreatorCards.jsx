"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

function CreatorCards({ creator }) {
  return (
    
    <Card className="max-w-[500px] pb-10" shadow="sm" radius="none">
    <CardBody className="overflow-visible p-0">
    <Link href={`/creators/${creator.id}`}>
      <Image
        isZoomed
        shadow="sm"
        radius="none"
        width="100%"
        alt={creator.fullName}
        className="w-full object-cover h-[300px]"
        src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
      />
      </Link>
    </CardBody>
    <CardFooter className="text-small justify-between">
      <b>{creator.fullName}</b>
    </CardFooter>
    </Card>
      
  );
}

export default CreatorCards;