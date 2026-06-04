import { FaNetworkWired, FaServer } from "react-icons/fa";

function Architecture() {
  const subscribers = [
    { title: "Subscriber 1", desc: "Call Processing", color: "#D6EAF8", border: "#2E86C1" },
    { title: "Subscriber 2", desc: "Redundancy", color: "#E8F4F8", border: "#7D3C98" },
    { title: "Subscriber 3", desc: "High Availability", color: "#D5F5E3", border: "#1E8449" },
    { title: "Subscriber 4", desc: "Failover Node", color: "#FDEBD0", border: "#B9770E" },
  ];

  return (
    <section style={{ padding: "40px 0" }}>

      {/* HEADER */}
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
        <FaNetworkWired size={28} />
        <h2 style={{ fontSize: "22px", fontWeight: "800" }}>
          Enterprise Cluster Architecture
        </h2>
      </div>

      {/* MAIN WRAPPER (IMPORTANT FIX) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        {/* PUBLISHER */}
        <div
          className="card"
          style={{
            background: "#FADBD8",
            border: "2px solid #C0392B",
            textAlign: "center",
            width: "270px",
            padding: "14px",
          }}
        >
          <FaServer size={38} color="#C0392B" />
          <h3 style={{ margin: "8px 0", fontSize: "18px" }}>
            Publisher Server
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
            Database & Configuration
          </p>
        </div>

        {/* ARROW */}
        <div className="flowLine">↓</div>

        {/* INFRA */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "10px 0",
          }}
        >
          {["MOH 1", "MOH 2", "TFTP 1", "TFTP 2"].map((t, i) => (
            <div
              key={i}
              className="card"
              style={{
                background: "#FDEBD0",
                border: "2px solid #B9770E",
                width: "160px",
                textAlign: "center",
                padding: "12px",
              }}
            >
              <h4 style={{ margin: "5px 0", fontSize: "15px", color: "#7E5109" }}>
                {t}
              </h4>
            </div>
          ))}
        </div>

        {/* ARROW */}
        <div className="flowLine">↓</div>

        {/* SUBSCRIBERS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {subscribers.map((s, i) => (
            <div
              key={i}
              className="card"
              style={{
                background: s.color,
                border: `2px solid ${s.border}`,
                width: "240px",
                textAlign: "center",
                padding: "14px",
              }}
            >
              <h4 style={{ margin: "5px 0", fontSize: "16px", color: "#1B4F72" }}>
                {s.title}
              </h4>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          .flowLine {
            font-size: 20px;
            color: #1B4F72;
            margin: 10px 0;
            animation: move 1.2s infinite ease-in-out;
          }

          @keyframes move {
            0%   { transform: translateY(-4px); opacity: 0.3; }
            50%  { transform: translateY(6px); opacity: 1; }
            100% { transform: translateY(12px); opacity: 0.3; }
          }
        `}
      </style>

    </section>
  );
}

export default Architecture;