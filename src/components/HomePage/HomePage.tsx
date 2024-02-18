import { useRouter } from 'next/navigation';
import styles from '../HomePage/HomePage.module.css'; // Ensure the path is correct
import Button from '@mui/material/Button';
import { AccountCircle, VpnKey } from '@mui/icons-material';

export default function HomePage() {
  const router = useRouter();

  const navigateToAuth = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.topMenu}>
        <div className={styles.logo}>
          UniSync
        </div>
        <div>
          <Button
            startIcon={<AccountCircle />}
            onClick={() => navigateToAuth('/signIn')}
            className={styles.signInBtn}
          >
            Sign In
          </Button>
          <Button
            startIcon={<VpnKey />}
            variant="contained"
            onClick={() => navigateToAuth('/signUp')}
            className={styles.signUpBtn}
          >
            Sign Up
          </Button>
        </div>
      </nav>
      
      <header className={styles.heroSection}>
        <h1>Balance Your University Life</h1>
        <p>UniSync helps you manage and visualize your weekly workload, making it easy to plan for success.</p>
        <div className={styles.imageContainer}>
        <img src="/Unisync.webp" alt="UniSync Logo" className={styles.imageLogo}/>
        </div>
        <Button
          variant="contained"
          onClick={() => navigateToAuth('/signIn')}
          className={styles.ctaBtn}
        >
          Try UniSync for Free
        </Button>
      </header>
      
      {/* Additional sections for features and testimonials */}
      
      <footer className={styles.finalCtaSection}>
        <p>Ready to take control of your university schedule?</p>
        <Button
          variant="contained"
          onClick={() => navigateToAuth('/signIn')}
          className={styles.finalSignUpBtn}
        >
          Sign Up
        </Button>
      </footer>
    </div>
  );
}