import { FaHeadset, FaMicrophone, FaChartBar } from "react-icons/fa";

function CMS() {
  const features = [
    {
      icon: <FaMicrophone size={38} />,
      title: "Call Recording",
      desc: "Records customer interactions.",
      bg: "#FDEBD0",
      border: "#B9770E",
      color: "#7E5109",
    },
    {
      icon: <FaHeadset size={38} />,
      title: "Monitoring",
      desc: "Real-time supervision and support.",
      bg: "#D6EAF8",
      border: "#2E86C1",
      color: "#1B4F72",
    },
    {
      icon: <FaChartBar size={38} />,
      title: "Reporting",
      desc: "Detailed analytics and reports.",
      bg: "#E8F4F8",
      border: "#7D3C98",
      color: "#4A235A",
    },
  ];

  return (
    <section style={{ padding: "40px 0" }}>

      {/* TITLE */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2C3E50",
          fontSize: "24px",
          fontWeight: "800",
        }}
      >
        CMS Integration
      </h2>

      {/* GRID WRAPPER */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >

        {/* TOP ROW (2 CARDS) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 250px)",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {features.slice(0, 2).map((item, i) => (
            <div
              key={i}
              className="card"
              style={{
                background: item.bg,
                border: `2px solid ${item.border}`,
                borderRadius: "14px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ color: item.color, marginBottom: "10px" }}>
                {item.icon}
              </div>

              <h3
                style={{
                  marginBottom: "8px",
                  color: item.color,
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                {item.title}
              </h3>

              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM CENTER CARD */}
        <div
          className="card"
          style={{
            background: features[2].bg,
            border: `2px solid ${features[2].border}`,
            borderRadius: "14px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
            width: "250px",
          }}
        >
          <div style={{ color: features[2].color, marginBottom: "10px" }}>
            {features[2].icon}
          </div>

          <h3
            style={{
              marginBottom: "8px",
              color: features[2].color,
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            {features[2].title}
          </h3>

          <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
            {features[2].desc}
          </p>
        </div>

      </div>
    </section>
  );
}

export default CMS;