import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// 从 Markdown 内容中提取纯文本
function extractPlainText(markdown: string): string {
  if (!markdown) return '';

  return markdown
    // 移除代码块
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    // 移除 HTML 标签
    .replace(/<[^>]*>/g, '')
    // 移除图片
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // 移除链接但保留文本
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // 移除标题标记
    .replace(/^#{1,6}\s+/gm, '')
    // 移除粗体/斜体标记
    .replace(/\*\*([^*]*)\*\*/g, '$1')
    .replace(/\*([^*]*)\*/g, '$1')
    .replace(/__([^_]*)__/g, '$1')
    .replace(/_([^_]*)_/g, '$1')
    // 移除引用标记
    .replace(/^>\s+/gm, '')
    // 移除列表标记
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // 移除水平线
    .replace(/^[-*_]{3,}$/gm, '')
    // 移除多余空白
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const searchIndex = posts.map(post => {
    // 提取纯文本内容用于搜索
    const plainContent = extractPlainText(post.body || '');

    return {
      title: post.data.title,
      description: post.data.description || '',
      url: `/posts/${post.id.toLowerCase()}`,
      content: plainContent, // 完整的纯文本内容
      tags: post.data.tags || [],
      categories: post.data.categories || []
    };
  });

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
