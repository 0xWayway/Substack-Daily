# 🌐 中英文翻译功能使用指南

## 🎯 功能概述

网站现在支持中英文切换，点击右上角的语言按钮即可切换。

**字体配置：**
- **中文标题**: Ma Shan Zheng（马善政楷书）
- **中文摘要/推荐理由**: 方正楷体简体
- **英文标题**: Cinzel Decorative
- **英文摘要/推荐理由**: Libre Caslon Display

---

## 📦 已完成的修改

### 1. **字体配置** (`app/layout.tsx`)

```typescript
// 添加了以下字体
import { 
  Ma_Shan_Zheng,           // 中文标题
  Cinzel_Decorative,       // 英文标题
  Libre_Caslon_Display     // 英文摘要
} from "next/font/google";

// 本地字体
import localFont from 'next/font/local';
const fangZhengKaiTi = localFont({
  src: './fonts/FangZhengKaiTiJianTi-1.ttf',  // 中文摘要
  variable: '--font-fangzheng-kaiti',
});
```

---

### 2. **语言切换组件** (`app/components/ArticleList.tsx`)

创建了客户端组件来处理：
- 语言状态管理（中文/英文）
- 根据语言动态切换字体
- 翻译文本内容

---

### 3. **翻译字典**

```typescript
const translations = {
  zh: {
    weeklyTitle: '当周精选',
    dailyTitle: '今日精选',
    today: '今日推荐',
    archive: '历史归档',
    about: '关于',
    readMore: '阅读原文',
    ...
  },
  en: {
    weeklyTitle: 'Weekly Picks',
    dailyTitle: "Today's Picks",
    today: 'Today',
    archive: 'Archive',
    about: 'About',
    readMore: 'Read More',
    ...
  },
}
```

---

## 🎨 字体应用规则

### 中文模式
```
标题（h1, h2, h3）: Ma Shan Zheng
摘要/推荐理由:     方正楷体简体
网站名称:          Ma Shan Zheng
导航:             默认字体
```

### 英文模式
```
标题（h1, h2, h3）: Cinzel Decorative
摘要/推荐理由:     Libre Caslon Display
网站名称:          Cinzel Decorative
导航:             默认字体
```

---

## 📁 文件结构

```
app/
├── layout.tsx                    # 字体配置
├── page.tsx                      # 服务器组件（数据获取）
├── components/
│   └── ArticleList.tsx           # 客户端组件（语言切换）
├── fonts/
│   ├── FangZhengKaiTiJianTi-1.ttf  # 需要添加
│   └── README.md                 # 字体说明
└── globals.css                   # 字体导入
```

---

## ⚙️ 如何使用

### 步骤 1：添加方正楷体字体文件

```bash
# 将字体文件复制到指定位置
cp FangZhengKaiTiJianTi-1.ttf /Users/wayfarer/Documents/substack-daily/app/fonts/
```

### 步骤 2：运行开发服务器

```bash
cd /Users/wayfarer/Documents/substack-daily
npm run dev
```

### 步骤 3：测试语言切换

```
1. 打开浏览器：http://localhost:3000
2. 点击右上角的语言按钮
3. 观察：
   - 文字从中文切换到英文
   - 标题字体从 Ma Shan Zheng 切换到 Cinzel Decorative
   - 摘要字体从方正楷体切换到 Libre Caslon Display
```

---

## 🎯 UI 展示

### 中文模式

```
┌─────────────────────────────────────────────┐
│  Substack Daily        今日推荐 历史归档 关于  [EN] │
│  (Ma Shan Zheng)                            │
├─────────────────────────────────────────────┤
│                                             │
│  当周精选                                     │
│  (Ma Shan Zheng)                            │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [封面图]                             │   │
│  ├─────────────────────────────────────┤   │
│  │ 文章标题 (Ma Shan Zheng)             │   │
│  │ 作者 · 日期                           │   │
│  │ 💡 推荐理由 (方正楷体)                │   │
│  │ • 要点1 (方正楷体)                    │   │
│  │ • 要点2                              │   │
│  │ [阅读原文]                            │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### 英文模式

```
┌─────────────────────────────────────────────┐
│  Substack Daily        Today Archive About  [中] │
│  (Cinzel Decorative)                        │
├─────────────────────────────────────────────┤
│                                             │
│  Weekly Picks                               │
│  (Cinzel Decorative)                        │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ [封面图]                             │   │
│  ├─────────────────────────────────────┤   │
│  │ Article Title (Cinzel Decorative)   │   │
│  │ Author · Date                        │   │
│  │ 💡 Reason (Libre Caslon Display)    │   │
│  │ • Point 1 (Libre Caslon Display)    │   │
│  │ • Point 2                            │   │
│  │ [Read More]                          │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

---

## 🔧 代码说明

### 字体动态切换

```typescript
// 根据语言选择字体
const getTitleFont = (isEn: boolean) => 
  isEn ? 'var(--font-cinzel)' : 'var(--font-ma-shan-zheng)';

const getBodyFont = (isEn: boolean) => 
  isEn ? 'var(--font-libre-caslon)' : 'var(--font-fangzheng-kaiti)';

// 应用到标题
<h1 style={{ fontFamily: getTitleFont(lang === 'en') }}>
  {t.weeklyTitle}
</h1>

// 应用到摘要
<p style={{ fontFamily: getBodyFont(lang === 'en') }}>
  {item.reason}
</p>
```

---

## 📝 翻译内容

当前**只翻译了 UI 文本**（按钮、标题等），**文章内容本身不翻译**。

如果需要翻译文章内容，有以下选项：

### 选项 1：在 n8n 中预先翻译

修改 n8n 工作流，使用 GPT 翻译文章内容：

```
GPT Curate & Format
  ↓
GPT Translate to English
  ↓
Format for Supabase (包含中英文)
```

### 选项 2：实时翻译（不推荐）

在前端调用翻译 API，但这会：
- 增加页面加载时间
- 增加 API 成本
- 降低用户体验

### 选项 3：手动翻译

如果使用手动输入工作流，可以直接输入中英文双语内容：

```json
{
  "title": "GPT-5 的未来影响",
  "title_en": "The Future Impact of GPT-5",
  "reason": "基于 OpenAI 内部消息...",
  "reason_en": "Based on OpenAI insider information...",
  ...
}
```

---

## ⚠️ 注意事项

### 1. 字体文件

**必须添加 `FangZhengKaiTiJianTi-1.ttf` 到 `app/fonts/` 目录**，否则中文摘要会回退到默认字体。

### 2. 文章内容

当前版本**不翻译文章内容**（标题、作者、摘要等），只翻译 UI 文本。

如需翻译文章内容，请：
- 在 Supabase 中添加英文字段（`title_en`, `reason_en`, `summary_en`）
- 修改 n8n 工作流添加翻译步骤
- 修改前端组件读取对应语言的字段

### 3. 性能

语言切换是**客户端状态**，切换时：
- ✅ 瞬间完成（无需请求）
- ✅ 不重新加载页面
- ✅ 字体平滑过渡

---

## 🚀 扩展功能

### 添加更多语言

修改 `ArticleList.tsx`：

```typescript
const translations = {
  zh: { ... },
  en: { ... },
  ja: {  // 日语
    weeklyTitle: '今週のおすすめ',
    ...
  },
}
```

### 保存语言偏好

使用 localStorage：

```typescript
const [lang, setLang] = useState<'zh' | 'en'>(() => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('lang') as 'zh' | 'en' || 'zh';
  }
  return 'zh';
});

const switchLang = (newLang: 'zh' | 'en') => {
  setLang(newLang);
  localStorage.setItem('lang', newLang);
};
```

---

## 🎉 总结

### 已实现

- ✅ 中英文语言切换
- ✅ 字体动态切换（4 种字体）
- ✅ UI 文本翻译
- ✅ 平滑过渡动画

### 未实现（可选）

- ⚠️ 文章内容翻译
- ⚠️ 语言偏好保存
- ⚠️ 自动检测浏览器语言

---

**字体配置完成！现在只需添加方正楷体字体文件，然后运行测试！** 🚀

