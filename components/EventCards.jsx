"use client";
import { Card, CardFooter, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

function EventCards({ event }) {
  return (
    
    <Card className="max-w-[500px] pb-10" shadow="sm" radius="none">
    <CardBody className="overflow-visible p-0">
    <Link href={`/events/${event.id}`}>
      <Image
        isZoomed
        shadow="sm"
        radius="none"
        width="100%"
        alt={event.title}
        className="w-full object-cover h-[300px]"
        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
      />
      </Link>
    </CardBody>
    <CardFooter className="text-small justify-between">
      <b>{event.title}</b>
    </CardFooter>
    </Card>
      
  );
}

export default EventCards;