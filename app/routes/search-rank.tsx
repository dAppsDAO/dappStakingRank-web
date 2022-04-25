import { Footer } from "~/common/Footer";
import { SearchRankView } from "../views/SearchRankView";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchRankView />
      <Footer />
    </div>
  );
}
