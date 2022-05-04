import { Footer } from "~/common/Footer";
import { Header } from "~/common/Header";
import { HomeView } from "../views/HomeView";

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Header />
        <HomeView />
        <Footer />
      </div>
    </>
  );
}
