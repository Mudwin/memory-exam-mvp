import arrowIcon from "@/assets/icons/arrow-icon.svg";
import styles from "./NextButton.module.css";

interface NextButtonProps {
  onClick?: (e: React.MouseEvent) => void;
}

const NextButton = ({ onClick }: NextButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>Next</span>
      <img src={arrowIcon} alt="" />
    </button>
  );
};

export default NextButton;
