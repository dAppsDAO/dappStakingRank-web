import { FC } from "react";

export const SelectNetWork: FC = () => {
  return (
    <div className="m-2 form-control w-full max-w-xs">
      <select className="select select-bordered w-full max-w-xs">
        <option defaultChecked>Astar</option>
        <option>Shiden</option>
      </select>
    </div>
  );
};
