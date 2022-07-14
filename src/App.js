import "./App.css";
import Advertisement from "./Components/Advertisement";
import Navbar from "./Components/Navbar";
import ManufacturingBody from "./Components/ManufacturingBody";
import EditorComp from "./Components/EditorComp";
import SocialComp from "./Components/SocialComp";
import Footer from "./Components/Footer";
import MoreStories from "./Components/MoreStories";
import Signup from "./Components/Signup";
import VccTv from "./Components/VccTv";
import caraImg from "./Components/CaraouselImageStore";
import Caraousel from "./Components/Caraousel";
import {
  cards,
  foundersImg,
  tmtImg,
  techImg,
  maImg,
  finImg,
} from "./Components/imagestore";
import Upcoming from "./Components/Upcoming";
import VcPremium from "./Components/VcPremium";

function App() {
  return (
    <>
      <Navbar />
      <ManufacturingBody />
      <EditorComp
        srcmain="./images/economyman.png"
        pre="Premium"
        spanpos={{ bottom: "18%", right: "4%" }}
        spanposmain={{ bottom: "7%", right: "4%" }}
        heading="Editors Pick"
        headingtwo="ECONOMY"
        paraone="EMERGING MARKETS - Asian markets mixed as they digest Chinese data; South Korean stocks fall"
        srcone="./images/reliance.png"
        editorheadingtwo="FINANCE"
        editorparatwo="RIL invests Rs 7600 crores in acquisitions to strengthen retail arm"
        srctwo="./images/tme-img.png"
        headingthree="TMT"
        parathree="Dailyhunt parent raises close to $28 mn at $3.1 bn valuation"
        srcthree="./images/consumereditor.png"
        headingfour="Consumer"
        parafour="Delivery race among Indian grocery startups brings road safety risks"
      />
      <SocialComp />
      <Caraousel heading="Limited Partner" imgData={caraImg} />
      <Advertisement src="./images/advertisement2.png" width="800px" margin={{marginLeft:"158px"}}/>
      <VcPremium heading="VCCircle Premium" />
      <Upcoming heading="Upcoming Events" border="nav-border"/>
      <Caraousel heading="Founders" imgData={foundersImg} />
      <Advertisement src="./images/advertisement2.png" width="800px" margin={{marginLeft:"158px"}}/>
      <EditorComp
        srcmain="./images/building.png"
        pre="Premium"
        spanpos={{ bottom: "22%", right: "3%" }}
        spanposmain={{ display: "none" }}
        heading="Most Popular"
        headingtwo="TMT"
        paraone="Quick commerce deliveries surge 500% in a year, says logistics provider Shadowfax"
        srcone="./images/mo-coins.png"
        editorheadingtwo="CONSUMER"
        editorparatwo="Consumer firm Madbow bags $2 mn funding at $13 mn valuation"
        srctwo="./images/mo-economy.png"
        headingthree="ECONOMY"
        parathree="Indian shares hit three-week lows in broad-based selling"
        srcthree="./images/mo-infra.png"
        headngfour="MANUFACTURING"
        parafour="HDFC Capital marks initial close at $1.88 bn for its affordable housing fund 3"
        style={{ display: "none" }}
        line={{ backgroundColor: "red" }}
      />
      <Advertisement src="./images/advertisement2.png" width="800px" margin={{marginLeft:"158px"}} />

      <VccTv border="nav-border"/>
      <Caraousel heading="TMT" imgData={tmtImg} border="nav-border"/>

      <Signup border="nav-border"/>
      <Caraousel heading="TechCircle" imgData={techImg} />

      <Advertisement src="./images/advertisement2.png" width="800px" margin={{marginLeft:"158px"}} />
      <Caraousel heading="Mergers & Acquisitions" imgData={maImg} border="nav-border"/>
      
      <Caraousel heading="Financials" imgData={finImg} border="nav-border"/>
      
      <MoreStories />

      <Footer />
    </>
  );
}

export default App;
