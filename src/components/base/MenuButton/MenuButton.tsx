import { MenuButtonProps } from '../interface';
import styles from './MenuButton.module.css';

export default function MenuButton({content}: MenuButtonProps) {
  return (
    <button className={styles.menubutton}>
        {content}
    </button>
  );
}