import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function WelcomePage() {
  useEffect(() => {
    document.body.classList.remove("bg-adhd");
    document.body.classList.add("bg-regular");
  });
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
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
          background: "rgb(235 246 255)",
          color: "black",
          padding: 20,
          borderRadius: "10px",
        }}
      >
        <h1>Welcome to my CS-6795 term project!</h1>
        <h2>
          You'll be asked 6 questions
          <br></br>
          <i>(Should take less than 2-3 minutes total)</i>
        </h2>
        <h3>
          The first three will be on a page with <b>standard material design</b>
        </h3>
        <h3>
          The last three questions will be on a page{" "}
          <b>designed to be ADHD Accessible</b>
        </h3>
        <p>
          As you answer the questions, your responses are collected locally.
          After completing all six questions, you'll receive the metrics to copy
          into the Google Forms survey. At the end, you can review all data
          collected during this trial. For privacy,
          <b> no data is sent to any server — it's all stored locally </b>(which
          can be deleted by visiting this page again).
        </p>
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          fontFamily: "Arial, sans-serif",
          color: "white",
          fontSize: 20,
          margin: 10,
          background: "#4CAF50",
          padding: 20,
          borderRadius: "10px",
        }}
        onClick={() => {
          navigate("/standard");
        }}
      >
        <b>Begin</b>
      </button>
    </div>
  );
}
