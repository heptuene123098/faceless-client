const WorkShopCards = () => {
  return (
    <article className=" relative bg-[#2B113C] border border-[#D49BFFFC] perspective-1000 animate-float cursor-pointer gap-8 flex flex-col items-center px-4 py-8  rounded-sm max-phoneP:px-3 max-phoneP:py-4">
      <div className="absolute inset-0 schedule_card opacity-5 "></div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-xl text-white w-[95%] max-laptop:w-full max-laptop:text-base max-phoneP:text-sm">
          Creating a complete End-to-End Lakehouse solution through hands-on
          implementation.
        </p>
        <small className="text-sm font-semibold text-[#D49BFFFC]/99 max-phoneP:text-xs">
          Trent Arnold
        </small>
      </div>
      <div className="flex items-center gap-1 ml-auto">
        <p className="text-base font-semibold text-white max-laptop:text-sm max-phoneP:text-xs">
          Learn More
        </p>
        <i className="fa-solid fa-arrow-right text-sm max-laptop:text-xs max-phoneP:text-[11px]"></i>
      </div>
    </article>
  );
};

export default WorkShopCards;
