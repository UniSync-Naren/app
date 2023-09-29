"use client"
import styles from './ProfileMenuButton.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function ProfileMenuButton() {
  return (
    <button className={styles.profilemenubutton}>
        <AccountCircleIcon/>
        <div className={styles.nametext}>
        Naren Sreekanth
        </div>
    </button>
  );
}