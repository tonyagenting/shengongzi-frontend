
import Link from 'next/link';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'] // 加载需要的粗细
});

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Hanzi', href: '/learn' },
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo 区域 */}
            <Link href='/' className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              {/* 模拟图标 */}
              <span 
                role="img" 
                aria-label="battery logo" 
                className="text-4xl leading-none filter drop-shadow-sm"
              >
                🔋
              </span>

              {/* 文字部分 */}
              <div className="flex flex-col justify-center leading-none">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400 tracking-tight">
                  沈公子
                </span>
                <span className="text-lg text-orange-400 font-medium italic -mt-1 ml-8">
                  New Energy Group
                </span>
              </div>
            </Link>

            {/* 桌面端导航链接 */}
            <div className="md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${oswald.className} text-gray-700 hover:text-orange-500 text-lg font-medium transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

        </div>
      </div>
    </header>
  );
}
