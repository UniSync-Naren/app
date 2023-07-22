import { MenuButtonProps } from '../interface';
import styles from './MenuButton.module.css';

export default function MenuButton({content, handleClick}: MenuButtonProps) {
  return (
    <button className={styles.menubutton} onClick={handleClick}>
        {content}
    </button>
  );
}