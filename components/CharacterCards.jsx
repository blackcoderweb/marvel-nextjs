"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

function CharacterCards({ character }) {
  return (
    
    <Card className="max-w-[500px] pb-10" shadow="sm" radius="none">
    <CardBody className="overflow-visible p-0">
    <Link href={`/characters/${character.id}`}>
      <Image
        isZoomed
        shadow="sm"
        radius="none"
        width="100%"
        alt={character.name}
        className="w-full object-cover h-[300px]"
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      </Link>
    </CardBody>
    <CardFooter className="text-small justify-between">
      <b>{character.name}</b>
    </CardFooter>
    </Card>
      
  );
}

export default CharacterCards;
