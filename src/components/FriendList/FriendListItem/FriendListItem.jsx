import styles from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
