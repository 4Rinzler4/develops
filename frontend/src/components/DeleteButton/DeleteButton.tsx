import styles from "./Delete.module.css";

type DeleteButtonProps = {
  handleRemove: () => void;
};

const DeleteButton = ({ handleRemove }: DeleteButtonProps) => {
  return (
    <>
      <button onClick={handleRemove} className={styles.deleteButton}>
        Delete
      </button>
    </>
  );
};

export default DeleteButton;
