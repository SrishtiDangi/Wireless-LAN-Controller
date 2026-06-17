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

  useEffect(() => {
    fetch("http://localhost:5000/api/workingProcess")
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

  return (
    <section
      id="working-process"
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
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default WorkingProcess;