import styles from "./Profile.module.css";

function Profile({ user, className = "" , name = true}) {
  const fullName = `${user?.firstName} ${user.lastName || ""}`.trim();

  return (
    <div className={`${styles.container} ${className}`}>
      {user?.profilePicture ? (
        <img className={styles.img} src={user.profilePicture} />
      ) : (
        <div className={styles.placeholder}>
          {user?.firstName?.[0]?.toUpperCase()}
        </div>
      )}
        {name && <p className={styles.name}>{fullName}</p>}
    </div>
  );
}

export default Profile;
