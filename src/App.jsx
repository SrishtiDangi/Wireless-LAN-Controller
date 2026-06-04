import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Architecture from "./components/Architecture";
import RackOverview from "./components/RackOverview";
import CallFlow from "./components/CallFlow";
import PBXComparison from "./components/PBXComparison";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import CMS from "./components/CMS";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Overview />
      <Architecture />
      <RackOverview />
      <CallFlow />
      <CMS/>
      <PBXComparison />
      <Advantages />
      <Footer />
    </>
  );
}

export default App;