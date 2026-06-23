import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  FaServer,
  FaPhoneAlt,
  FaCloud,
  FaGlobe,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function EcosystemCard({ bg, icon, title, onClick, }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}

      style={{
        background: bg,
        padding: hover ? "18px" : "16px",
        borderRadius: "16px",
        textAlign: "center",
        minWidth: "160px",
        boxShadow: hover
          ? "0 15px 30px rgba(0,0,0,0.15)"
          : "0 10px 20px rgba(0,0,0,0.08)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.25s ease",
        fontWeight: "700",
        color: "#2C3E50",
        cursor: "pointer",
      }}
    >
      {icon}
      <div style={{ marginTop: "8px" }}>{title}</div>
    </div>
  );
}

function Ecosystem() {
  const [ecosystem, setEcosystem] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/ecosystem")
      .then((res) => res.json())
      .then((data) => setEcosystem(data))
      .catch((err) => console.log(err));
  }, []);

  if (!ecosystem) return null;

  const iconMap = {
    controller: <FaServer size={28} />,
    ap: <FaCloud size={28} />,
    client: <FaPhoneAlt size={28} />,
    security: <FaServer size={28} />,
    network: <FaGlobe size={28} />,
    guest: <FaCloud size={28} />,
  };

  return (
    <section id="ecosystem" style={{ padding: "60px 0" }}>
      <Reveal>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "800",
              color: "#2C3E50",
              marginBottom: "10px",
            }}
          >
            {ecosystem.title}
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {ecosystem.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* TOP */}
          <EcosystemCard
            bg={ecosystem.nodes[0].color}
            icon={iconMap[ecosystem.nodes[0].icon]}
            title={ecosystem.nodes[0].title}
            onClick={() => setSelectedNode(ecosystem.nodes[0])}

          />

          {/* MIDDLE */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EcosystemCard
              bg={ecosystem.nodes[1].color}
              icon={iconMap[ecosystem.nodes[1].icon]}
              title={ecosystem.nodes[1].title}
              onClick={() => setSelectedNode(ecosystem.nodes[1])}
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              onClick={() => setSelectedNode(ecosystem.nodes[2])}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background:
                  "linear-gradient(135deg,#F8C8DC,#E8DFF5)",
                padding: "24px",
                cursor: "pointer",
                borderRadius: "20px",
                minWidth: "180px",
                textAlign: "center",
                border: "2px solid #E91E63",
                boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
              }}
            >
              {iconMap[ecosystem.nodes[2].icon]}

              <h3
                style={{
                  margin: "10px 0 5px",
                  fontSize: "18px",
                }}
              >
                {ecosystem.nodes[2].title}
              </h3>
            </motion.div>

            <EcosystemCard
              bg={ecosystem.nodes[3].color}
              icon={iconMap[ecosystem.nodes[3].icon]}
              title={ecosystem.nodes[3].title}
              onClick={() => setSelectedNode(ecosystem.nodes[3])}
            />
          </div>

          {/* LOWER */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <EcosystemCard
              bg={ecosystem.nodes[4].color}
              icon={iconMap[ecosystem.nodes[4].icon]}
              title={ecosystem.nodes[4].title}
              onClick={() => setSelectedNode(ecosystem.nodes[4])}
            />

            <EcosystemCard
              bg={ecosystem.nodes[5].color}
              icon={iconMap[ecosystem.nodes[5].icon]}
              title={ecosystem.nodes[5].title}
              onClick={() => setSelectedNode(ecosystem.nodes[5])}
            />
          </div>
        </div>
      </Reveal>
      {selectedNode && (
        <div
          onClick={() => setSelectedNode(null)}
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
              width: "650px",
              maxWidth: "92%",
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
              {selectedNode.title}
            </h2>

            <p
              style={{
                color: "#64748B",
                marginBottom: "20px",
              }}
            >
              {selectedNode.desc}
            </p>

            <ul
              style={{
                color: "#334155",
                lineHeight: "1.9",
              }}
            >
              {selectedNode.details?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedNode(null)}
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
  );
}

export default Ecosystem;