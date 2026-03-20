# 顶好喜剧 — 官网（框架）

纯静态前端，使用 **Vite + React + TypeScript**。视觉方向：**黑白** + **Apple Human Interface Guidelines**（系统字体、安全区、最小触控尺寸、清晰层级）。

## 开发

```bash
npm install
npm run dev
```

## 构建（Cloudflare Pages）

- **Build command:** `npm run build`
- **Build output directory:** `dist`

在 Cloudflare Pages 中连接仓库后填入上述两项即可。若使用 Wrangler：

```bash
npx wrangler pages deploy dist --project-name=dinghao-comedy
```

## 目录结构（当前）

- `src/app/` — 应用根组件
- `src/components/layout/` — 站点壳层（顶栏 / 主内容区 / 页脚），仅占位结构
- `src/components/sections/` — Hero、节目时间轴等
- `src/styles/globals.css` — 全局设计令牌与布局样式

### 资源

- `public/images/left.png`、`public/images/right.png` — 节目区块左右竖条背景（顶对齐、随 sticky 区域全高）；若缺失则仅显示深色底。

后续可在此结构上增加页面、路由与文案。
