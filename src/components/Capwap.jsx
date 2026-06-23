import Reveal from "./Reveal";
import {
  FaWifi,
  FaSearch,
  FaNetworkWired,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function CAPWAP() {
  const [data, setData] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/capwap")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) return null;

  const iconMap = {
    ap: <FaWifi />,
    discover: <FaSearch />,
    join: <FaNetworkWired />,
    download: <FaDownload />,
    ready: <FaCheckCircle />,
  };

  return (
    <Reveal>
      <section
        id="capwap"
        style={{
          padding: "70px 0",
        }}
      >
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
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
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
                  width: "150px",
                  minHeight: "150px",
                  background: step.color,
                  border: `2px solid ${step.border}`,
                  borderRadius: "18px",
                  padding: "16px",
                  textAlign: "center",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
                  transition: "0.3s",
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
                <div
                  style={{
                    fontSize: "30px",
                    color: "#2C3E50",
                    marginBottom: "10px",
                  }}
                >
                  {iconMap[step.icon]}
                </div>

                <h4
                  style={{
                    color: "#2C3E50",
                    fontWeight: "800",
                    fontSize: "15px",
                  }}
                >
                  {step.title}
                </h4>

                <p
                  style={{
                    fontSize: "12px",
                    color: "#555",
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
                    margin: "0 8px",
                    color: "#34495E",
                    fontWeight: "800",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
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
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "600px",
                maxWidth: "90%",
                background:
                  "linear-gradient(135deg,#ffffff,#f8fafc)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.25)",
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
                  color: "#64748B",
                  marginBottom: "20px",
                }}
              >
                {selectedStep.desc}
              </p>

              <ul
                style={{
                  lineHeight: "1.9",
                  color: "#334155",
                }}
              >
                {selectedStep.details?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedStep(null)}
                style={{
                  marginTop: "20px",
                  padding: "10px 18px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#2C3E50",
                  color: "white",
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

export default CAPWAP;