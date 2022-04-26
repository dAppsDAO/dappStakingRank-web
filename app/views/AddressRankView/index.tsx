import { Link } from "@remix-run/react";
import { FC } from "react";
import { Header } from "~/common/Header";

export const AddressRankView: FC = ({}) => {
  // const { publicKey } = useWallet();

  const onClick = () => {};

  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Header />

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl">
          <div className="flex items-center space-x-2">
            <div className="dropdown">
              <div>
                <div className="online avatar">
                  <div className="mask mask-hexagon bg-base-content h-16 w-16 bg-opacity-10 p-px">
                    <img
                      src="/tailwind-css-component-profile-5@56w.png"
                      alt="Avatar Tailwind CSS Component"
                      className="mask mask-hexagon"
                    />
                  </div>
                </div>
              </div>
              <div className="dropdown-content py-2">
                <div className="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title font-extrabold capitalize">
                      avatar component
                    </h2>
                    <p className="text-neutral-content text-sm text-opacity-80">
                      Use avatar component with any size
                    </p>
                    <div className="mt-4 flex justify-end">
                      <a
                        href="/components/avatar"
                        className="btn btn-primary btn-sm xl:btn-md"
                      >
                        See component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-lg font-extrabold">
                Zkaay4r6sUZT1u6XKKhi8JHiyJB4YgvZMbYUzsZQYkGdoA4n
              </div>
              <div className="text-base-content/70 text-sm">
                Balance 1,748.1528064958462153 ASTR
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div>
              <div className="divider text-base-content/60 m-0" />
            </div>
            <div className="dropdown-content py-2">
              <div className="card compact bg-neutral-focus text-neutral-content rounded-box w-72 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title font-extrabold capitalize">
                    divider component
                  </h2>
                  <p className="text-neutral-content text-sm text-opacity-80">
                    User divider component to visually separate items
                  </p>
                  <div className="mt-4 flex justify-end">
                    <a
                      href="/components/divider"
                      className="btn btn-primary btn-sm xl:btn-md"
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg font-extrabold">dAppStaking Report</div>
          <div className="stats stats-vertical lg:stats-horizontal">
            <div className="stat">
              <div className="stat-title">Rewards</div>
              <div className="stat-value">31,020,220ASTAR</div>
            </div>

            <div className="stat">
              <div className="stat-title">RewardsCount</div>
              <div className="stat-value">42</div>
            </div>

            <div className="stat">
              <div className="stat-title">FromContracts</div>
              <div className="stat-value">13</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
