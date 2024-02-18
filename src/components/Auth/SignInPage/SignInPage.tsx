import { useRouter } from 'next/navigation';
import { auth, provider} from '@/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import styles from '../SignInPage/SignInPage.module.css'; // Your CSS module

export default function SignInPage() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard'); // Redirect to dashboard after signing in
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.card}>
        <img src="/UnisyncLogo.png" alt="UniSync Logo" className={styles.logo} />
        <p className={styles.welcome}>Welcome to UniSync</p>
        <p className={styles.description}>Sign in to your account and start managing your workload efficiently with UniSync</p>
                <button onClick={handleGoogleSignIn} className={styles.googleSignInButton}>
                <div className={styles.imageContainer}>
                    <img src='/GoogleLogo.png' className={styles.googleImage} />
                </div>
                <text>Sign in with Google</text>
                </button>
      </div>
    </div>
  );
}