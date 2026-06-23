import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaLock,
  FaUserShield,
  FaKey,
  FaDatabase,
  FaServer,
  FaNetworkWired
} from "react-icons/fa";

function Security() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const iconMap = {
    lock: <FaLock size={28} />,
    shield: <FaUserShield size={28} />,
    key: <FaKey size={28} />,
    database: <FaDatabase size={28} />,
    server: <FaServer size={28} />,
    network: <FaNetworkWired size={28} />,
  };

  // ✅ FETCH BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/api/security")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Security Features...
      </section>
    );
  }

  const normal = (borderColor) => ({
    transform: "translateY(0) scale(1)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    border: `2px solid ${borderColor}`,
  });

  const hover = (borderColor) => ({
    transform: "translateY(-10px) scale(1.03)",
    boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
    border: `2px solid ${borderColor}`,
  });

  const active = (borderColor) => ({
    transform: "translateY(-2px) scale(0.98)",
    boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
    border: `2px solid ${borderColor}`,
  });

  return (
    <section style={{ padding: "60px 0" }} id="security">

      {/* HEADER */}
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#2C3E50",
            }}
          >
            {data.title}
          </h2>
        </div>
      </Reveal>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {data.items.map((item, i) => (
          <Reveal key={i}>
            <div
              onClick={() => setSelectedItem(item)}
              style={{
                background: item.color,
                borderRadius: "18px",
                padding: "22px",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.25s ease",
                ...normal(item.border),
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hover(item.border));
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, normal(item.border));
              }}
              onMouseDown={(e) => {
                Object.assign(e.currentTarget.style, active(item.border));
              }}
              onMouseUp={(e) => {
                Object.assign(e.currentTarget.style, hover(item.border));
              }}
            >
              <div style={{ color: "#2C3E50" }}>
                {iconMap[item.icon]}
              </div>

              <h3
                style={{
                  color: "#2C3E50",
                  marginTop: "12px",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#555",
                  fontSize: "14px",
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

export default Security;