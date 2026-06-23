import Navbar from "./components/Navbar";
import Over from "./components/Over";

/* INTRODUCTION */

import Ecosystem from "./components/Ecosystem";

/* WLC CORE */
import Architecture from "./components/Architecture";
import WlanDeployment from "./components/WlanDeployment";
import WorkingProcess from "./components/WorkingProcess";
import ApJoin from "./components/ApJoin";
import Capwap from "./components/Capwap";

/* NETWORK */
import NetworkLines from "./components/NetworkLines";
import WlcPorts from "./components/WlcPorts";
import Protocols from "./components/Protocols";

/* ENTERPRISE FEATURES */
import Mobility from "./components/Mobility";
import MediaResources from "./components/MediaResources";
import HighAvailibility from "./components/HighAvailibilty";
import Advantages from "./components/Advantages";

/* TROUBLESHOOTING */
import Troubleshooting from "./components/Troubleshooting";
import DiagnosticFieldGuide from "./components/DiagnosticFieldGuide";

/* OPTIONAL */
import RackOverview from "./components/RackOverview";

import Footer from "./components/Footer";
import Security from "./components/Security";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Over />

      {/* WHAT IS WLC */}
      
      <Ecosystem />

      {/* HOW WLC WORKS */}
      <Architecture />
      <WlanDeployment />
      <WorkingProcess />
      <ApJoin />
      <Capwap />

      {/* NETWORK COMMUNICATION */}
      <NetworkLines />
      <WlcPorts />
      <Protocols />

      {/* ENTERPRISE FEATURES */}
      <Mobility />
      <MediaResources />
      <Security/>
      <HighAvailibility />
      <Advantages />

      {/* TROUBLESHOOTING */}
      <Troubleshooting />
      <DiagnosticFieldGuide />

      {/* OPTIONAL */}
      <RackOverview />

      <Footer />
    </>
  );
}

export default App;