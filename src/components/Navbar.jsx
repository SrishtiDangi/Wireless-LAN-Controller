import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("overview");

  const links = [
    { id: "overview", label: "Overview" },
    { id: "architecture", label: "Architecture" },
  
    {id: "protocols", label: "Protocols" },
    
    { id: "media-resources", label: "Services" },
    
    { id: "advantages", label: "Benefits" },  
    { id: "troubleshooting", label: "Troubleshooting" },
    { id: "diagnostic-guide", label: "Diagnostic Guide" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 8%",
        position: "sticky",
        top: 0,
        zIndex: 9999,
        background: "rgba(17,24,39,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
          fontSize: "18px",
          fontWeight: "800",
        }}
      >
        Wireless LAN Controller
      </h2>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {links.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActive(item.id);

              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            style={{
              border: "none",
              cursor: "pointer",
              padding: "8px 12px",
              borderRadius: "8px",
              fontWeight: "600",
              color: active === item.id ? "white" : "#CBD5E1",
              background:
                active === item.id ? "#374151" : "transparent",
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;