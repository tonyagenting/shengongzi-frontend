export default async function ProductDetail({ params }) {
  // 实际开发中：根据 params.slug 去 Strapi 请求详情数据
  // const product = await getProductBySlug(params.slug);
  const { slug } = await params;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <span className="text-gray-500">产品 ID: {slug}</span>
        <h1 className="text-3xl font-bold mt-2 mb-6">48V 100Ah 壁挂式电池 (示例)</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-100 h-80 rounded-lg">
             {/* 左侧图片区 */}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">技术参数</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-600">标称电压</span>
                <span className="font-medium">51.2V</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-600">标称容量</span>
                <span className="font-medium">100Ah</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="text-gray-600">总能量</span>
                <span className="font-medium">5.12kWh</span>
              </li>
            </ul>
            
            <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              下载规格书 (Datasheet)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
