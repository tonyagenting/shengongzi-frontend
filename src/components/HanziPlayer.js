'use client';

import { useEffect, useRef, useState } from 'react';
import HanziWriter from 'hanzi-writer';

export default function HanziPlayer({ character }) {
  const writerRef = useRef(null);
  const [writerInstance, setWriterInstance] = useState(null);

  useEffect(() => {
    // 🔒 1. 安全检查：如果没有 ref 或者 character 为空，直接返回
    if (!writerRef.current || !character) return;

    // 🧹 2. 关键步骤：初始化前，先强制清空容器！
    // 这一步解决了“出现两次”的问题
    writerRef.current.innerHTML = '';

    // 初始化 HanziWriter
    const writer = HanziWriter.create(writerRef.current, character, {
      width: 200,
      height: 200,
      padding: 10,
      showOutline: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 200,
      strokeColor: '#334455',
      radicalColor: '#168F16',
    });

    setWriterInstance(writer);

    // 🧹 3. 清理函数 (Cleanup Function)
    // 当组件销毁，或者 character 改变时，React 会先运行这个函数
    return () => {
      if (writerRef.current) {
        writerRef.current.innerHTML = ''; // 再次确保清空
      }
    };
  }, [character]);

  // 播放动画
  const handleAnimate = () => {
    if (writerInstance) {
      writerInstance.animateCharacter();
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border-4 border-yellow-200">
      {/* 汉字容器 */}
      <div 
        ref={writerRef} 
        className="cursor-pointer bg-red-50 rounded-xl"
        onClick={handleAnimate} // 点击汉字也可以重播
      ></div>

      {/* 控制按钮组 */}
      <div className="flex gap-2">
        <button 
          onClick={handleAnimate}
          className="px-4 py-2 bg-blue-400 text-white rounded-full font-bold shadow-md hover:bg-blue-500 transition"
        >
          👁️ 看一遍
        </button>
      </div>
    </div>
  );
}
