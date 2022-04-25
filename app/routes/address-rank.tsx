import { Footer } from "~/common/Footer";
import { AddressRankView } from "../views/AddressRankView";

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <AddressRankView />
        <Footer />
      </div>
    </>
  );
}
