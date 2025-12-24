import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* 公司简介 */}
        <div>
          <h3 className="text-xl font-bold mb-4">沈公子新能源集团</h3>
          <p className="text-gray-400 text-sm">
            全球领先的新能源储能解决方案提供商，致力于为未来提供绿色动力。
          </p>
        </div>

        {/* 快速链接 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">快速链接</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/products" className="hover:text-white">所有产品</Link></li>
            <li><Link href="#" className="hover:text-white">应用案例</Link></li>
            <li><Link href="#" className="hover:text-white">资料下载</Link></li>
          </ul>
        </div>

        {/* 联系方式 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">联系我们</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: ceo@shen.com</li>
            <li>Tel: +61 755 1234 5678</li>
            <li>Add: 布里斯班富豪山庄</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
        © 2025 VoltEnergy Co., Ltd. All rights reserved.
      </div>
    </footer>
  );
}
