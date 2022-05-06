import type { VFC } from "react";

type HomeStatsData = {
  totalRewards: number;
  totalAccountsCount: number;
  totalRewardCount: number;
};

export const Stats: VFC<{ statsData: HomeStatsData }> = ({ statsData }) => {
  return (
    <div className="stats stats-vertical lg:stats-horizontal">
      <div className="stat">
        <div className="stat-title">Total dAppStaking Reward</div>
        <div className="stat-value  tabular-nums">
          {/* [TMP] Apply one-third to total rewards #2 */}
          {(
            Math.round((Number(statsData.totalRewards) / 3) * 100) / 100
          ).toLocaleString()}{" "}
          ASTR
        </div>
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
