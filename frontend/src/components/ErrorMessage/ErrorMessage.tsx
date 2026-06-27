import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }: { message?: string }) => {
  return <p className={styles.errorMsg}>{message}</p>;
};

export default ErrorMessage;
