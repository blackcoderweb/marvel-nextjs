"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function SingleCharacterCard({ character }) {
  return (
    <Card className="max-w-[500px]" radius="none">
      <CardHeader className="pb-0 pt-2 flex-col items-center">
        <h4 className="font-bold text-large">{character[0].name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible flex flex-col items-center">
        <Image
          alt={character[0].name}
          className="h-[500px] object-cover pb-1"
          src={`${character[0].thumbnail.path}.${character[0].thumbnail.extension}`}
          width={500}
          radius="none"
        />
        <p className="text-default-600">{character[0].description}</p>
      </CardBody>
    </Card>
  );
}

export default SingleCharacterCard;
