# 🎨 字体配置总结

## 📋 字体列表

### Google Fonts（自动加载）
- ✅ **Ma Shan Zheng** - 中文标题
- ✅ **Cinzel Decorative** - 英文标题
- ✅ **Libre Caslon Display** - 英文摘要/推荐理由

### 本地字体（需要添加）
- ⚠️ **FangZhengKaiTiJianTi-1.ttf** - 中文摘要/推荐理由

---

## 📦 字体应用规则

| 元素 | 中文 | 英文 |
|------|------|------|
| **网站标题** | Ma Shan Zheng | Cinzel Decorative |
| **页面标题** (h1) | Ma Shan Zheng | Cinzel Decorative |
| **文章标题** (h2, h3) | Ma Shan Zheng | Cinzel Decorative |
| **推荐理由** | 方正楷体简体 | Libre Caslon Display |
| **要点摘要** | 方正楷体简体 | Libre Caslon Display |
| **导航/按钮** | 默认 Inter | 默认 Inter |

---

## ✅ 已完成

1. ✅ 配置 Google Fonts（3 个字体）
2. ✅ 配置本地字体加载
3. ✅ 创建语言切换组件
4. ✅ 实现字体动态切换
5. ✅ 更新 CSS 变量

---

## ⚠️ 待完成

### 步骤 1：添加方正楷体字体文件

```bash
# 将字体文件放到这个位置
/Users/wayfarer/Documents/substack-daily/app/fonts/FangZhengKaiTiJianTi-1.ttf
```

**如果没有字体文件：**
- 网站仍然可以运行
- 中文摘要会回退到系统默认字体
- 建议添加字体文件以达到最佳效果

---

### 步骤 2：测试

```bash
cd /Users/wayfarer/Documents/substack-daily
npm run dev
```

打开：http://localhost:3000

**测试点：**
1. 点击右上角语言按钮
2. 观察字体变化
3. 检查标题是否使用正确字体
4. 检查摘要是否使用正确字体

---

## 🎯 字体文件位置

```
substack-daily/
├── app/
│   ├── fonts/
│   │   ├── FangZhengKaiTiJianTi-1.ttf  ← 需要添加
│   │   └── README.md
│   ├── components/
│   │   └── ArticleList.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
```

---

## 📝 CSS 变量

```css
:root {
  --font-ma-shan-zheng: 'Ma Shan Zheng', cursive;
  --font-cinzel: 'Cinzel Decorative', serif;
  --font-libre-caslon: 'Libre Caslon Display', serif;
  --font-fangzheng-kaiti: 'FangZhengKaiTi', serif;
}
```

---

## 🔧 如何修改字体

### 修改中文标题字体

在 `app/layout.tsx`：

```typescript
const maShanZheng = Ma_Shan_Zheng({
  variable: "--font-ma-shan-zheng",
  weight: "400",
  subsets: ["latin"],
});
```

改为其他 Google Font：

```typescript
import { Zhi_Mang_Xing } from "next/font/google";

const zhiMangXing = Zhi_Mang_Xing({
  variable: "--font-chinese-title",
  weight: "400",
  subsets: ["latin"],
});
```

---

## 💡 字体预览

### Ma Shan Zheng（中文标题）
```
当周精选
今日精选
Substack Daily
```
**风格：** 书法、优雅、文艺

---

### Cinzel Decorative（英文标题）
```
Weekly Picks
Today's Picks
SUBSTACK DAILY
```
**风格：** 古典、装饰性、正式

---

### Libre Caslon Display（英文摘要）
```
This article provides unique insights 
into the future of AI technology.
```
**风格：** 优雅、可读性强、适合长文

---

### 方正楷体简体（中文摘要）
```
这篇文章提供了关于 AI 技术
未来发展的独特洞见。
```
**风格：** 传统、手写感、舒适

---

## 🎉 完成！

**只需添加方正楷体字体文件，即可使用所有功能！** 🚀

详细说明：`TRANSLATION-FEATURE-GUIDE.md`

