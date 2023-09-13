import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import List from "./List";



function RelatedItemsCard({heading, list}) {
  return (
    <Card className="w-[400px] h-[400px] p-5">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <h1 className="font-bold">{heading}</h1>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <List list={list} />
            </CardBody>
          </Card>
  )
}

export default RelatedItemsCard