import { MenuButtonProps } from '../interface';
import styles from './MenuButton.module.css';

export default function MenuButton({content, handleClick}: MenuButtonProps) {
  return (
    <div className={styles.menubutton} onClick={handleClick}>
      <text className={styles.text}>
        {content}
      </text>
    </div>
  );
}