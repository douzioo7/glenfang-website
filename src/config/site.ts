export const site = {
  name: '豆子的空间小站',
  url: 'https://glenfang.cc',
  description: '记录阅读、厨房里的练习、随笔与让生活更轻松的小工具。',
  author: '豆子',
  comments: {
    enabled: true,
    endpoint: 'https://comments.glenfang.cc',
  },
  intro: '把读过的书、做过的菜、偶然想到的事，慢慢收进这一方小小的空间。',
  about: {
    title: '留一点位置，给认真生活。',
    description:
      '这里不是追赶更新的地方，而是一册可以慢慢翻阅的记录：阅读时的停顿、厨房里的新发现，以及日常里不愿忘记的细节。',
  },
  contact: {
    email: '',
    github: '',
  },
} as const;

export const collections = {
  reading: {
    name: '读书笔记',
    eyebrow: 'READING NOTES',
    description: '读过的书，留下的思考，以及那些值得反复回味的观点。',
    accent: 'reading',
  },
  cooking: {
    name: '菜谱学习',
    eyebrow: 'KITCHEN NOTES',
    description: '从第一次尝试开始，记录做菜过程中的经验、失败和慢慢掌握的小技巧。',
    accent: 'cooking',
  },
  notes: {
    name: '随笔',
    eyebrow: 'SMALL THOUGHTS',
    description: '一些没有明确主题的文字，记录生活、工作，以及偶尔冒出来的想法。',
    accent: 'notes',
  },
} as const;

export const tools = [
  {
    title: '通用工具',
    description: '为日常任务准备的一组轻量实用工具。',
    url: 'https://omni.glenfang.cc',
    icon: '✦',
  },
  {
    title: 'PDF 编辑工具',
    description: '在线处理、编辑与整理 PDF 文件。',
    url: 'https://pdf.glenfang.cc',
    icon: '▤',
  },
  {
    title: '文件转换工具',
    description: '在常用文件格式之间快速转换。',
    url: 'https://convertx.glenfang.cc',
    icon: '↺',
  },
] as const;
