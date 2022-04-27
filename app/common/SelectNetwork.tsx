import { FC } from "react";

export const SelectNetWork: FC = () => {
  return (
    <div className="m-2 form-control w-full max-w-xs">
      <select className="m-2 select select-xs select-sm  select-md lg:select-md">
        <option defaultChecked>Astar</option>
        <option>Shiden</option>
      </select>
    </div>
  );
};
