import { motion } from "framer-motion";
import { FaPhone, FaUser, FaServer, FaChartBar } from "react-icons/fa";

function Stats() {
  const data = [
    {
      value: "32",
      label: "PRI Lines",
      icon: <FaPhone size={22} />,
      color: "#FDEBD0",
      border: "#F5CBA7",
    },
    {
      value: "4",
      label: "Subscribers",
      icon: <FaUser size={22} />,
      color: "#D6EAF8",
      border: "#85C1E9",
    },
    {
      value: "2",
      label: "TFTP Servers",
      icon: <FaServer size={22} />,
      color: "#E8F8F5",
      border: "#76D7C4",
    },
  ];

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
    <section style={{ padding: "40px 0" }}>

      {/* HEADER (same style as other components) */}
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
        <FaChartBar size={28} />
        <h2 style={{ fontSize: "22px", fontWeight: "800" }}>
          Infrastructure Statistics
        </h2>
      </div>

      {/* CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.08 }}
            style={{
              width: "190px",
              padding: "22px",
              borderRadius: "16px",
              background: `linear-gradient(135deg, ${item.color}, #ffffff)`,
              border: `2px solid ${item.border}`,
              boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {/* ICON */}
            <div style={{ marginBottom: "12px", color: "#2C3E50" }}>
              {item.icon}
            </div>

            {/* VALUE */}
            <h1
              style={{
                margin: "5px 0",
                fontSize: "30px",
                fontWeight: "800",
                color: "#2C3E50",
              }}
            >
              {item.value}
            </h1>

            {/* LABEL */}
            <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}

export default Stats;