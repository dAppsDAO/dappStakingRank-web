import { FC } from "react";

export const Stats: FC = () => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal">
      <div className="stat">
        <div className="stat-title">Total dAppStaking Reward</div>
        <div className="stat-value">89,4030</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-title">Total dAppStaking Account</div>
        <div className="stat-value">89,400</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-title">Total Rewards </div>
        <div className="stat-value">1,230</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};
