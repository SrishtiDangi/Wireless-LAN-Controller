import Reveal from "./Reveal";
import { motion } from "framer-motion";
import {
  FaServer,
  FaPhoneAlt,
  FaCloud,
  FaGlobe,
} from "react-icons/fa";
import { useEffect, useState } from "react";

function Ecosystem() {
  const [ecosystem, setEcosystem] = useState([]);
  useEffect(() => {
  fetch("http://localhost:5000/api/ecosystem")
    .then((res) => res.json())
    .then((data) => setEcosystem(data))
    .catch((err) => console.log(err));
  }, []);
  const cardStyle = (bg) => ({
    background: bg,
    padding: "16px",
    borderRadius: "16px",
    textAlign: "center",
    minWidth: "140px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    fontWeight: "700",
    color: "#2C3E50",
  });
  const iconMap = {
    cloud: <FaCloud size={28} />,
    phone: <FaPhoneAlt size={28} />,
    server: <FaServer size={28} />,
    globe: <FaGlobe size={28} />,
};

  return (
    <section 
      style={{ padding: "60px 0" }}
      id="ecosystem"
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
              fontWeight: "800",
              color: "#2C3E50",
              marginBottom: "10px",
            }}
          >
            CUCM Ecosystem
          </h2>

          <p
            style={{
              color: "#5D6D7E",
              fontSize: "14px",
              margin: 0,
            }}
          >
            How CUCM integrates enterprise communication services
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {/* JABBER */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={cardStyle("#E8F8F5")}
          >
            {ecosystem[0] && (
                <>
                {iconMap[ecosystem[0].icon]}
                <div style={{ marginTop: "8px" }}>
                    {ecosystem[0].title}
                </div>
                </>
            )}
          </motion.div>

          {/* PHONE - CUCM - UNITY */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={cardStyle("#D6EAF8")}
            >
              {ecosystem[1] && (
                <>
                {iconMap[ecosystem[1].icon]}
                <div style={{ marginTop: "8px" }}>
                    {ecosystem[1].title}
                </div>
                </>
            )}
            </motion.div>

            {/* CENTER CUCM */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              style={{
                background:
                  "linear-gradient(135deg,#F8C8DC,#E8DFF5)",
                padding: "24px",
                borderRadius: "20px",
                minWidth: "180px",
                textAlign: "center",
                border: "2px solid #E91E63",
                position: "relative",
                boxShadow:
                  "0 15px 30px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "120px",
                  background:
                    "rgba(248,200,220,0.45)",
                  filter: "blur(50px)",
                  borderRadius: "50%",
                  top: "-10px",
                  left: "25px",
                  zIndex: -1,
                }}
              />

              <FaServer size={34} />

              <h3
                style={{
                  margin: "10px 0 5px",
                  fontSize: "18px",
                }}
              >
                CUCM
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#555",
                }}
              >
                Central Call Control
              </p>
            </motion.div>

           <motion.div
           whileHover={{ scale: 1.05 }}
           style={cardStyle("#FDEBD0")}
           >
            {ecosystem[2] && (
                <>
                {iconMap[ecosystem[2].icon]}
                <div style={{ marginTop: "8px" }}>
                    {ecosystem[2].title}
                </div>
                </>
            )}
            </motion.div>
          </div>

          {/* EXPRESSWAY + CUBE */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <motion.div
            whileHover={{ scale: 1.05 }}
            style={cardStyle("#D5F5E3")}
            >
                {ecosystem[3] && (
                    <>
                    {iconMap[ecosystem[3].icon]}
                    <div style={{ marginTop: "8px" }}>
                        {ecosystem[3].title}
                    </div>
                    </>
                )}
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.05 }}
            style={cardStyle("#EDE7F6")}
            >
                {ecosystem[4] && (
                    <>
                    {iconMap[ecosystem[4].icon]}
                    <div style={{ marginTop: "8px" }}>
                        {ecosystem[4].title}
                    </div>
                    </>
                )}
            </motion.div>
          </div>

          {/* PSTN */}
          <motion.div
          whileHover={{ scale: 1.05 }}
          style={cardStyle("#F9EBEA")}
          >
            {ecosystem[5] && (
                <>
                {iconMap[ecosystem[5].icon]}
                <div style={{ marginTop: "8px" }}>
                    {ecosystem[5].title}
                </div>
                </>
            )}
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

export default Ecosystem;