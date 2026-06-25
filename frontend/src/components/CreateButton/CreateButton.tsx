import styles from "./CreateButton.module.css";

type CreateButtonProps = {
  onClick: () => void;
};

const CreateButton = ({ onClick }: CreateButtonProps) => {
  return (
    <button className={styles.createButton} onClick={onClick}>
      Create Quiz
    </button>
  );
};

export default CreateButton;
