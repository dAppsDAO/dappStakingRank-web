import type { MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api.subquery.network/sq/dappsDAO/astar-dappstaking-rewards__ZGFwc",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "dAppStaking Ranking on Astar",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" data-theme="night">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider value={client}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Provider>
      </body>
    </html>
  );
}
