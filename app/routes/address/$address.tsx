import { Footer } from "~/common/Footer";
import { Header } from "~/common/Header";
import { AddressView } from "~/views/AddressView";

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Header />
        <AddressView />
        <Footer />
      </div>
    </>
  );
}
