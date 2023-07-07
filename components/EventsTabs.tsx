import { format, parseISO } from "date-fns";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";
import Link from "next/link";
import getEventMetadata from "./getEventMetadata";

const EventsTabs = () => {
  const eventMetadata = getEventMetadata();
  // const postPreviews = eventMetadata
  //   .slice(0, 3)
  //   .map((event) => <EventPreview key={event.slug} {...event} />);
  return (
    <div className="full-bleed">
      <Tabs defaultValue="popular" className="w-full">
        <TabsList>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>
        <TabsContent value="recent">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
            Calendar of Activities
          </h2>
          <div className="space-y-5">
            {eventMetadata.slice(0, 2).map((activity) => {
              return (
                <div key={activity.title}>
                  <Link href={`/events/${activity.slug}`}>
                    <h3 className="text-lg lg:text-2xl hover:underline underline-offset-2 hover:text-primary">
                      {activity.title}
                    </h3>
                  </Link>
                  <p className="my-2 text-secondaryTextColor text-xs lg:text-sm">
                    {activity.date}
                  </p>
                  <Separator />
                </div>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="popular">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
            Calendar of Activities
          </h2>
          <div className="space-y-5">
            {eventMetadata.slice(1, 3).map((activity) => {
              return (
                <div key={activity.title}>
                  <Link href={`/events/${activity.slug}`}>
                    <h3 className="text-lg lg:text-2xl hover:underline underline-offset-2 hover:text-primary">
                      {activity.title}
                    </h3>
                  </Link>
                  <p className="my-2 text-secondaryTextColor text-xs lg:text-sm">
                    {activity.date}
                  </p>
                  <Separator />
                </div>
              );
            })}
          </div>
        </TabsContent>
        <TabsContent value="trending">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
            Calendar of Activities
          </h2>
          <div className="space-y-5">
            {eventMetadata.slice(2, 3).map((activity) => {
              return (
                <div key={activity.title}>
                  <Link href={`/events/${activity.slug}`}>
                    <h3 className="text-lg lg:text-2xl hover:underline underline-offset-2 hover:text-primary">
                      {activity.title}
                    </h3>
                  </Link>
                  <p className="my-2 text-secondaryTextColor text-xs lg:text-sm">
                    {activity.date}
                  </p>
                  <Separator />
                </div>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsTabs;
