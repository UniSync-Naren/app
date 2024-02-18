import './globals.css'
import Menu from '@/components/base/Menu/Menu'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function SignedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <body>
        <Menu/>
        {children}
      </body>
  )
}