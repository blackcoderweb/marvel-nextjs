"use client"
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function SingleComicEventSerie({ item }) {
  return (
    <Card className="max-w-[500px] " radius="none">
      <CardHeader className="pb-0 pt-2 flex-col items-center">
        <h4 className="font-bold text-large">{item[0].title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible flex flex-col items-center">
        <Image
          alt={item[0].title}
          className="h-[500px] object-cover pb-1"
          src={`${item[0].thumbnail.path}.${item[0].thumbnail.extension}`}
          width={500}
          radius="none"
        />
      </CardBody>
    </Card>
  );
}

export default SingleComicEventSerie;