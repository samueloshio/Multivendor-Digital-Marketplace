import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="p-2"><Button>
      Click Me
    </Button>
      Hello Home page
    </div>
  )
}
