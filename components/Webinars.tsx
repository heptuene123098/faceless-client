import WebinarCard from "./WebinarCard";

interface WebinarCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  price: string | number;
  image: string;
  status?: string;
}

interface WebinarsProps {
  webinars: WebinarCardProps[];
}

export default function Webinars({ webinars }: WebinarsProps) {
  return (
    <div className="bg-[#F1F1F1] p-5 rounded-t-3xl">
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.title} {...webinar} />
      ))}
    </div>
  );
}
