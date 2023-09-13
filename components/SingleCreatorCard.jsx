"use client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function SingleCreatorCard({ creator }) {
  return (
    <Card className="max-w-[500px] " radius="none">
      <CardHeader className="pb-0 pt-2 flex-col items-center">
        <h4 className="font-bold text-large">{creator[0].fullName}</h4>
      </CardHeader>
      <CardBody className="overflow-visible flex flex-col items-center">
        <Image
          alt={creator[0].fullName}
          className="h-[500px] object-cover pb-1"
          src={`${creator[0].thumbnail.path}.${creator[0].thumbnail.extension}`}
          width={500}
          radius="none"
        />
      </CardBody>
    </Card>
  );
}

export default SingleCreatorCard;