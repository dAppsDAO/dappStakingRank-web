import type { VFC } from "react";

type HomeStatsData = {
  totalRewards: number;
  totalAccountsCount: number;
  totalRewardCount: number;
};

export const Stats: VFC<{ statsData: HomeStatsData }> = ({ statsData }) => {
  return (
    <div className="stats text-primary-content stats-vertical lg:stats-horizontal bg-gradient-to-r from-secondary to-primary mt-4 ">
      <div className="stat">
        <div className="stat-title">Total dAppStaking Reward</div>
        <div className="stat-value  tabular-nums">
          {/* [TMP] Apply one-third to total rewards #2 */}
          {Math.floor(Number(statsData.totalRewards) / 3).toLocaleString()}
        </div>
        <div className="stat-title">$ASTR</div>
      </div>

      <div className="stat">
        <div className="stat-title">Total dAppStaking Account</div>
        <div className="stat-value">
          {statsData.totalAccountsCount.toLocaleString()}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Total Rewards Count</div>
        <div className="stat-value">
          {statsData.totalRewardCount.toLocaleString()}
        </div>
      </div>
    </div>
  );
};
