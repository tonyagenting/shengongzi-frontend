import HanziPlayer from '@/components/HanziPlayer';
import InteractiveCard from '@/components/InteractiveCard';

// 1. 定义获取数据的函数
async function getLearningItem(slug) {
  // 注意：Strapi 的 URL 结尾通常需要加 populate=* 才能把图片和组件数据取出来
  // 假设你的 Strapi 运行在 localhost:1337
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/learning-items?filters[slug][$eq]=${slug}&populate[hanzi_details]=*&populate[media_assets][populate]=*`, 
    {  
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        cache: 'no-store' } // 开发阶段禁用缓存，方便调试
  );

  const data = await res.json();
  
  // 简单的错误处理
  if (!data.data || data.data.length === 0) {
    return null;
  }

  return data.data[0];
}

export default async function LearningPage({ params }) {
  const { slug } = await params;
  const item = await getLearningItem(slug);

  if (!item) {
    return <div className="text-center mt-20 text-2xl">找不到这个内容哦 🐢</div>;
  }

  const { title, simple_description, hanzi_details, theme_color, media_assets } = item;
  // 获取颜色，如果没有就给个默认色
  const bgColor = theme_color || '#fef3c7'; 

  return (
    <main 
      className="min-h-screen p-8 flex flex-col items-center"
      style={{ backgroundColor: bgColor }} // 使用 Strapi 里配置的主题色
    >
      {/* 顶部大标题 */}
      <h1 className="text-6xl font-black text-gray-800 mb-8 drop-shadow-md">
        {title}
      </h1>

      {/* 内容区域：左边是图/百科，右边是写字 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        
        {/* 左侧：使用新的交互卡片组件 */}
        <div>
           <InteractiveCard 
             mediaData={media_assets} 
             description={simple_description} 
           />
        </div>

        {/* 右侧：汉字练习区 */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            来学写汉字！
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* 遍历 Strapi 里的 hanzi_details 数组 */}
            {hanzi_details && hanzi_details.map((hanzi, index) => (
              <div key={index} className="flex flex-col items-center">
                <HanziPlayer character={hanzi.character} />
                <span className="text-2xl mt-3 font-mono text-gray-600">
                  {hanzi.pinyin}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 底部导航 */}
      <div className="mt-12">
        <a href="/" className="text-xl font-bold text-gray-500 hover:text-gray-800 transition">
          ⬅️ 回到首页
        </a>
      </div>
    </main>
  );
}
