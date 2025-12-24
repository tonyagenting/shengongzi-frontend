import './globals.css';

import { Inter } from 'next/font/google';
import Header from '@/components/Header'; // 引入组件
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VoltEnergy - 新能源电池专家',
  description: '专业的储能电池系统制造商',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {/* 1. 放置 Header */}
        <Header />
        
        {/* 2. 这里的 children 代表当前访问的页面内容 */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* 3. 放置 Footer */}
        <Footer />
      </body>
    </html>
  );
}
