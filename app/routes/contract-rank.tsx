import { Footer } from "~/common/Footer";
import { ContractRankView } from "../views/ContractRankView";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ContractRankView />
      <Footer />
    </div>
  );
}
