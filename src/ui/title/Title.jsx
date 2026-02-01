import styles from "./Title.module.css"

function Title({children}) {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}

export default Title
