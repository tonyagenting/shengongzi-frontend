import React from 'react';
import Link from 'next/link';
import { Leaf, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

// ====================
// 数据配置区域 (方便后期修改)
// ====================
const stats = [
  { id: 1, name: '全球合作伙伴', value: '500+', icon: TrendingUp },
  { id: 2, name: '累计装机容量 (GWh)', value: '12.5', icon: Zap },
  { id: 3, name: '研发投入占比', value: '15%', icon: ShieldCheck },
  { id: 4, name: '减少碳排放 (万吨)', value: '800', icon: Leaf },
];

const values = [
  {
    name: '持续创新',
    description: '我们不断突破电池技术的边界，追求更高的能量密度和更长的使用寿命，为未来供能。',
    icon: Zap,
  },
  {
    name: '安全可靠',
    description: '安全是我们的底线。采用车规级标准和多重冗余设计，确保每一个电池组都万无一失。',
    icon: ShieldCheck,
  },
  {
    name: '绿色可持续',
    description: '致力于清洁能源的普及，构建从生产到回收的绿色闭环，为地球减负。',
    icon: Leaf,
  },
];

// ====================
// 主组件
// ====================
export default function AboutPage() {
  return (
    <div className="bg-white">
      
      {/* 1. Hero Section: 极具冲击力的头部大图 */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        {/* 背景图 (请替换为你自己的高清大图) */}
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="新能源未来城市"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-40"
        />
        {/* 渐变叠加层，增加科技感 */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-base font-semibold leading-7 text-orange-400 tracking-wider uppercase">
              关于沈公子新能源
            </h2>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              赋能未来，<br className="sm:hidden"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                定义绿色能源新纪元
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl mx-auto">
              我们是一家专注于高性能储能电池系统研发与制造的科技企业。致力于通过技术创新，让清洁能源变得更稳定、更易得、更经济。
            </p>
          </div>
        </div>
      </div>

      {/* 2. 使命与愿景部分: 左右布局 */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 items-center lg:grid-cols-2">
            {/* 左侧文本 */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-orange-500">我们的使命</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  加速世界向可持续能源转变
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  在沈公子新能源，我们不只是制造电池，我们是在构建能源的未来。我们相信，通过高效的存储技术，太阳能和风能将不再是间歇性的补充，而是全天候的主力电源。
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  从家庭储能墙到公用事业级电网侧储能项目，我们的解决方案正在全球各地默默运行，为数百万用户提供稳定可靠的电力保障。
                </p>
                 <div className="mt-10 flex items-center gap-x-6">
                  <Link href="/products" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-all">
                    探索我们的产品
                  </Link>
                </div>
              </div>
            </div>
            {/* 右侧图片：加了一点特效 */}
            <div className="relative pl-6 pt-10 sm:pl-16 lg:pl-0 lg:pt-0">
               {/* 装饰性的背景 blob */}
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-100 to-orange-100 opacity-70 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="工程师在实验室"
                className="rounded-2xl shadow-2xl ring-1 ring-gray-900/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. 统计数据部分: 用渐变数字展示实力 */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                数字见证实力
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                我们在全球范围内产生的积极影响。
              </p>
            </div>
            {/* 数据网格 */}
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 font-sans">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white p-8 hover:bg-gray-50 transition-colors duration-300">
                  <dt className="text-sm font-semibold leading-6 text-gray-600 flex items-center justify-center gap-2">
                     <stat.icon className="h-5 w-5 text-orange-400" aria-hidden="true" />
                    {stat.name}
                  </dt>
                  <dd className="order-first text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* 4. 核心价值观卡片 */}
      <div className="py-24 sm:py-32 relative">
         {/* 装饰性背景元素 */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
           <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
           </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-500">核心价值观</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              我们坚守的原则
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <dt className="flex items-center gap-x-3 text-xl font-bold leading-7 text-gray-900">
                    {/* 图标容器，带渐变背景 */}
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 shadow-md">
                       <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
    </div>
  );
}
