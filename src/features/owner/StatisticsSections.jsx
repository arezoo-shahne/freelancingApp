function StatisticsSections({ icon, title, value }) {
  return (
    <div>
      <div className="grid grid-cols-[8rem,1fr] grid-rows-2 bg-secondary-300 rounded-xl p-2 gap-x-4">
        <div className="row-span-2 flex items-center justify-center">
          {icon}
        </div>
        <h5 className="font-bold text-secondary-500 self-center">{title}</h5>
        <p className="font-bold text-secondary-700 text-xl">{value}</p>
      </div>
    </div>
  );
}
export default StatisticsSections;
