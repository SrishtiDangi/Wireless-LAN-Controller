import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaWifi,
  FaNetworkWired,
  FaUsers,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";

function Mobility() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const iconMap = {
    wifi: <FaWifi size={30} />,
    network: <FaNetworkWired size={30} />,
    group: <FaUsers size={30} />,
    security: <FaShieldAlt size={30} />,
    globe: <FaGlobe size={30} />,
  };

  // ✅ FETCH BACKEND DATA
  useEffect(() => {
    fetch("http://localhost:5000/api/mobility")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Mobility Features...
      </section>
    );
  }

  return (
    <section style={{ padding: "60px 0" }} id="mobility">

      {/* HEADER */}
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#2C3E50",
              marginBottom: "10px",
            }}
          >
            {data.title}
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {data.subtitle}
          </p>
        </div>
      </Reveal>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {data.items.map((item, index) => (
          <Reveal key={index}>
            <div
              onClick={() => setSelectedItem(item)}
              style={{
                background: item.color,
                border: `2px solid ${item.border}`,
                borderRadius: "18px",
                padding: "22px",
                textAlign: "center",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <div style={{ color: "#2C3E50", marginBottom: "12px" }}>
                {iconMap[item.icon]}
              </div>

              <h3
                style={{
                  margin: "0 0 10px 0",
                  color: "#2C3E50",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#555",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {item.desc}
              </p>
            </div>
          </Reveal>
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

export default Mobility;