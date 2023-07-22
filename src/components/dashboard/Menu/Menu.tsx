import MenuButton from '@/components/base/MenuButton/MenuButton';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <div className= {styles.menu}>
      <ul className={styles.menulist}>
        <MenuButton content='Calendar'/>
        <MenuButton content='Courses'/>
        <MenuButton content='Add Events'/>
      </ul>
    </div>
  );
}