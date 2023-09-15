"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

function SerieCards({ item }) {
  return (
    <div className="max-w-[500px]">
      <Link href={`/series/${item.id}`}>
        <Card className="w-[100%] h-full pb-10" shadow="sm" radius="none" isPressable>
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="none"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[300px]"
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            />
          </CardBody>
          <CardFooter className="text-small text-left">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}

export default SerieCards;
