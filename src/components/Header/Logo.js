import Image from 'next/image'
import Link from 'next/link'
import bytecodeLogo from '@/public/logo-svg.svg'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border-dark dark:border-gray  mr-2 md:mr-4">
        <Image
          src={bytecodeLogo}
          alt="CodeBucks logo"
          className="w-full h-12"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        ByteCode
      </span>
    </Link>
  )
}

export default Logo
