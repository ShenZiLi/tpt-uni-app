# 实现太平通2.0微信小程序原型

## Goal

基于已确认的技术选型和核心页面设计，初始化 uni-app Vue3 TypeScript 原型工程，实现可在微信开发者工具预览的核心页面与本地 mock 交互流程。

## Requirements

- TBD

## Acceptance Criteria

- [ ] TBD

## Notes

- Keep `prd.md` focused on requirements, constraints, and acceptance criteria.
- Lightweight tasks can remain PRD-only.
- For complex tasks, add `design.md` for technical design and `implement.md` for execution planning before `task.py start`.
# 太平通 2.0 微信小程序原型实现

## 目标

基于已确认的技术选型和核心页面功能设计，交付一个可在微信开发者工具中预览、可用于汇报演示的 uni-app 原型工程。工程使用本地 Mock 数据，不接入真实业务服务。

## 范围

- 初始化 uni-app + Vue 3 + TypeScript 工程，并配置微信小程序构建入口。
- 建立“浅薰衣草 + 玻璃感白卡 + 深靛蓝 + 吉象 IP”视觉基础。
- 实现首页、AI 顾问、保单、家庭保障、保单健诊、闪赔协助、理赔进度、产品对比、健康行动、我的、主题设置等核心页面。
- 实现 Tab 切换、页面跳转、Mock 加载/成功/空态、表单提交和演示反馈。
- 为关键演示流程提供稳定的本地数据和可重复操作。

## 非范围

- 真实登录、保单接口、支付、核保、理赔审核、医疗结论和后台管理。
- 真实 AI、文件上传、身份授权和数据持久化。

## 验收标准

1. 安装依赖后可以执行微信小程序构建命令，并生成可导入微信开发者工具的产物。
2. 四个底部 Tab 可切换，核心卡片和按钮均可完成预期跳转。
3. 至少完整跑通三条演示链路：AI 问答 → 建议结果、家庭中心 → 保单健诊、闪赔协助 → 理赔进度。
4. 所有页面使用统一视觉令牌和可复用组件，不复制大段页面样式。
5. 页面在无网络环境下仍可展示主要内容，Mock 状态有明确反馈。
6. 通过类型检查/构建校验、`git diff --check`，并按项目规范提交本地 Git。
