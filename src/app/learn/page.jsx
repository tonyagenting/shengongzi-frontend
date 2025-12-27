'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react'; // 必须引入，否则 build 会报错

// --- 1. 模拟数据配置 (以后可以从 Strapi 获取) ---

// 分类列表
const CATEGORIES = [
  { 
    id: 'animals', 
    name: '神奇动物园', 
    // 封面：一只可爱的小熊猫
    cover: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=800&auto=format&fit=crop', 
    // 场景：宽阔的森林草地 (适合放动物)
    sceneImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1920&auto=format&fit=crop', 
    color: 'bg-green-100 text-green-700'
  },
  { 
    id: 'space', 
    name: '浩瀚宇宙', 
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    sceneImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80',
    color: 'bg-indigo-100 text-indigo-700'
  }
];

// 场景里的热点数据 (坐标 x, y 是百分比)
const SCENE_HOTSPOTS = {
  animals: [
    { 
      id: 'panda', 
      name: '大熊猫', 
      slug: 'da-xiong-mao', // 对应 Strapi 里的 slug
      x: 20, // 距离左边 20%
      y: 60, // 距离顶部 60%
      avatar: '🐼' // 这里的头像以后可以用 Strapi 的小图代替
    },
    { 
      id: 'tiger', 
      name: '老虎', 
      slug: 'lao-hu', 
      x: 70, 
      y: 50, 
      avatar: '🐯'
    },
    { 
      id: 'bird', 
      name: '小鸟', 
      slug: 'xiao-niao', 
      x: 50, 
      y: 20, 
      avatar: '🐦'
    }
  ],
  space: [
    // ... 宇宙的坐标配置
  ]
};

function LearnEntryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. 从 URL 获取当前类别，而不是用 useState
  const currentCategoryId = searchParams.get('category');
  const selectedCategory = CATEGORIES.find(c => c.id === currentCategoryId);

  // 2. 选择分类：只是修改 URL，不直接改状态
  const handleSelectCategory = (id) => {
    router.push(`/learn?category=${id}`);
  };

  // 3. 进入详情页：把当前的分类作为参数带过去 (from=animals)
  const handleJumpToDetail = (slug) => {
    router.push(`/learn/${slug}?from=${currentCategoryId}`);
  };

  // 4. 返回列表：清空 URL 参数
  const handleBackToList = () => {
    router.push('/learn');
  };

  // --- 视图 1: 分类选择卡片 ---
  if (!selectedCategory) {
    return (
      <main className="min-h-screen bg-sky-50 p-8 flex flex-col items-center">
        <h1 className="text-4xl font-black text-gray-800 mb-10 tracking-wider">
          🌍 去哪里探险？
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              {/* 图片区域 */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={cat.cover} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* 遮罩层 */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
              </div>
              
              {/* 文字区域 */}
              <div className={`p-6 text-center ${cat.color}`}>
                <h2 className="text-3xl font-bold">{cat.name}</h2>
                <p className="mt-2 opacity-80">点击出发 🚀</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // --- 视图 2: 沉浸式场景探索 ---
  const hotspots = SCENE_HOTSPOTS[selectedCategory.id] || [];

  return (
    <main className="h-screen w-screen overflow-hidden bg-black relative">
      {/* 1. 全屏背景大图 */}
      <div className="absolute inset-0">
        <img 
          src={selectedCategory.sceneImage} 
          alt="Scene" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* 2. 返回按钮 */}
      <button 
        onClick={handleBackToList}
        className="absolute top-8 left-8 z-50 bg-white/90 text-gray-800 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:scale-105 transition"
      >
        ⬅️ 换个地方
      </button>

      {/* 3. 渲染热点动物 */}
      {hotspots.map((item) => (
        <div
          key={item.id}
          onClick={() => handleJumpToDetail(item.slug)}
          className="absolute cursor-pointer group"
          style={{ 
            left: `${item.x}%`, 
            top: `${item.y}%`,
            transform: 'translate(-50%, -50%)' // 确保坐标点是元素的中心
          }}
        >
          {/* 动画光圈 (提示这里可以点) */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping"></div>
          
          {/* 动物/物体主体 - 这里用 Emoji 代替，实际上你可以放透明背景的 PNG 图片 */}
          <div className="relative text-6xl md:text-8xl transition transform group-hover:scale-125 drop-shadow-2xl filter hover:brightness-110">
            {item.avatar}
          </div>

          {/* 悬停提示文字 */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
            {item.name}
          </div>
        </div>
      ))}

      {/* 底部提示 */}
      <div className="absolute bottom-10 w-full text-center pointer-events-none">
        <div className="inline-block bg-black/50 text-white px-6 py-2 rounded-full backdrop-blur-md">
          🔍 试试点击画面里的小动物！
        </div>
      </div>
    </main>
  );
}

// Next.js 要求使用 useSearchParams 的组件必须包裹在 Suspense 中
export default function LearnPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LearnEntryPage />
    </Suspense>
  );
}