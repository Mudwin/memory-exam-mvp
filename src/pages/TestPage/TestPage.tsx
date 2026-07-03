import { useState, useEffect } from "react";
import TestButton from "@/components/TestButton";
import NextButton from "@/components/NextButton";
import picturesData from "@/pictures.json";
import styles from "./TestPage.module.css";

interface Picture {
  id: number;
  title: string;
  author: string;
}

const TestPage = () => {
  const [currentPicture, setCurrentPicture] = useState<Picture | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const generateQuestion = () => {
    if (!picturesData || picturesData.length == 0) return;

    const randomIndex = Math.floor(Math.random() * picturesData.length);
    const correctPicture = picturesData[randomIndex];

    const allAuthors = Array.from(
      new Set(picturesData.map((picture) => picture.author)),
    );
    const wrongAuthors = allAuthors.filter(
      (author) => author !== correctPicture.author,
    );

    const shuffleWrong = wrongAuthors.sort(() => 0.5 - Math.random());
    const selectedWrong = shuffleWrong.slice(0, 3);

    const finalAnswers = [correctPicture.author, ...selectedWrong].sort(
      () => 0.5 - Math.random(),
    );

    setCurrentPicture(correctPicture);
    setAnswers(finalAnswers);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  if (!currentPicture) {
    return <div className={styles.container}>Загрузка...</div>;
  }

  const imageSrc = new URL(
    `../../assets/images/${currentPicture.id}.jpg`,
    import.meta.url,
  ).href;

  const handleAnswerClick = (author: string) => {
    if (isAnswered) return;

    setSelectedAnswer(author);
    setIsAnswered(true);
  };

  const getAnswerStatus = (author: string) => {
    if (!isAnswered) return "default";

    if (author === currentPicture.author) {
      return "correct";
    }

    if (selectedAnswer === author && author !== currentPicture.author) {
      return "error";
    }

    return "default";
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} className={styles.quizImage} />
      </div>
      <div className={styles.answers}>
        {answers.map((author, index) => (
          <TestButton
            key={index}
            answer={author}
            answerStatus={getAnswerStatus(author)}
            onClick={() => handleAnswerClick(author)}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        {isAnswered && <NextButton onClick={generateQuestion} />}
      </div>
    </div>
  );
};

export default TestPage;
