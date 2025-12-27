
import React from 'react';
import Link from 'next/link';

// 2. 定义一个异步函数来获取数据
async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?populate=*`, {
      headers: {
        // ✅ 这里是在服务器端运行，所以能读到私密的 STRAPI_API_TOKEN
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      // cache: 'no-store', // 如果你需要实时数据，取消注释这一行
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // 出错时返回空数组
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">产品中心</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id} className="group">
            <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                [产品图片占位]
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {product.description}
                </span>
                <h2 className="text-lg font-bold mt-2 group-hover:text-blue-600">
                  {product.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
