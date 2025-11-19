import ExpoCards from "@/components/expoCards";

const ExpoPage = () => {
  const expoData = [
    {
      img: "/images/Frame 61.png",
      title: "An In-Depth Exploration of SQL Databases in Microsoft Fabric",
      speaker: "Kyle Walker, James Maddison",
      price: "N250,000",
    },
    {
      img: "/images/Frame 62.png",
      title:
        "A Blueprint for Designing Power BI Report User Interface and User Experience",
      speaker: "Trent Arnold",
      price: "N80,000",
    },
    {
      img: "/images/Frame 63.png",
      title: "Transforming the Development Process with AI-Driven Capabilities",
      speaker: "John Stalker",
      price: "N230,500",
    },
    {
      img: "/images/Frame 64.png",
      title:
        "Enhancing the Development Experience with AI Integration in Fabric Data Factory",
      speaker: "Tobi Amusan, Janet James",
      price: "N90,500",
    },
    {
      img: "/images/Frame 65.png",
      title:
        "Accelerating the Transition from Data Insights to Strategic Action Using Power BI’s",
      speaker: "Mike Stallion",
      price: "N200,500",
    },
    {
      img: "/images/Frame 66.png",
      title:
        "An In-Depth Exploration of Data Science Concepts and Techniques Using Python",
      speaker: "Jones Baggage, Kol Mike",
      price: "N95,500",
    },
    {
      img: "/images/Frame 67.png",
      title:
        "Exploring Virtual Reality (VR) and Augmented Reality (AR) Development",
      speaker: "Joe Gomez",
      price: "N50,500",
    },
    {
      img: "/images/Frame 63.png",
      title:
        "A Comprehensive Exploration of Blockchain Technology and Its Applications",
      speaker: "Hepzibah Michael",
      price: "N250,500",
    },
    {
      img: "/images/Frame 68.png",
      title:
        "Exploration of DevOps Methodologies and Essential Tools for Development",
      speaker: "Stones Makkari",
      price: "N240,500",
    },
  ];
  return (
    <div className="relative bg-gradient-to-tr min-h-screen max-h-auto from-black from-50% to-[#662D91] px-2">
      <div className="absolute bg-[url('/images/bg-img.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay inset-0 opacity-20"></div>
      <main className="flex items-center gap-8 flex-col py-8 pt-[5rem] max-phoneL:gap-4">
        <h2 className="text-3xl tablet:text-5xl laptop:mt-7 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Expo
        </h2>
        <section className="w-[90%] p-2 grid grid-cols-3 gap-8 max-laptop:w-full max-tablet:grid-cols-2 max-phoneL:grid-cols-1">
          {expoData.map((expo, index) => (
            <ExpoCards
              key={index}
              {...expo}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default ExpoPage;
