import Banner from "./components/Banner";
import Companies from "./components/Companies";
import Finance from "./components/Finance";
import Legacy from "./components/Legacy";
import Philosophy from "./components/Philosophy";
import Technology from "./components/Technology";
import Trusted from "./components/Trusted";

export default function Home() {
  return (
    <>
   
      <div id="banner">
        <Banner />
      </div>
          <div id="finance">
        <Finance />
      </div>
        <div id="philosophy">
        <Philosophy />
      </div>
        <div id="technology" >
        <Technology />
      </div>
       <div id="trusted" >
        <Trusted />
      </div>
        <div  id="companies" >
        <Companies />
      </div> 
      <div id="legacy">
        <Legacy />
      </div>
    </>
  );
}
