import Menu from '@/components/base/Menu/Menu'
import styles from './HomePageLayout.module.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <body className={styles.body}> 
        {children}
      </body>
  )
}
