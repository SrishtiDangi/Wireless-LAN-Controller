import { useEffect, useState } from "react";

function Footer() {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    fetch("https://wireless-lan-controller.onrender.com/api/footer")
      .then((res) => res.json())
      .then((data) => setFooter(data))
      .catch((err) => console.log(err));
  }, []);

  if (!footer) return null;

  return (
    <footer
      style={{
        marginTop: "60px",
        padding: "40px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #F8F9FA, #EAF2F8)",
        borderTop: "2px solid #D6EAF8",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px 0",
          fontSize: "20px",
          fontWeight: "800",
          color: "#2C3E50",
          letterSpacing: "0.5px",
        }}
      >
        {footer.title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "13px",
          color: "#5D6D7E",
        }}
      >
        {footer.subtitle}
      </p>

      <div
        style={{
          marginTop: "18px",
          fontSize: "12px",
          color: "#95A5A6",
        }}
      >
        © {new Date().getFullYear()} {footer.copyright}
      </div>
    </footer>
  );
}

export default Footer;