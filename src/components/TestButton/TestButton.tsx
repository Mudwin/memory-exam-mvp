import styles from "./TestButton.module.css";

type AnswerStatus = "default" | "correct" | "error";

interface TestButtonProps {
  answer: string;
  answerStatus?: AnswerStatus;
  onClick: () => void;
}

const TestButton = ({
  answer,
  answerStatus = "default",
  onClick,
}: TestButtonProps) => {
  return (
    <div
      className={`${styles.container} ${
        answerStatus === "correct"
          ? styles.correct
          : answerStatus === "error"
            ? styles.error
            : ""
      } ${answerStatus !== "default" ? styles.disabled : ""}`}
      role="button"
      onClick={onClick}
    >
      <span className={styles.answer}>{answer}</span>
    </div>
  );
};

export default TestButton;
