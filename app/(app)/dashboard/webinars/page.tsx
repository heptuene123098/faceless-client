import { webinars } from "@/lib/dummyWebinars";
import WebinarCard from "@/components/WebinarCard";

export default function WebinarsPage() {
  return (
    <div className="bg-[#F1F1F1] min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-8">
          <div className="rounded-xl shadow p-6 space-y-6">
            <h1 className="text-3xl font-semibold text-[#662D91]">My Webinars</h1>
            <p className="text-gray-600 mt-1">
              List of Available webinars
            </p>
          </div>
          <section className="space-y-3">
            {webinars.map((webinar) => (
              <WebinarCard key={webinar.title} {...webinar} />
            ))}
          </section>
        </div>
      </div>
  );
}
