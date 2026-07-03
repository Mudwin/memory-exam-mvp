import { useState, useEffect } from "react";
import NextButton from "@/components/NextButton";
import picturesData from "@/pictures.json";
import styles from "./CardsPage.module.css";

interface Picture {
  id: number;
  title: string;
  author: string;
}

const CardsPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentPicture, setCurrentPicture] = useState<Picture | null>(null);

  const getRandomPicture = () => {
    if (!picturesData || picturesData.length === 0) return;

    const randomIndex = Math.floor(Math.random() * picturesData.length);
    const selected = picturesData[randomIndex];

    setCurrentPicture(selected);
    setIsFlipped(false);
  };

  useEffect(() => {
    getRandomPicture();
  }, []);

  if (!currentPicture) {
    return <div className={styles.container}>Загрузка...</div>;
  }

  const imageSrc = new URL(
    `../../assets/images/${currentPicture.id}.jpg`,
    import.meta.url,
  ).href;

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    getRandomPicture();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Текущая карточка:</div>
      <div
        className={`${styles.cardWrapper} ${isFlipped ? styles.flipped : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <img
              src={imageSrc}
              alt={currentPicture.title}
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardBack}>
            <div className={styles.cardInfo}>
              <div className={styles.cardTitle}>{currentPicture.title}</div>
              <div className={styles.cardAuthor}>{currentPicture.author}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <NextButton onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default CardsPage;
