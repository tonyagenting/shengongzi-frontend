"use client"

export default function Home() {
  
  return (
    <div>
      {/* Hero Banner 区域 */}
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            为世界提供 <span className="text-blue-600">绿色能源</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            高性能磷酸铁锂电池，专为家庭储能与工商业应用设计。
          </p>
          <div className="flex justify-center gap-4">
            <a href="/products" className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
              浏览产品
            </a>
            <a href="/about" className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md hover:bg-blue-50">
              了解工厂
            </a>
          </div>
        </div>
      </section>

      {/* 特性展示区域 */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">超长寿命</h3>
            <p className="text-gray-600">采用 A 级电芯，循环寿命超过 6000 次。</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">智能 BMS</h3>
            <p className="text-gray-600">内置智能管理系统，实时监控电池健康状态。</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">全球认证</h3>
            <p className="text-gray-600">通过 UL, CE, UN38.3 等多项国际认证。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
