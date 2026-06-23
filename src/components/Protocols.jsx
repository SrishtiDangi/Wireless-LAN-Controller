import { useState, useEffect } from "react";
import { FaNetworkWired } from "react-icons/fa";
import Reveal from "./Reveal";

function Protocols() {
  const [data, setData] = useState(null);
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/protocols")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Protocols...
      </section>
    );
  }

  return (
    <Reveal>
      <section id="protocols" style={{ padding: "70px 0" }}>
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "15px",
            color: "#2C3E50",
          }}
        >
          <FaNetworkWired size={28} />

          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              margin: 0,
            }}
          >
            {data.title}
          </h2>
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#5D6D7E",
            marginBottom: "40px",
          }}
        >
          {data.subtitle}
        </p>

        {/* PROTOCOL CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {data.protocols.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedProtocol(item)}
              style={{
                background: item.color,
                border: `2px solid ${item.border}`,
                borderRadius: "18px",
                padding: "20px",
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.08)",
                transition: "0.3s ease",
                cursor: "pointer",
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
              <h3
                style={{
                  color: "#2C3E50",
                  fontSize: "18px",
                  fontWeight: "800",
                  marginBottom: "12px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  color: "#555",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        {selectedProtocol && (
          <div
            onClick={() => setSelectedProtocol(null)}
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
                {selectedProtocol.name}
              </h2>

              <p
                style={{
                  color: "#666",
                  marginBottom: "20px",
                }}
              >
                {selectedProtocol.desc}
              </p>

              <ul
                style={{
                  lineHeight: "1.9",
                  color: "#444",
                  paddingLeft: "22px",
                }}
              >
                {selectedProtocol.details?.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedProtocol(null)}
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
    </Reveal>
  );
}

export default Protocols;