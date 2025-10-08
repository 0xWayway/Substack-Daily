# 🎨 新设计说明

## 📋 设计灵感

参考 **Works in Progress** 的设计风格，重新设计了网站布局。

---

## 🎯 核心特点

### 1. **布局结构**
```
┌─────────────────────────────────────────┐
│  Header (导航 + 语言切换)                   │
├─────────────────┬───────────┬───────────┤
│                 │  Card 2   │  Card 3   │
│   Spotlight     ├───────────┼───────────┤
│   (左侧大卡片)   │  Card 4   │  Card 5   │
│                 │           │           │
└─────────────────┴───────────┴───────────┘
```

- **左侧 Spotlight**：占据 2 行高度的大型特色卡片
- **右侧网格**：2×2 的小卡片布局
- **响应式**：移动端自动变为单列

---

## 🎨 配色方案

### 主色调
```css
背景色: #F5F4F0  /* 温暖的米白色 */
文字色: #1A1A1A  /* 深黑色 */
边框色: #E5E3DD  /* 浅灰棕色 */
```

### Spotlight 卡片
```css
背景色: #4A5568  /* 深灰蓝色 */
文字色: #FFFFFF  /* 白色 */
标签背景: #2D3748  /* 更深的蓝灰色 */
```

### 普通卡片
```css
背景色: #FFFFFF  /* 纯白色 */
文字色: #1A1A1A  /* 深黑色 */
次要文字: #666666  /* 中灰色 */
边框: #E5E3DD    /* 浅灰棕色 */
```

---

## 📐 布局细节

### Spotlight 卡片（左侧大卡片）

**结构：**
1. **顶部标签**：
   - "本周焦点" / "Spotlight" 标签
   - "第 N 期" / "Issue N" 标签
   
2. **封面图片**：
   - 16:9 比例
   - 圆角
   - 居中显示

3. **内容区域**：
   - 大标题（3xl）
   - 作者信息
   - 推荐理由（完整显示）
   - "阅读原文 →" 链接
   
4. **底部标签**：
   - AI/Tech 分类标签

**特点：**
- 深色背景 (#4A5568)
- 白色文字
- 悬停时轻微放大（scale: 1.02）

---

### 普通卡片（右侧 2×2 网格）

**结构：**
1. **标题**：xl 大小，最多 3 行
2. **作者信息**：小字体，灰色
3. **推荐理由**：小字体，最多 3 行
4. **"阅读原文 →" 链接**
5. **底部标签**：Analysis / Research / Industry / Insights

**特点：**
- 白色背景
- 细边框
- 悬停时轻微放大
- Flexbox 布局确保内容对齐

---

## 🖼️ 视觉效果

### 边框
```css
border: 1px solid #E5E3DD;
border-radius: 0.5rem; /* 8px */
```

### 悬停动画
```css
transition: transform 0.3s ease;
hover: transform scale(1.02);
```

### 标签样式
```css
Spotlight 标签:
  - 背景: #2D3748
  - 文字: 白色
  - 圆角: 4px

普通标签:
  - 背景: #F5F4F0
  - 文字: #666
  - 圆角: 4px
```

---

## 📱 响应式设计

### 桌面（lg 及以上）
```
Grid: 2 columns
- 左侧: 1 column, 2 rows (Spotlight)
- 右侧: 2×2 grid
```

### 移动端（lg 以下）
```
Grid: 1 column
- 所有卡片垂直堆叠
- Spotlight 卡片优先显示
```

---

## 🎭 字体配置

### 中文模式
```
标题: Ma Shan Zheng（书法风格）
正文: 方正楷体简体
```

### 英文模式
```
标题: Cinzel Decorative（古典装饰）
正文: Libre Caslon Display（优雅衬线）
```

---

## 🔧 关键组件

### Header
```
- 左侧: Logo (Ma Shan Zheng / Cinzel Decorative)
- 右侧: 导航 + 语言切换按钮
- 底部: 细边框分隔
```

### 语言切换按钮
```
- 边框按钮
- 悬停时: 黑底白字
- 平滑过渡
```

### "阅读原文" 链接
```
- 下划线
- 悬停时: opacity 降低
- "→" 箭头（英文）
```

---

## 📊 间距系统

```css
容器最大宽度: max-w-7xl (1280px)
水平内边距: px-6 (24px)
垂直内边距: py-12 (48px)

卡片间距: gap-6 (24px)
卡片内边距: p-6 (24px)

标题下边距: mb-4 (16px)
段落下边距: mb-6 (24px)
```

---

## 🎯 标签系统

### Spotlight 卡片
```
"本周焦点" / "Spotlight"
"第 N 期" / "Issue N"
"AI/Tech"
```

### 普通卡片
```
Card 1: Analysis
Card 2: Research
Card 3: Industry
Card 4: Insights
```

---

## 💡 设计亮点

### 1. **视觉层次清晰**
- Spotlight 卡片通过深色背景突出
- 大小对比强烈（左大右小）
- 标签系统区分内容类型

### 2. **现代极简风格**
- 细边框
- 简洁标签
- 充足留白
- 柔和配色

### 3. **交互友好**
- 悬停动画
- 下划线偏移
- 按钮状态变化

### 4. **品牌一致性**
- 统一配色
- 一致的圆角
- 规范的间距

---

## 🔄 与旧版对比

| 特性 | 旧版 | 新版 |
|------|------|------|
| **布局** | 1 大 + 下方网格 | 左大 + 右 2×2 |
| **配色** | #FAF9F6 米白 | #F5F4F0 温暖米白 |
| **主色** | #1A3E37 深绿 | #4A5568 深灰蓝 |
| **卡片** | 圆角 + 阴影 | 圆角 + 细边框 |
| **封面** | 大图 | Spotlight 有图 |
| **标签** | 无 | 有分类标签 |
| **视觉** | 优雅温暖 | 现代专业 |

---

## 📝 实现细节

### Spotlight 卡片核心代码
```tsx
<article 
  className="lg:row-span-2 rounded-lg"
  style={{
    backgroundColor: '#4A5568',
    border: '1px solid #E5E3DD',
  }}
>
  {/* 标签 */}
  <div className="flex gap-2 p-4">
    <span style={{ 
      backgroundColor: '#2D3748', 
      color: 'white' 
    }}>
      Spotlight
    </span>
  </div>
  
  {/* 图片 */}
  {cover && <img src={cover} />}
  
  {/* 内容 */}
  <div className="p-6" style={{ color: 'white' }}>
    <h2>{title}</h2>
    <p>Words by {author}</p>
    <p>{reason}</p>
    <a href={url}>Read more →</a>
  </div>
</article>
```

### 网格卡片核心代码
```tsx
<article 
  className="rounded-lg p-6"
  style={{
    backgroundColor: 'white',
    border: '1px solid #E5E3DD',
  }}
>
  <h3>{title}</h3>
  <p>Words by {author}</p>
  <p>{reason}</p>
  <a href={url}>Read more →</a>
  
  {/* 底部标签 */}
  <div className="mt-4 pt-4 border-t">
    <span>Analysis</span>
  </div>
</article>
```

---

## 🚀 部署步骤

1. **已完成**：
   - ✅ 重新设计组件
   - ✅ 更新配色方案
   - ✅ 添加标签系统
   - ✅ 实现响应式布局

2. **测试**：
```bash
npm run dev
```

3. **检查**：
   - ✅ 桌面端显示（左大右 2×2）
   - ✅ 移动端显示（垂直堆叠）
   - ✅ 悬停动画
   - ✅ 语言切换
   - ✅ 字体切换

---

## 🎉 完成！

新设计参考 Works in Progress 的风格：
- ✅ 左侧大 Spotlight 卡片
- ✅ 右侧 2×2 网格
- ✅ 深灰蓝 + 米白配色
- ✅ 细边框 + 标签系统
- ✅ 现代极简风格

**立即查看效果！** 🚀

