import { Footer } from "~/common/Footer";
import { Header } from "~/common/Header";
import { AddressRankView } from "../views/AddressRankView";

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Header />
        <AddressRankView />
        <Footer />
      </div>
    </>
  );
}
