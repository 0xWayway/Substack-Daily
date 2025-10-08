'use client';

import { useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  return (
    <button
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      className="px-3 py-1 rounded-full border transition-all duration-300 hover:bg-opacity-10"
      style={{
        borderColor: '#1A3E37',
        color: '#1A3E37',
        fontSize: '0.875rem',
      }}
    >
      {lang === 'zh' ? 'EN' : '中'}
    </button>
  );
}

