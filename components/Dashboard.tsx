import { webinars } from "@/lib/dummyWebinars";
import Button from "./Button";
import DashboardStat from "./DashboardStat";
import Webinars from "./Webinars";

export default function Dashboard() {
  const dashboardWebinars = webinars.slice(0, 3);
  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5">
        <div className="w-full space-y-5">
          <div className="border border-[#662D91] flex max-sm:flex-col justify-between items-center px-5 py-7 rounded-2xl bg-[url('/svgs/faceless-skeleton.svg')] bg-no-repeat">
            <div className="md:w-1/2 space-y-5">
              <h1 className="text-3xl">Hi Emverse!</h1>
              <p>
                Facecan is hosting an event on the 3rd of October don’t miss out
                – register NOW
              </p>
            </div>
            <div>
              <Button variant="secondary" className="text-[#662D91]">
                Add to Upcoming
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <DashboardStat
              icon="LiveIcon"
              status="Ongoing"
              value="1,103 webinars"
              className="bg-[#912D7F]"
            />
            <DashboardStat
              icon="CalendarDays"
              status="Upcoming"
              value="0"
              className="bg-[#FFD900] text-black"
            />
            <DashboardStat
              icon="CalendarDays"
              status="Finished"
              value="0"
              className="bg-[#F1F1F1] text-black"
            />
          </div>
        </div>

        <div className="flex flex-col justify-end bg-[#F0EAF4] rounded-2xl px-4 py-6">
          <Button>Subscribe</Button>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <h2 className="text-2xl font-semibold">Discover Webinars</h2>
        <Webinars webinars={dashboardWebinars} />
      </div>
    </div>
  );
}
