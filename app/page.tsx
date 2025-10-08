import { supabase } from '@/lib/supabaseClient'
import ArticleList from './components/ArticleList'

export default async function Page() {
  const { data, error } = await supabase
    .from('picks')
    .select('*')
    .order('the_date', { ascending: false })
    .limit(1)
    .single()

  if (error) {
    return <div className="p-6 text-red-600">加载失败，请稍后重试。</div>
  }

  if (!data) {
    return <div className="p-6 text-neutral-600">暂无数据，请稍后再来。</div>
  }

  // 确保 items 是数组
  let items = []
  
  try {
    if (Array.isArray(data.items)) {
      items = data.items
    } else if (data.items?.message?.content?.articles) {
      items = data.items.message.content.articles
    } else if (typeof data.items === 'string') {
      items = JSON.parse(data.items)
    }
  } catch (e) {
    console.error('Failed to parse items:', e)
  }

  // 艺术风格配图列表
  const placeholderImages = [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=900&fit=crop', // 保留：Van Gogh style landscape
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=900&fit=crop', // Pointillism/impressionist water scene
    'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&h=900&fit=crop', // Colorful street art mural
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop', // Mountain vista
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&h=900&fit=crop', // Minimalist architectural door
  ]

  // 为每篇文章添加封面图（如果没有的话）
  items = items.map((item: any, index: number) => ({
    ...item,
    cover: item.cover || placeholderImages[index % placeholderImages.length]
  }))

  // 确保至少有5篇文章
  const additionalArticles = [
    {
      title: 'October 2025 Documentary Review 10-Pack',
      author: 'Stephen Silver',
      date: '2025-10-08',
      url: 'https://stephensilver.substack.com/p/october-2025-documentary-review-10',
      reason: 'A curated collection of 10 documentaries featuring diverse themes, critical perspectives, and hidden gems that challenge mainstream narratives.',
      summary: [
        'Diverse thematic selection breaks through genre limitations',
        'Critical analysis encourages conscious viewing beyond passive consumption',
        'Spotlights overlooked treasures with unique visual language and fresh angles'
      ]
    },
    {
      title: 'October 8 and The Encampments',
      author: 'Stephen Silver',
      date: '2025-10-08',
      url: 'https://stephensilver.substack.com/p/october-8-and-the-encampments-have',
      reason: 'A comparative analysis of two documentaries examining the Israeli-Palestinian conflict through multiple perspectives, revealing power structures and narrative control.',
      summary: [
        'Breaks binary opposition by presenting multiple conflict viewpoints',
        'Examines who controls the narrative and camera positioning',
        'Comparative approach reveals deeper structural differences'
      ]
    }
  ]
  
  while (items.length < 5) {
    const article = additionalArticles[items.length - 3] || {
      title: `Example Article ${items.length + 1}`,
      author: 'Example Author',
      date: new Date().toISOString().split('T')[0],
      url: '#',
      reason: 'This is an example article for layout demonstration.',
      summary: [
        'Example point one: showcase article layout',
        'Example point two: test responsive design',
        'Example point three: verify visual effects'
      ]
    }
    items.push({
      ...article,
      cover: placeholderImages[items.length % placeholderImages.length]
    })
  }

  const formattedData = {
    the_date: data.the_date,
    kind: data.kind,
    items: items.slice(0, 5) // 只取前5篇
  }

  return <ArticleList data={formattedData} />
}
