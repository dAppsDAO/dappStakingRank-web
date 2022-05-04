import { Link } from "@remix-run/react";
import type { FC, VFC } from "react";
import type { dAppType } from "../../constants/dApp";
import { dApps } from "../../constants/dApp";

const DAppAnalyticsRow: VFC<{ reward: any; rank: number }> = ({
  reward,
  rank,
}) => {
  return (
    <tr>
      <th>{rank}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="text-xs">{reward.account.id}</div>
          </div>
        </div>
      </td>
      <td>{Math.floor(reward.reward)}</td>
      <td>{Math.floor(reward.eraIndex)}</td>
      <th>
        <Link to={"/address/" + reward.account.id}>
          <button className="btn btn-secondary btn-xs">details</button>
        </Link>
      </th>
    </tr>
  );
};

// todo: typeをschemaからcodegen
type DAppAnalyticsProps = {
  rewards: any;
  totalReward: number;
};

export const DAppAnalytics: VFC<DAppAnalyticsProps> = ({
  rewards,
  totalReward,
}) => {
  console.log(rewards, totalReward);

  return (
    <>
      <div className="stats stats-vertical lg:stats-horizontal pb-8">
        <div className="stat">
          <div className="stat-title">Total Reward</div>
          <div className="stat-value  tabular-nums">
            {Math.floor(totalReward).toLocaleString()} ASTR
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Rewards Count</div>
          <div className="stat-value">
            {rewards.totalCount.toLocaleString()}
          </div>
        </div>
      </div>

      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Account</th>
            <th>Rewards</th>
            <th>Era</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rewards.nodes.map((reward: any, index: number) => {
            return (
              <DAppAnalyticsRow key={index} rank={index + 1} reward={reward} />
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Account</th>
            <th>Rewards</th>
            <th>Era</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
