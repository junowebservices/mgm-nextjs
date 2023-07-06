import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { activities } from "@/constants";
import { Separator } from "./ui/separator";
import Link from "next/link";

const EventsTabs = () => {
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
            {activities.slice(0, 3).map((activity) => (
              <div key={activity.id}>
                <Link href="#">
                  <h3 className="text-lg lg:text-2xl hover:underline underline-offset-2 hover:text-primary">
                    {activity.title}
                  </h3>
                </Link>
                <div className="space-x-4 my-2 text-secondaryTextColor text-xs lg:text-sm">
                  <span>{activity.date}</span>
                  <span>29 comments</span>
                  <span>16 shares</span>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="popular">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
            Calendar of Activities
          </h2>
          <div className="space-y-5">
            {activities.slice(3, 7).map((activity) => (
              <div key={activity.id}>
                <Link href="#">
                  <h3 className="text-lg lg:text-2xl hover:underline underline-offset-2 hover:text-primary">
                    {activity.title}
                  </h3>
                </Link>
                <div className="space-x-4 my-2 text-secondaryTextColor text-xs lg:text-sm">
                  <span>{activity.date}</span>
                  <span>29 comments</span>
                  <span>16 shares</span>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="trending">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:mb-8">
            Calendar of Activities
          </h2>
          <div className="space-y-5">
            {activities.slice(7, 11).map((activity) => (
              <div key={activity.id}>
                <Link href="#">
                  <h3 className="text-lg lg:text-2xl hover:underline underline-offset-2 hover:text-primary">
                    {activity.title}
                  </h3>
                </Link>
                <div className="space-x-4 my-2 text-secondaryTextColor text-xs lg:text-sm">
                  <span>{activity.date}</span>
                  <span>29 comments</span>
                  <span>16 shares</span>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsTabs;
