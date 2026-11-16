import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaServer,
  FaWifi,
  FaNetworkWired,
  FaLock,
  FaGlobe,
  FaDatabase,
} from "react-icons/fa";

function WLCPorts() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    fetch("https://wireless-lan-controller.onrender.com/api/wlcPorts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading WLC Ports...
      </section>
    );
  }

  const icons = [
    <FaServer size={28} />,
    <FaWifi size={28} />,
    <FaNetworkWired size={28} />,
    <FaLock size={28} />,
    <FaDatabase size={28} />,
    <FaGlobe size={28} />,
  ];

  return (
    <section
      id="wlc-ports"
      style={{
        padding: "70px 0",
      }}
    >
      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
            }}
          >
            {data.title}
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              marginTop: "10px",
            }}
          >
            {data.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {data.ports.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              style={{
                background: item.color,
                border: `2px solid ${item.border}`,
                borderRadius: "20px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  marginBottom: "14px",
                  color: "#2C3E50",
                }}
              >
                {icons[index]}
              </div>

              <h3
                style={{
                  color: "#2C3E50",
                  fontSize: "18px",
                  fontWeight: "800",
                  marginBottom: "10px",
                }}
              >
                {item.title}
              </h3>

              <div
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#fff",
                  fontWeight: "700",
                  color: "#34495E",
                  marginBottom: "12px",
                  fontSize: "13px",
                }}
              >
                {item.port}
              </div>

              <p
                style={{
                  color: "#555",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
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

            <div
              style={{
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "#EDF2F7",
                fontWeight: "700",
                color: "#34495E",
                marginBottom: "15px",
              }}
            >
              {selectedItem.port}
            </div>

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

export default WLCPorts;