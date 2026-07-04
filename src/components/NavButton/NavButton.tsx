import styles from "./NavButton.module.css";

type NavButtonState = "open" | "closed";

interface NavButtonProps {
  children: React.ReactNode;
  iconSrc: string;
  state: NavButtonState;
  page: string;
  onClick?: () => void;
}

const NavButton = ({
  children,
  iconSrc,
  state,
  page,
  onClick,
}: NavButtonProps) => {
  return (
    <button
      className={`${styles.button} ${state === "open" ? styles.active : ""}`}
      onClick={onClick}
    >
      {state === "open" ? (
        <>
          <span>{children}</span>
          <img className={styles.disabledOnPC} src={iconSrc} alt={page} />
        </>
      ) : (
        <img src={iconSrc} alt={page} className={styles.icon} />
      )}
    </button>
  );
};

export default NavButton;
