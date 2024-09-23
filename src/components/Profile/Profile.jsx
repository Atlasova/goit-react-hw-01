// src/components/Profile.jsx
import styles from './Profile.module.css';

export default function Profile({
  image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  name = 'Petra Marica',
  tag = '@pmarica',
  location = 'Salvador, Brasil',
  followers = 1000,
  views = 2000,
  likes = 3000,
}) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={image} alt="User avatar" />
      <p className={styles.userName}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span className={styles.statsName}>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsName}>Views</span>
          <span>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsName}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
