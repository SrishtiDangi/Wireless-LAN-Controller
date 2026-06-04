import { motion } from "framer-motion";
import { FaServer } from "react-icons/fa";
function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background:"linear-gradient(135deg,#F8C8DC,#D6EAF8,#E8DFF5)",
        borderRadius:"40px",
        padding: "0 10%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
        }}
        >
            <FaServer size={60} />
        </div>
        <h1
          style={{
            fontSize: "4rem",
            lineHeight:"1.1",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Cisco Unified Communications Manager
        </h1>

        <p
        style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
            lineHeight: "1.8",
        }}
        >
            Enterprise VoIP Infrastructure Dashboard showcasing
            cluster architecture, PRI connectivity, rack deployment
            and call routing workflow.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;