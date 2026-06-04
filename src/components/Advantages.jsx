function Advantages() {
  const items = [
    {
      title: "High Availability",
      color: "#D6EAF8",
      border: "#85C1E9",
    },
    {
      title: "Scalability",
      color: "#E8F8F5",
      border: "#76D7C4",
    },
    {
      title: "Redundancy",
      color: "#FDEBD0",
      border: "#F5CBA7",
    },
  ];

  return (
    <section style={{ padding: "50px 0" }}>
      
      {/* HEADER */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "35px",
          fontSize: "24px",
          fontWeight: "800",
          color: "#34495E",
        }}
      >
        Key Business Benefits
      </h2>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              width: "220px",
              textAlign: "center",
              padding: "20px",
              borderRadius: "14px",
              background: item.color,
              border: `2px solid ${item.border}`,
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "18px",
                color: "#2C3E50",
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;