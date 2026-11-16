import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import {
  FaPlug,
  FaSearch,
  FaLink,
  FaBroadcastTower,
  FaUserShield,
  FaExchangeAlt,
} from "react-icons/fa";

function WorkingProcess() {
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    fetch("https://wireless-lan-controller.onrender.com/api/workingProcess")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Working Process...
      </section>
    );
  }

  const icons = [
    <FaPlug size={26} />,
    <FaSearch size={26} />,
    <FaLink size={26} />,
    <FaBroadcastTower size={26} />,
    <FaUserShield size={26} />,
    <FaExchangeAlt size={26} />,
  ];
  const arrowAnimation = `
  @keyframes arrowMove {
            0% { transform: translateX(-4px); opacity: 0.4; }
            50% { transform: translateX(6px); opacity: 1; }
            100% { transform: translateX(12px); opacity: 0.4; }
            }
            `;

  return (
    <section
      id="working-process"
      style={{
        padding: "70px 0",
      }}
    >
      <style>{arrowAnimation}</style>
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
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
            alignItems: "center",
          }}
        >
          {data.steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(step)}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "220px",
                  background: step.color,
                  border: `2px solid ${step.border}`,
                  borderRadius: "20px",
                  padding: "20px",
                  textAlign: "center",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
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
                <div
                  style={{
                    marginBottom: "12px",
                    color: "#2C3E50",
                  }}
                >
                  {icons[index]}
                </div>

                <h3
                  style={{
                    color: "#2C3E50",
                    fontSize: "17px",
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

              {index !== data.steps.length - 1 && (
                <div
                  style={{
                    fontSize: "28px",
                    margin: "0 12px",
                    color: "#5D6D7E",
                    fontWeight: "700",
                    animation: "arrowMove 1.5s infinite ease-in-out",
                  }}
                >
                  →
                </div>
              )}
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

export default WorkingProcess;