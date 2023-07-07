import getEventMetadata from "@/components/getEventMetadata";
import PostPreview from "@/components/PostPreview";

const Events = () => {
  const postMetadata = getEventMetadata();
  const Events = postMetadata.map((event) => (
    <PostPreview key={event.slug} {...event} />
  ));

  return (
    <section className="inside mt-4 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{Events}</div>
    </section>
  );
};

export default Events;
