import { FaPhoneAlt } from "react-icons/fa";

function CallFlow() {
  const flow = [
    { name: "Telecom", bg: "#EAF2F8", size: "15px" },
    { name: "Voice Gateway", bg: "#FDEBD0", size: "15px" },
    { name: "CUCM", bg: "#D6EAF8", size: "16px", weight: "800" },
    { name: "PBX / IP Phone", bg: "#E8F4F8", size: "14px" },
    { name: "CMS", bg: "#EDE7F6", size: "14px" },
  ];

  return (
    <section id="callflow" style={{ padding: "40px 0" }}>

      {/* TITLE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px",
          color: "#34495E",
        }}
      >
        <FaPhoneAlt size={30} />
        <h2 style={{ fontSize: "24px", fontWeight: "800" }}>
          Enterprise Call Routing Flow
        </h2>
      </div>

      {/* FLOW */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        {flow.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* NODE */}
            <div
              style={{
                background: item.bg,
                border: "1px solid #D5DBDB",
                padding: "16px 22px",
                borderRadius: "14px",
                minWidth: "220px",
                textAlign: "center",
                color: "#2C3E50",
                fontSize: item.size,
                fontWeight: item.weight || "600",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
              }}
            >
              {item.name}
            </div>

            {/* ARROW */}
            {index !== flow.length - 1 && (
              <div className="flowArrow">↓</div>
            )}
          </div>
        ))}
      </div>

      {/* ARROW ANIMATION */}
      <style>
        {`
          .flowArrow {
            font-size: 18px;
            color: #2C3E50;
            animation: moveDown 1.2s infinite ease-in-out;
          }

          @keyframes moveDown {
            0% { transform: translateY(-5px); opacity: 0.3; }
            50% { transform: translateY(5px); opacity: 1; }
            100% { transform: translateY(10px); opacity: 0.3; }
          }
        `}
      </style>

    </section>
  );
}

export default CallFlow;