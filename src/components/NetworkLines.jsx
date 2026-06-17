function NetworkLines() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        margin: "30px 0",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "2px",
          background: "#C39BD3",
        }}
      />

      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "#F8C8DC",
        }}
      />

      <div
        style={{
          width: "80px",
          height: "2px",
          background: "#85C1E9",
        }}
      />
    </div>
  );
}

export default NetworkLines;