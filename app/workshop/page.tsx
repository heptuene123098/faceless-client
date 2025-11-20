import WorkShopCards from "@/components/workshopCards";

const WorkShop = () => {
  return (
    <div className=" relative bg-gradient-to-tr min-h-screen max-h-auto from-black from-50% to-[#662D91]">
      <div className="absolute  bg-[url('/images/bg-img.jpeg')] bg-cover bg-center bg-no-repeat bg-blend-overlay inset-0  opacity-20"></div>
      <main className=" flex items-center gap-8 flex-col  py-8  pt-[5rem] max-phoneL:gap-4">
        <h2 className="text-3xl tablet:text-5xl laptop:mt-7 font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Workshops
        </h2>
        <section className="w-[90%] p-2  grid grid-cols-3 gap-8 max-tablet:grid-cols-2 max-phoneL:grid-cols-1 max-phoneP:p-0">
          <WorkShopCards />
          <WorkShopCards />
          <WorkShopCards />
          <WorkShopCards />
          <WorkShopCards />
          <WorkShopCards />
          <WorkShopCards />
          <WorkShopCards />
          <WorkShopCards />
        </section>
      </main>
    </div>
  );
};

export default WorkShop;
