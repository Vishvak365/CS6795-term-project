import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ADHDWelcomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add("bg-adhd");
    document.body.classList.remove("bg-regular");
  });
  return (
    <div
      style={{
        // fontFamily: "Arial, sans-serif",
        fontFamily: "OpenDyslexic, sans-serif",
        color: "white",

        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          background: "#282828",
          color: "black",
          padding: 20,
          borderRadius: "10px",
        }}
      >
        <h1 style={{ color: "#bcafff" }}>
          You've completed the standard styling questions!
        </h1>
        <h2 style={{ color: "#cccace" }}>
          You'll be asked 3 more questions similar to what you've just completed
        </h2>
        <h3 style={{ color: "#cccace" }}>
          The styling of the page will shift to be more ADHD friendly
        </h3>
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          fontFamily: "OpenDyslexic, sans-serif",
          color: "white",
          fontSize: 20,
          margin: 10,
          background: "#4CAF50",
          padding: 20,
          borderRadius: "10px",
        }}
        onClick={() => {
          console.log(location.state.metrics);
          navigate("/adhd", {
            state: {
              metrics: location.state.metrics ? location.state.metrics : [],
            },
          });
        }}
      >
        <b>Begin</b>
      </button>
    </div>
  );
}
