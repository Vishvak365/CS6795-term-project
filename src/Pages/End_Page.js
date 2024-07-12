import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

export default function EndPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    document.body.classList.remove("bg-adhd");
    document.body.classList.add("bg-regular");
  });
  const metrics = location.state.metrics
    ? location.state.metrics
    : [
        {
          type: "standard",
          question: 1,
          time_taken: 1.827,
          correct: false,
        },
        {
          type: "standard",
          question: 2,
          time_taken: 1.258,
          correct: false,
        },
        {
          type: "standard",
          question: 3,
          time_taken: 0.945,
          correct: false,
        },
        {
          type: "adhd",
          question: 1,
          time_taken: 1.484,
          correct: false,
        },
        {
          type: "adhd",
          question: 2,
          time_taken: 1.16,
          correct: true,
        },
        {
          type: "adhd",
          question: 3,
          time_taken: 1.494,
          correct: false,
        },
      ];
  function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
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
        <h1>
          Thanks for completing this trial, please copy over the below text over
          to the survey.
        </h1>
        {/* <CopyBlock
          text={JSON.stringify(metrics)}
          language={"json"}
          showLineNumbers={false}
          theme={dracula}
        /> */}
        <code>{JSON.stringify(metrics)}</code>
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
            copyTextToClipboard(JSON.stringify(metrics))
              .then(() => {
                setIsCopied(true);
              })
              .catch((err) => {
                setIsCopied(false);
                console.log(err);
              });
          }}
        >
          <b>
            <span>{isCopied ? "Copied!" : "Copy"}</span>
          </b>
        </button>
        <br />
        * Note, if the copy button doesn't work, please select/copy over the
        info to the forms
        <br />* <code>total_mouse_distance_moved</code> refers to how much you
        moved (measured in pixels) your cursor across the page for each question
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          fontFamily: "Arial, sans-serif",
          color: "white",
          fontSize: 20,
          margin: 10,
          background: "red",
          padding: 20,
          borderRadius: "10px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <b>Restart</b>
      </button>
    </div>
  );
}
