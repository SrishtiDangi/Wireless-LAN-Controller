import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";

function RackComparison() {
  return (
    <section style={{ padding: "50px 0" }}>

      {/* HEADER (FIXED SAME STYLE AS ALL SECTIONS) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "40px",
          color: "#34495E",
        }}
      >
        <FaServer size={28} />
        <h2 style={{ fontSize: "22px", fontWeight: "800" }}>
          Rack Comparison
        </h2>
      </div>

      {/* MAIN CONTAINER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >

        {/* RACK A */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "300px",
            background: "linear-gradient(135deg, #FDEBD0, #FFF3E0)",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            border: "2px solid #F5CBA7",
            textAlign: "center",
          }}
        >
          <FaServer size={35} color="#B9770E" />

          <h3 style={{ marginTop: "10px", color: "#7E5109" }}>
            Rack A{" "}
            <span
              style={{
                fontSize: "12px",
                background: "#F39C12",
                color: "white",
                padding: "3px 8px",
                borderRadius: "10px",
                marginLeft: "6px",
              }}
            >
              Rank A
            </span>
          </h3>

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {["Voice Gateway", "CMS", "2 PBX", "16 PRI Lines"].map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid #F5CBA7",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* VS */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            padding: "10px 16px",
            borderRadius: "50%",
            background: "#f4f4f4",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          VS
        </motion.div>

        {/* RACK B */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            width: "300px",
            background: "linear-gradient(135deg, #D6EAF8, #EBF5FB)",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
            border: "2px solid #85C1E9",
            textAlign: "center",
          }}
        >
          <FaServer size={35} color="#1F618D" />

          <h3 style={{ marginTop: "10px", color: "#1B4F72" }}>
            Rack B{" "}
            <span
              style={{
                fontSize: "12px",
                background: "#3498DB",
                color: "white",
                padding: "3px 8px",
                borderRadius: "10px",
                marginLeft: "6px",
              }}
            >
              Rank B
            </span>
          </h3>

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {["Voice Gateway", "2 PBX", "16 PRI Lines"].map((item, i) => (
              <span
                key={i}
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid #85C1E9",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default RackComparison;