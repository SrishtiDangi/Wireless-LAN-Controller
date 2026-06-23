import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaCogs,
  FaWifi,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaBroadcastTower,
  FaServer,
} from "react-icons/fa";

function Advantages() {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/advantages")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const iconMap = {
    management: <FaCogs size={30} />,
    roaming: <FaWifi size={30} />,
    security: <FaShieldAlt size={30} />,
    scale: <FaExpandArrowsAlt size={30} />,
    rf: <FaBroadcastTower size={30} />,
    availability: <FaServer size={30} />,
  };

  if (!data) return null;

  return (
    <section id="advantages" style={{ padding: "70px 0" }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
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
              marginTop: "8px",
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
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "22px",
          }}
        >
          {data.items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              style={{
                background: item.color,
                border: `2px solid ${item.border}`,
                borderRadius: "20px",
                padding: "24px",
                textAlign: "center",
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.08)",
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
                  marginBottom: "15px",
                  color: "#2C3E50",
                }}
              >
                {iconMap[item.icon]}
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
      {selected && (
        <div
        onClick={() => setSelected(null)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
        >
          <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#fff",
            width: "90%",
            maxWidth: "600px",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
          }}
          >
            <h2
            style={{
              color: "#2C3E50",
              marginBottom: "15px",
            }}
            >
              {selected.title}
            </h2>
            <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
            >
              {selected.desc}
              </p>
              <button
              onClick={() => setSelected(null)}
              style={{
                background: "#F8C8DC",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "700",
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

export default Advantages;