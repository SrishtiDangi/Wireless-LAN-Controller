import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";
import { useState, useEffect } from "react";
import voip from "../assets/voip.png";
import phone from "../assets/phone.png";
import cloud from "../assets/cloud.png";

function Overview() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/overview")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const imageMap = {
    voip,
    phone,
    cloud,
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section 
    id="overview"
    style={{ padding: "40px 0" }}>

      {/* HEADER (same style everywhere) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px",
          color: "#34495E",
          textAlign: "center",
        }}
      >
        <FaCloud size={28} />
        <h2 style={{ fontSize: "22px", fontWeight: "800" }}>
          CUCM Core Services
        </h2>
      </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {services.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.06 }}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              cursor: "pointer",
              background: item.color,
              border: `2px solid ${item.border}`,
              transition: "0.3s",
            }}
          >
            {/* IMAGE WRAPPER */}
            <div style={{ position: "relative" }}>
              <img
                src={imageMap[item.image]}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "contain",
                  padding: "10px",
                  background: "white",
                  background: "#f8fafc",
                  padding: "12px",
                  display: "block",
                }}
              />

              {/* smooth fade */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "20px",
                  borderRadius: "0 0 14px 14px",
                  background: "linear-gradient(to bottom, transparent, #fff)",
                }}
              />
            </div>

            {/* CONTENT */}
            <div style={{ padding: "15px" }}>
              <h3
                style={{
                  margin: "0 0 8px 0",
                  color: "#1B4F72",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  color: "#555",
                  lineHeight: "1.4",
                }}
              >
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Overview;