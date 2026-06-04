function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 8%",
        position: "sticky",
        top: "0",
        zIndex: 100,
        background: "#111827",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        CUCM Enterprise Dashboard
      </h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
        }}
      >
        <a
          href="#home"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </a>

        <a
          href="#architecture"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Architecture
        </a>

        <a
          href="#callflow"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Call Flow
        </a>

        <a
          href="#advantages"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Advantages
        </a>
      </div>
    </nav>
  );
}

export default Navbar;