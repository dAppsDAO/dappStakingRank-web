import { FC } from "react";

export const SelectNetWork: FC = () => {
  return (
    <div className="form-control max-w-xs">
      <select className="m-2 select select-xs sm:select-sm md:select-md lg:select-md">
        <option defaultChecked>Astar</option>
        <option>Shiden</option>
      </select>
    </div>
  );
};
