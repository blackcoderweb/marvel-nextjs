"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

function CharacterCards({ character }) {
  return (
  <div className="max-w-[500px]">
  <Link href={`/characters/${character.id}`}>
    <Card
      className="w-[100%] h-full pb-10"
      shadow="sm"
      radius="none"
      isPressable
    >
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          shadow="sm"
          radius="none"
          width="100%"
          alt={character.name}
          className="w-full object-cover h-[300px]"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{character.name}</b>
      </CardFooter>
    </Card>
  </Link>
</div>
  );
}

export default CharacterCards;
