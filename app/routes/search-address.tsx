import { Footer } from "~/common/Footer";
import { Header } from "~/common/Header";
import { SearchRankView } from "../views/SearchView";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <SearchRankView />
      <Footer />
    </div>
  );
}
