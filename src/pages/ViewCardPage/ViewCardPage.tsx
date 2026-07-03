import ImageCard from "@/components/ImageCard";
import picturesData from "@/pictures.json";
import styles from "./ViewCardPage.module.css";

interface Picture {
  id: number;
  title: string;
  author: string;
}

const ViewCardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {picturesData.map((picture: Picture) => {
          const imageUrl = new URL(
            `../../assets/images/${picture.id}.jpg`,
            import.meta.url,
          ).href;

          return (
            <ImageCard
              key={picture.id}
              srcUrl={imageUrl}
              title={picture.title}
              author={picture.author}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewCardPage;
