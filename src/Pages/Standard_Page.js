import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const questions = [
  {
    question: "Complete the following equation",
    problem: "(2+2)*3+2=",
    answers: ["20", "10", "14", "12"],
    correct_index: 2,
  },
  {
    question: "Answer the following teaser",
    problem:
      "If all Swans are Birds and some Birds can Fly, can we conclude that some Swans can definitely Fly?",
    answers: ["Yes", "No"],
    correct_index: 1,
  },
  {
    question: "Calculate the perimeter of the rectangle",
    problem: "Length is Five and Width is Three",
    answers: ["Eight", "Ten", "Fifteen", "Sixteen"],
    correct_index: 3,
  },
];
export default function StandardPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [highlighted, setHighlighted] = useState(-1);
  const [timeStart, setTimeStart] = useState(new Date());

  const [metrics] = useState([]);

  const [mouseDist, setMouseDist] = useState(0);
  const [prevMouseLoc, setPrevMouseLoc] = useState(null);
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      const currentX = event.clientX;
      const currentY = event.clientY;
      let prevX = null;
      let prevY = null;
      if (!prevMouseLoc) {
        setPrevMouseLoc([currentX, currentY]);
        prevX = currentX;
        prevY = currentY;
      } else {
        prevX = prevMouseLoc[0];
        prevY = prevMouseLoc[1];
      }
      const distance = Math.sqrt(
        Math.pow(currentX - prevX, 2) + Math.pow(currentY - prevY, 2)
      );
      setPrevMouseLoc([currentX, currentY]);
      setMouseDist(mouseDist + distance);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, [mouseDist, prevMouseLoc]);

  function handleClick() {
    const elapsed = (new Date() - timeStart) / 1000;
    metrics.push({
      type: "standard",
      question: index + 1,
      correct: questions[index].correct_index === highlighted ? true : false,
      time_taken: elapsed,
      total_mouse_distance_moved: mouseDist,
    });
    console.log(metrics);

    if (index === questions.length - 1) {
      navigate("/adhd_intro", { state: { metrics } });
    } else {
      setTimeStart(new Date());
      setHighlighted(-1);
      setIndex(index + 1);
      setMouseDist(0);
      setPrevMouseLoc(null);
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
        <h2>{questions[index].question}</h2>
        <h1>{questions[index].problem}</h1>
        {questions[index].answers.map((answer, answerIndex) => (
          <button
            key={answerIndex}
            style={{
              cursor: "pointer",
              border: "none",
              fontFamily: "Arial, sans-serif",
              color: "white",
              fontSize: 20,
              margin: 5,
              background:
                answerIndex === highlighted ? "rgb(70, 121, 72)" : "#4CAF50",
              padding: 10,
              borderRadius: "10px",
            }}
            onClick={() => {
              setHighlighted(answerIndex);
            }}
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        style={{
          cursor: highlighted === -1 ? "not-allowed" : "pointer",
          border: "none",
          fontFamily: "Arial, sans-serif",
          color: "white",
          fontSize: 20,
          margin: 10,
          background: highlighted === -1 ? "#d3d3d3" : "#4CAF50",
          padding: 20,
          borderRadius: "10px",
        }}
        disabled={highlighted === -1}
        onClick={highlighted === -1 ? null : handleClick}
      >
        Next
      </button>
    </div>
  );
}
