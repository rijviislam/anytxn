import Companies from "./components/Companies";
import Finance from "./components/Finance";
import Footer from "./components/Footer";
import Legacy from "./components/Legacy";
import Philosophy from "./components/Philosophy";
import Technology from "./components/Technology";
import Trusted from "./components/Trusted";

export default function Home() {
  return (
  <>
  <Finance/>
  <Philosophy/>
  <Technology/>
  <Trusted/>
  <Companies/>
  <Legacy/>
  <Footer/>
  </>
  );
}
