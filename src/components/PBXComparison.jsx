import { motion } from "framer-motion";
import { FaPhone, FaCloud } from "react-icons/fa";

function PBXComparison() {
  return (
    <section style={{ padding: "50px 0" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "35px",
          color: "#34495E",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "800" }}>
          PBX vs CUCM
        </h2>
      </div>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* PBX */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "340px",
            background: "#FDEBD0",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            border: "2px solid #F5CBA7",
            textAlign: "center",
          }}
        >
          <FaPhone size={40} color="#B9770E" />

          <h3 style={{ margin: "12px 0", color: "#7E5109", fontSize: "20px" }}>
            Traditional PBX
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "Hardware Based",
              "Limited Scalability",
              "Basic Availability",
              "Manual Expansion",
              "Higher Maintenance",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.7)",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "#5D4037",
                  border: "1px solid #F5CBA7",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CUCM */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "340px",
            background: "#D6EAF8",
            borderRadius: "16px",
            padding: "25px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            border: "2px solid #85C1E9",
            textAlign: "center",
          }}
        >
          <FaCloud size={40} color="#1B4F72" />

          <h3 style={{ margin: "12px 0", color: "#1B4F72", fontSize: "20px" }}>
            CUCM
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "IP Based Communication",
              "Highly Scalable",
              "Redundant Architecture",
              "Centralized Management",
              "Enterprise Ready",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.7)",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "#1B4F72",
                  border: "1px solid #85C1E9",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PBXComparison;