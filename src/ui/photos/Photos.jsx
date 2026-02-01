import styles from "./Photos.module.css";

function Photos({ className = "" }) {
  const photo = "/photo.jpeg";
  const photos = Array.from({ length: 3 }, () => photo);

  return (
    <div className={`${styles.photos} ${className}`}>
      {photos.map((ele, i) => {
        return (
          <div key={i} className={`${styles.img}`}>
            <img src={ele} alt={"ele".match(`photo`)} />
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
