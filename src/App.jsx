import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Architecture from "./components/Architecture";
import RackOverview from "./components/RackOverview";
import CallFlow from "./components/CallFlow";
import PBXComparison from "./components/PBXComparison";
import Protocols from "./components/Protocols";
import PhoneRegistration from "./components/PhoneRegistration";
import DialPlan from "./components/DialPlan";
import CodecQoS from "./components/CodecQoS";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import CMS from "./components/CMS";
import ClassOfService from "./components/ClassOfService";
import Troubleshooting from "./components/Troubleshooting";
import Ecosystem from "./components/Ecosystem";
import GatewayPSTN from "./components/GatewayPSTN";
import Security from "./components/Security";
import Mobility from "./components/Mobility";
import MediaResources from "./components/MediaResources";
import HighAvailability from "./components/HighAvailibilty";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* OVERVIEW */}
      <Overview />
      <Ecosystem />
      <Architecture />
      <Advantages />

      {/* CALL PROCESSING */}
      <PhoneRegistration />
      <CallFlow />
      <DialPlan />
      <ClassOfService />

      {/* VOICE INFRASTRUCTURE */}
      <GatewayPSTN />
      <Protocols />
      <CodecQoS />
      <MediaResources />

      {/* ENTERPRISE FEATURES */}
      <Security />
      <Mobility />
      <HighAvailability />
      <Troubleshooting />

      {/* OPTIONAL / EXTRA */}
      <RackOverview />
      <CMS />
      <PBXComparison />

      <Footer />
    </>
  );
}

export default App;