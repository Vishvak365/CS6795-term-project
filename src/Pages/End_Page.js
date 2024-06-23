import { useNavigate, useLocation } from "react-router-dom";

export default function EndPage() {
  const location = useLocation();
  const navigate = useNavigate();
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
          to the forms.
        </h1>
        <code>{JSON.stringify(metrics)}</code>
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
          navigate("/standard");
        }}
      >
        <b>Restart</b>
      </button>
    </div>
  );
}
