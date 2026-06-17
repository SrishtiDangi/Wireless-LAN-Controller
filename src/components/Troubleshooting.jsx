import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { FaTools } from "react-icons/fa";

function Troubleshooting() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/troubleshooting")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Troubleshooting...
      </section>
    );
  }

  return (
    <Reveal>
      <section id="troubleshooting" style={{ padding: "70px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "15px",
          }}
        >
          <FaTools size={24} color="#2C3E50" />

          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {data.items.map((item, index) => {
            const colors = [
              {
                bg: "linear-gradient(135deg,#D6EAF8,#EEF7FD)",
                border: "#85C1E9",
              },
              {
                bg: "linear-gradient(135deg,#E8DFF5,#F4ECF7)",
                border: "#C39BD3",
              },
              {
                bg: "linear-gradient(135deg,#FBE5D6,#FFF4EC)",
                border: "#E8B89C",
              },
              {
                bg: "linear-gradient(135deg,#D5F5E3,#EAFAF1)",
                border: "#7DCEA0",
              },
            ];
            const color = colors[index % colors.length];
            return (
            <div
            key={index}
            style={{
              background: color.bg,
              border: `2px solid ${color.border}`,
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow ="0 18px 35px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
              "0 10px 20px rgba(0,0,0,0.08)";
            }}
            >
              <h3
              style={{
                color: "#2C3E50",
                fontSize: "17px",
                fontWeight: "800",
                marginBottom: "10px",
                textAlign: "center",
              }}
              >
                {item.title}
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
            );
            })}
        </div>
      </section>
    </Reveal>
  );
}

export default Troubleshooting;