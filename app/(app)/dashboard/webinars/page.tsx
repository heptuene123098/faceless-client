import Webinars from "@/components/Webinars";
import { webinars } from "@/lib/dummyWebinars";

export default async function WebinarStatusPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { status } = await searchParams;
  const filteredWebinar = webinars.filter((el) => el.status === status);

  return (
    <section>
      <h1 className="text-2xl font-semibold capitalize mb-4">
        {status === "ongoing" ? "Discover Webinars" : `${status} Webinars`}
      </h1>
      <Webinars webinars={filteredWebinar} />
    </section>
  );
}
