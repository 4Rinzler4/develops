import styles from "../SuccessMessage/SuccessMessage.module.css"

const SuccessMessage = ({successMsg}: {successMsg: string | null}) => {
    return <p className={styles.message}>{successMsg}</p>
}

export default SuccessMessage