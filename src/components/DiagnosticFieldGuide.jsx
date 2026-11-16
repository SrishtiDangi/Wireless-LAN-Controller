import Reveal from "./Reveal";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
function FlowCard({
  title,
  start,
  steps,
  result,
  color,
  border,
}) {
  return (
    <div
      style={{
        flex: "1 1 320px",
        maxWidth: "380px",
        background: color,
        borderRadius: "20px",
        padding: "22px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
        border: `2px solid ${border}`,
        transition: "all 0.3s ease",
        cursor: "pointer",

      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.08)";
      }}
    >
      <h3
        style={{
          marginTop: 0,
          color: "#333f4a",
          fontSize: "18px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {title}
      </h3>

      {/* START */}
      <div
        style={{
          background: "rgba(255,255,255,0.65)",
          border: "2px solid rgba(255,255,255,0.8)",
          color: "#2C3E50",
          padding: "12px",
          borderRadius: "12px",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        {start}
      </div>

      {steps.map((step, index) => (
        <div key={index}>
          <div className="flowArrow">
            ↓
          </div>

          <div
            style={{
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(255,255,255,0.75)",
              borderRadius: "12px",
              padding: "12px",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                color: "#2C3E50",
                marginBottom: "10px",
              }}
            >
              {step.question}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#D35400",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              <FaTimesCircle />
              NO: {step.action}
            </div>
          </div>
        </div>
      ))}

      <div className="flowArrow">
        ↓
      </div>

      <div
        style={{
          background: "linear-gradient(135deg,#D5F5E3,#EAFAF1)",
          border: "2px solid #2ECC71",
          borderRadius: "14px",
          padding: "14px",
          textAlign: "center",
          color: "#27AE60",
          fontWeight: "800",
        }}
      >
        <FaCheckCircle
          style={{
            marginRight: "8px",
          }}
        />
        {result}
      </div>
    </div>
  );
}

function DiagnosticFieldGuide() {
  const [guide, setGuide] = useState(null);
  useEffect(() => {
    fetch("https://wireless-lan-controller.onrender.com/api/diagnosticFieldGuide")
      .then((res) => res.json())
      .then((data) => setGuide(data))
      .catch((err) => console.log(err));
  }, []);
  if (!guide) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Diagnostic Guide...
      </section>
    );
  }

  return (
    <section
      id="diagnostic-guide"
      style={{
        padding: "70px 0",
      }}
    >
      <style>
        {`
    .flowArrow{
      text-align:center;
      font-size:28px;
      margin:14px 0;
      color:#2C3E50;
      font-weight:700;
      animation:flowMove 1.3s infinite ease-in-out;
    }

    @keyframes flowMove{
      0%{
        transform:translateY(-4px);
        opacity:0.4;
      }
      50%{
        transform:translateY(6px);
        opacity:1;
      }
      100%{
        transform:translateY(12px);
        opacity:0.4;
      }
    }
  `}
      </style>
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
              marginBottom: "10px",
            }}
          >
            {guide.title}
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              margin: 0,
            }}
          >
            {guide.description}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {guide.flows.map((flow, index) => (
            <FlowCard key={index} {...flow} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default DiagnosticFieldGuide;