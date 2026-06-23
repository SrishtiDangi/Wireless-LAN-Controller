import Reveal from "./Reveal";
import { FaWifi, FaBroadcastTower } from "react-icons/fa";
import { useEffect, useState } from "react";

function Architecture() {
  const [architecture, setArchitecture] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showController, setShowController] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/architecture")
      .then((res) => res.json())
      .then((data) => {
        console.log("ARCHITECTURE DATA:", data);
        setArchitecture(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!architecture) {
    return (
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        Loading Architecture...
      </section>
    );
  }

  return (
    <section
      id="architecture"
      style={{
        padding: "70px 0",
      }}
    >
      <Reveal>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <FaWifi size={24} color="#2C3E50" />

          <h2
            style={{
              fontSize: "26px",
              fontWeight: "900",
              color: "#2C3E50",
            }}
          >
            {architecture?.title}
          </h2>
        </div>
      </Reveal>

      <Reveal>
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#5D6D7E",
          }}
        >
          {architecture?.subtitle}
        </div>
      </Reveal>

      {/* WLC */}
      <Reveal>
        <div
          onClick={() => setShowController(true)}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "320px",
              padding: "22px",
              borderRadius: "20px",
              textAlign: "center",
              background:
                "linear-gradient(135deg,#F8C8DC,#E8DFF5)",
              border: "2px solid #C39BD3",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.08)",
            }}
          >
            <FaBroadcastTower
              size={42}
              color="#7D3C98"
            />

            <h3
              style={{
                color: "#2C3E50",
                fontWeight: "800",
              }}
            >
              {architecture?.controller?.title}
            </h3>

            <p
              style={{
                color: "#555",
                fontSize: "13px",
              }}
            >
              {architecture?.controller?.desc}
            </p>
          </div>
        </div>
      </Reveal>

      <div className="wlcArrow">↓</div>

      {/* SERVICES */}
      <Reveal>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {architecture?.components?.map(
            (item, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(135deg,#D6EAF8,#EEF7FD)",
                  border: "2px solid #85C1E9",
                  padding: "14px 20px",
                  borderRadius: "14px",
                  color: "#2C3E50",
                  fontWeight: "700",
                }}
              >
                <>
                  <div style={{ fontWeight: "800" }}>
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      marginTop: "6px",
                      fontWeight: "500"
                    }}
                  >
                    {item.desc}
                  </div>
                </>
              </div>
            )
          )}
        </div>
      </Reveal>

      <div className="wlcArrow">↓</div>

      {/* DEVICES */}
      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {architecture?.devices?.map(
            (device, index) => (
              <div
                key={index}
                onClick={() => setSelectedDevice(device)}

                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 35px rgba(0,0,0,0.15)";
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.08)";
                }}

                style={{
                  background: device.color,
                  border: `2px solid ${device.border}`,
                  borderRadius: "20px",
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "0.3s ease",
                }}
              >
                <h3
                  style={{
                    color: "#2C3E50",
                    fontWeight: "800",
                  }}
                >
                  {device?.title}
                </h3>

                <p
                  style={{
                    color: "#555",
                    fontSize: "13px",
                  }}
                >
                  {device?.desc}
                </p>
              </div>
            )
          )}
        </div>
      </Reveal>
      {selectedDevice && (

        <div
          onClick={() => setSelectedDevice(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "500px",
              maxWidth: "90%",
              background: "#fff",
              padding: "30px",
              borderRadius: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            }}
          >
            <h2
              style={{
                color: "#2C3E50",
                marginBottom: "15px",
              }}
            >
              {selectedDevice.title}
            </h2>

            <ul
              style={{
                color: "#555",
                lineHeight: "1.8",
                paddingLeft: "20px",
                marginTop: "15px",
              }}
            >
              {selectedDevice.details?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button
              onClick={() => setSelectedDevice(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                border: "none",
                borderRadius: "10px",
                background: "#2C3E50",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showController && (
        <div
          onClick={() => setShowController(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "650px",
              maxWidth: "92%",
              background: "#fff",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <h2
              style={{
                color: "#2C3E50",
                marginBottom: "12px",
              }}
            >
              {architecture.controller.title}
            </h2>

            <p
              style={{
                color: "#555",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              {architecture.controller.desc}
            </p>

            <h3
              style={{
                color: "#2C3E50",
                marginBottom: "10px",
              }}
            >
              Key Functions
            </h3>

            <ul
              style={{
                lineHeight: "1.8",
                color: "#555",
                paddingLeft: "20px",
              }}
            >
              {architecture.controller.details?.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>

            <h3
              style={{
                marginTop: "20px",
                color: "#2C3E50",
              }}
            >
              Protocols
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {architecture.controller.protocols?.map(
                (protocol, index) => (
                  <div
                    key={index}
                    style={{
                      background: "#E8DFF5",
                      border: "1px solid #C39BD3",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      fontWeight: "600",
                    }}
                  >
                    {protocol}
                  </div>
                )
              )}
            </div>

            <button
              onClick={() => setShowController(false)}
              style={{
                marginTop: "25px",
                padding: "10px 22px",
                border: "none",
                borderRadius: "12px",
                background: "#2C3E50",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          .wlcArrow{
            text-align:center;
            font-size:28px;
            margin:16px 0;
            color:#2C3E50;
            animation:wlcMove 1.2s infinite;
          }

          @keyframes wlcMove{
            0%{
              transform:translateY(-4px);
              opacity:.3;
            }
            50%{
              transform:translateY(6px);
              opacity:1;
            }
            100%{
              transform:translateY(12px);
              opacity:.3;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Architecture;