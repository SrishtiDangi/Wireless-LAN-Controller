import Reveal from "./Reveal";
import { useState, useEffect } from "react";
import {
  FaPowerOff,
  FaNetworkWired,
  FaSearch,
  FaBroadcastTower,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

function AccessPointJoin() {
  const [selectedStep, setSelectedStep] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/apJoin")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const iconMap = {
    power: <FaPowerOff />,
    ip: <FaNetworkWired />,
    discovery: <FaSearch />,
    capwap: <FaBroadcastTower />,
    download: <FaDownload />,
    success: <FaCheckCircle />,
  };

  if (!data) return null;

  return (
    <section id="ap-join" style={{ padding: "70px 0" }}>
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
            }}
          >
            {data.title}
          </h2>

          <p
            style={{
              color: "#5D6D7E",
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
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {data.steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setSelectedStep(step)}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "170px",
                  minHeight: "180px",
                  background: step.color,
                  border: `2px solid ${step.border}`,
                  borderRadius: "20px",
                  padding: "18px",
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
                    fontSize: "30px",
                    marginBottom: "12px",
                    color: "#2C3E50",
                  }}
                >
                  {iconMap[step.icon]}
                </div>

                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "800",
                    color: "#2C3E50",
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#555",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {index !== data.steps.length - 1 && (
                <div
                  style={{
                    fontSize: "28px",
                    margin: "0 10px",
                    color: "#34495E",
                    fontWeight: "800",
                    animation:
                      "apArrow 1.2s infinite ease-in-out",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      <style>
        {`
          @keyframes apArrow {
            0% { transform: translateX(-4px); opacity: 0.4; }
            50% { transform: translateX(6px); opacity: 1; }
            100% { transform: translateX(12px); opacity: 0.4; }
          }
        `}
      </style>
      {selectedStep && (
        <div
          onClick={() => setSelectedStep(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "700px",
              maxWidth: "95%",
              background: "#fff",
              borderRadius: "24px",
              padding: "30px",
              border: `3px solid ${selectedStep.border}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <h2
              style={{
                color: "#2C3E50",
                marginBottom: "15px",
              }}
            >
              {selectedStep.title}
            </h2>

            <p
              style={{
                color: "#555",
                marginBottom: "20px",
              }}
            >
              {selectedStep.desc}
            </p>

            <h3
              style={{
                color: "#2C3E50",
                marginBottom: "10px",
              }}
            >
              Detailed Process
            </h3>

            <ul>
              {selectedStep.details?.map((item, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "10px",
                    color: "#555",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3
              style={{
                color: "#2C3E50",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Useful Commands
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {selectedStep.commands?.map((cmd, i) => (
                <span
                  key={i}
                  style={{
                    background: "#F4F4F4",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    fontFamily: "monospace",
                  }}
                >
                  {cmd}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedStep(null)}
              style={{
                marginTop: "25px",
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

export default AccessPointJoin;