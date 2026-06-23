import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaNetworkWired,
  FaHdd,
  FaCloud,
  FaDatabase,
  FaUserShield,
} from "react-icons/fa";

function RackComparison() {
  const [rackData, setRackData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/rack")
      .then((res) => res.json())
      .then((data) => setRackData(data))
      .catch((err) => console.log(err));
  }, []);

  const iconMap = {
    "Wireless LAN Controller": <FaServer size={30} />,
    "Access Points": <FaNetworkWired size={30} />,
    "Core Switch": <FaHdd size={30} />,
    "Distribution Switch": <FaCloud size={30} />,
    "DHCP Server": <FaDatabase size={30} />,
    "Authentication Server": <FaUserShield size={30} />,
  };

  // 🔥 COLORS TAKEN STYLE LIKE YOUR ECOSYSTEM
  const colorPalette = [
    "#F8C8DC", // pink
    "#E8DFF5", // lavender
    "#D6EAF8", // blue
    "#D5F5E3", // green
    "#FBE5D6", // peach
    "#ebcae8", // yellow
  ];

  if (!rackData) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Infrastructure...
      </section>
    );
  }

  return (
    <section id="rack-overview" style={{ padding: "70px 0" }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: "900", color: "#2C3E50" }}>
          {rackData.title}
        </h2>
      </div>

      <p style={{ textAlign: "center", color: "#5D6D7E", marginBottom: "40px" }}>
        {rackData.subtitle}
      </p>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {rackData.items.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedItem(item)}
            whileHover={{ y: -8 }}
            style={{
              background: colorPalette[index % colorPalette.length],
              borderRadius: "18px",
              padding: "22px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              border: "2px solid rgba(0,0,0,0.05)",
            }}
          >
            {/* ICON */}
            <div style={{ marginBottom: "12px", color: "#2C3E50" }}>
              {iconMap[item.title] || <FaServer size={30} />}
            </div>

            {/* TITLE */}
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "800",
                color: "#2C3E50",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            {/* DESC */}
            <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "600px",
              maxWidth: "92%",
              background: "#fff",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
            }}
          >
            <h2
              style={{
                color: "#2C3E50",
                marginBottom: "12px",
              }}
            >
              {selectedItem.title}
            </h2>

            <p
              style={{
                color: "#666",
                marginBottom: "20px",
              }}
            >
              {selectedItem.desc}
            </p>

            <ul
              style={{
                lineHeight: "1.9",
                color: "#444",
                paddingLeft: "22px",
              }}
            >
              {selectedItem.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedItem(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                background: "#2C3E50",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default RackComparison;