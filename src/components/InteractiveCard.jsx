'use client'; // 因为有播放声音的交互，必须是客户端组件

import { useState, useRef } from 'react';
import Image from 'next/image';

// 这是一个帮助函数，用来处理 Strapi 的图片/音频 URL
// 兼容 Strapi v4 和 v5 的不同数据结构
const getFullUrl = (file) => {
  if (!file) return null;
  // 尝试获取 URL，不同版本的 Strapi 结构可能不同
  const url = file.url || file.data?.attributes?.url || file.data?.url;
  if (!url) return null;
  
  // 如果已经是完整链接（如云存储）则直接返回，否则加上本地服务器地址
  const STRAPI_BASE = 'http://localhost:1337'; 
  return url.startsWith('http') ? url : `${STRAPI_BASE}${url}`;
};

export default function InteractiveCard({ mediaData, description }) {
  // 解析数据
  const imageUrl = getFullUrl(mediaData?.main_image);
  const wordAudioUrl = getFullUrl(mediaData?.pronunciation_audio);
  const soundAudioUrl = getFullUrl(mediaData?.ambient_sound);

  // 音频引用
  const wordAudioRef = useRef(null);
  const soundAudioRef = useRef(null);

  // 播放函数
  const playAudio = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // 每次点击从头播放
      audioRef.current.play();
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl flex flex-col gap-6">
      
      {/* 1. 图片区域 */}
      <div className="relative aspect-video w-full bg-gray-100 rounded-2xl overflow-hidden shadow-inner border-4 border-white">
        {imageUrl ? (
          // 使用 next/image 需要配置域名，如果你嫌麻烦，暂时可以用普通的 <img /> 标签代替
          <img 
            src={imageUrl} 
            alt="Card Image" 
            className="w-full h-full object-cover hover:scale-105 transition duration-500 cursor-pointer"
            onClick={() => playAudio(wordAudioRef)} // 点击图片也读单词
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">暂无图片</div>
        )}
      </div>

      {/* 2. 音频控制区 (隐藏的 audio 标签 + 漂亮的按钮) */}
      <div className="flex justify-center gap-4">
        {/* 单词读音 */}
        {wordAudioUrl && (
          <>
            <audio ref={wordAudioRef} src={wordAudioUrl} />
            <button 
              onClick={() => playAudio(wordAudioRef)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-600 rounded-full font-bold shadow-sm hover:bg-blue-200 active:scale-95 transition"
            >
              🔊 读单词
            </button>
          </>
        )}

        {/* 环境音效 (如虎啸) */}
        {soundAudioUrl && (
          <>
            <audio ref={soundAudioRef} src={soundAudioUrl} />
            <button 
              onClick={() => playAudio(soundAudioRef)}
              className="flex items-center gap-2 px-6 py-3 bg-orange-100 text-orange-600 rounded-full font-bold shadow-sm hover:bg-orange-200 active:scale-95 transition"
            >
              🐯 听声音
            </button>
          </>
        )}
      </div>

      {/* 3. 文字简介 */}
      <p className="text-xl text-gray-700 leading-relaxed font-medium text-center">
        {description}
      </p>
    </div>
  );
}
