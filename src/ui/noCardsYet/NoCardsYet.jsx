import styles from "./NoCardsYet.module.css";

function NoCardsYet({
  title = "No data found",
  message = "There is nothing to display here.",
}) {
  return (
    <div className="emptyState">
      <h3  className={styles.title}>{title}</h3>
      <p  className={styles.message}>{message}</p>
    </div>
  );
}

export default NoCardsYet;
