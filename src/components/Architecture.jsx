import Reveal from "./Reveal";
import { FaWifi, FaBroadcastTower } from "react-icons/fa";
import { useEffect, useState } from "react";

function Architecture() {
  const [architecture, setArchitecture] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/architecture")
      .then((res) => res.json())
      .then((data) => {
        console.log("ARCHITECTURE DATA:", data);
        setArchitecture(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!architecture) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Architecture...
      </section>
    );
  }

  return (
    <section
      id="architecture"
      style={{
        padding: "70px 0",
      }}
    >
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <FaWifi size={24} color="#2C3E50" />

          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
            }}
          >
            {architecture?.title}
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#5D6D7E",
          }}
        >
          {architecture?.subtitle}
        </div>
      </Reveal>

      {/* WLC */}
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "320px",
              padding: "22px",
              borderRadius: "20px",
              textAlign: "center",
              background:
                "linear-gradient(135deg,#F8C8DC,#E8DFF5)",
              border: "2px solid #C39BD3",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <FaBroadcastTower
              size={42}
              color="#7D3C98"
            />

            <h3
              style={{
                color: "#2C3E50",
                fontWeight: "800",
              }}
            >
              {architecture?.controller?.title}
            </h3>

            <p
              style={{
                color: "#555",
                fontSize: "13px",
              }}
            >
              {architecture?.controller?.desc}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="wlcArrow">↓</div>

      {/* SERVICES */}
      <Reveal>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {architecture?.components?.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(135deg,#D6EAF8,#EEF7FD)",
                  border: "2px solid #85C1E9",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  color: "#2C3E50",
                  fontWeight: "700",
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </Reveal>

      <div className="wlcArrow">↓</div>

      {/* DEVICES */}
      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {architecture?.devices?.map(
            (device, index) => (
              <div
                key={index}
                style={{
                  background: device?.color,
                  border: `2px solid ${device?.border}`,
                  borderRadius: "20px",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: "#2C3E50",
                    fontWeight: "800",
                  }}
                >
                  {device?.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    fontSize: "13px",
                  }}
                >
                  {device?.desc}
                </p>
              </div>
            )
          )}
        </div>
      </Reveal>

      <style>
        {`
          .wlcArrow{
            text-align:center;
            font-size:28px;
            margin:16px 0;
            color:#2C3E50;
            animation:wlcMove 1.2s infinite;
          }

          @keyframes wlcMove{
            0%{
              transform:translateY(-4px);
              opacity:.3;
            }
            50%{
              transform:translateY(6px);
              opacity:1;
            }
            100%{
              transform:translateY(12px);
              opacity:.3;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Architecture;