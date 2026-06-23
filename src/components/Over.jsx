import { useState, useEffect } from "react";
import Reveal from "./Reveal";

function Over() {
  const [overview, setOverview] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/over")
      .then((res) => res.json())
      .then((data) => setOverview(data))
      .catch((err) => console.log(err));
  }, []);

  if (!overview) return null;

  return (
    <section
      id="overview"
      style={{
        padding: "70px 0",
      }}
    >
      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
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
            {overview.title}
          </h2>

          <p
            style={{
              color: "#7D3C98",
              fontWeight: "700",
              margin: 0,
            }}
          >
            {overview.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            background:
              "linear-gradient(135deg,#F8C8DC,#D6EAF8)",
            borderRadius: "24px",
            padding: "35px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
            marginBottom: "35px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#5D6D7E",
              fontSize: "15px",
              lineHeight: "1.9",
              textAlign: "center",
            }}
          >
            {overview.description}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "22px",
          }}
        >
          {overview.points.map((item, index) => {
            const colors = [
              {
                bg: "linear-gradient(135deg,#FBE5D6,#FFF4EC)",
                border: "#E8B89C",
              },
              {
                bg: "linear-gradient(135deg,#D6EAF8,#EEF7FD)",
                border: "#85C1E9",
              },
              {
                bg: "linear-gradient(135deg,#E8DFF5,#F4ECF7)",
                border: "#C39BD3",
              },
              {
                bg: "linear-gradient(135deg,#D5F5E3,#EAFAF1)",
                border: "#7DCEA0",
              },
            ];

            return (
              <div
                key={index}
                onClick={() => setSelectedPoint(item)}
                style={{
                  background: colors[index].bg,
                  border: `2px solid ${colors[index].border}`,
                  borderRadius: "20px",
                  padding: "24px",
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
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: "12px",
                    color: "#2C3E50",
                    fontSize: "18px",
                    textAlign: "center",
                    fontWeight: "800",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    textAlign: "center",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
      {selectedPoint && (
        <div
          onClick={() => setSelectedPoint(null)}
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
                marginBottom: "15px",
              }}
            >
              {selectedPoint.title}
            </h2>

            <p
              style={{
                color: "#666",
                marginBottom: "20px",
              }}
            >
              {selectedPoint.desc}
            </p>

            <ul
              style={{
                lineHeight: "1.9",
                color: "#444",
                paddingLeft: "22px",
              }}
            >
              {selectedPoint.details?.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedPoint(null)}
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

export default Over;