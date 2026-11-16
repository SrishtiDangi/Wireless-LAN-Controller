import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaSearch,
  FaServer,
  FaBroadcastTower,
  FaLaptop,
  FaChartLine,
} from "react-icons/fa";

function WLANDeployment() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    fetch("https://wireless-lan-controller.onrender.com/api/wlanDeployment")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading WLAN Deployment...
      </section>
    );
  }

  const icons = [
    <FaSearch size={28} />,
    <FaServer size={28} />,
    <FaBroadcastTower size={28} />,
    <FaLaptop size={28} />,
    <FaChartLine size={28} />,
  ];

  return (
    <section
      id="wlan-deployment"
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
              marginBottom: "10px",
            }}
          >
            {data.title}
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              margin: 0,
            }}
          >
            {data.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {data.steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(step)}
              style={{
                width: "240px",
                background: step.color,
                border: `2px solid ${step.border}`,
                borderRadius: "20px",
                padding: "22px",
                textAlign: "center",
                boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
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
                  "0 12px 28px rgba(0,0,0,0.08)";
              }}
            >
              <div
                style={{
                  marginBottom: "15px",
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
                {step.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {step.desc}
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

export default WLANDeployment;