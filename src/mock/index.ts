import type { Policy, TodoItem } from '@/types'
export const todos: TodoItem[] = [
  { id: 'renewal', label: '续费提醒', title: '医疗险将在 18 天后续费', action: '去查看', path: '/pages/policy/detail?id=health', tone: 'orange' },
  { id: 'claim', label: '待补材料', title: '理赔申请还差 1 份材料', action: '去补充', path: '/pages/service/claim-progress', tone: 'purple' },
  { id: 'diagnosis', label: '保障健诊', title: '家庭保障有 2 项待关注', action: '去健诊', path: '/pages/family/diagnosis', tone: 'green' },
]
export const policies: Policy[] = [
  { id: 'health', name: '全能医疗保障计划', type: '医疗险', insured: '我 · Viz', status: '保障中', renewal: '2025-10-03', amount: '¥ 300 万' },
  { id: 'accident', name: '安心意外保障', type: '意外险', insured: '我 · Viz', status: '保障中', renewal: '2025-12-18', amount: '¥ 50 万' },
  { id: 'life', name: '家庭定期寿险', type: '寿险', insured: '家人 · 3 人', status: '保障中', renewal: '2026-03-12', amount: '¥ 100 万' },
]
export const quickServices = [
  { icon: '▣', title: '保单健诊', desc: '看看保障是否完整', path: '/pages/family/diagnosis' }, { icon: '↗', title: '闪赔协助', desc: '快速准备理赔材料', path: '/pages/service/claim' },
  { icon: '⌕', title: '产品对比', desc: '把复杂条款讲明白', path: '/pages/service/compare' }, { icon: '♡', title: '健康行动', desc: '每日一点小目标', path: '/pages/service/health' },
]
export const askJixiang = (question: string) => new Promise<string>((resolve) => setTimeout(() => resolve(`关于“${question}”，吉象建议先查看保障范围和续费时间。我已把相关入口整理好了。`), 450))
