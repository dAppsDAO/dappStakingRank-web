import { Footer } from "~/common/Footer";
import { Header } from "~/common/Header";
import { DAppsRankView } from "../views/DAppsRankView";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <DAppsRankView />
      <Footer />
    </div>
  );
}
