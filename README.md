# Playin30.com 网站（Astro + React）

英文版在网站根目录 `/`，中文版在 `/zh/`。两种语言的页面网址一一对应，搜索引擎会把它们识别为同一内容的两个语言版本。

## 快速开始

**在 StackBlitz 里打开：**把整个文件夹拖进 StackBlitz 的文件栏；或者先推到 GitHub，再打开 `https://stackblitz.com/github/你的用户名/仓库名`。

```bash
npm install
cp .env.example .env   # 按需填写，全部留空也能运行
npm run dev            # 本地预览
npm run build          # 生成静态网站到 dist/
```

## 部署

推荐 Cloudflare Pages 或 Netlify（免费）：

- 构建命令：`npm run build`
- 输出目录：`dist`
- 在托管平台的环境变量里填入 `.env` 里的那些值
- 绑定域名 playin30.com

## 目录结构

```
src/
  i18n/ui.ts               所有界面文案（中英）
  data/games.ts            出题机的游戏数据 + 可下载手册清单
  components/HomePage.astro 首页（中英共用一套结构）
  components/*.tsx         可交互的部分：出题机、分享、邮箱登记、语言提示
  layouts/Base.astro       所有 SEO 标签都在这里
  layouts/BlogPost.astro   博客文章页（含广告位）
  content/blog/en|zh/      博客文章（Markdown）
  illustrations/           手绘插画（每张都有 -en 和 -zh 两版）
public/
  booklets/                可下载的 PDF 手册
  og/                      社交分享卡片图
  robots.txt  ads.txt  favicon.svg
```

## SEO：已经做好的

- 每个页面都预先生成完整 HTML，搜索引擎不用执行 JavaScript 就能读到全部内容
- 每页独立的 title、description、canonical
- hreflang 中英互指，外加 x-default 指向英文版
- 自动生成 sitemap（含中英对应关系），robots.txt 已指向它
- Open Graph 和 Twitter 分享卡片（中英各一张 1200×630 图片）
- 结构化数据：首页 Organization + WebSite，文章页 Article + BreadcrumbList
- 语义化标签：每页一个 h1，插画都有文字说明
- 语言提示用横幅而不是自动跳转，避免搜索引擎只看到一种语言
- 字体自托管（@fontsource），不从 Google 加载，避免欧盟隐私合规问题
- 广告位预留固定高度，加载时页面不会跳动

## SEO：上线后要做的

1. 在 Google Search Console 和 Bing Webmaster Tools 验证网站，提交 `https://playin30.com/sitemap-index.xml`
2. 一周后在 Search Console 的"国际定位"和"页面"报告里检查 hreflang 有没有报错
3. 每周至少发一篇新文章，中英同时发

## AdSense

**原则：广告只出现在博客文章里。**首页、出题机和手册页面永远不放广告：那里的任务是建立信任、让家长下载手册，广告会直接伤害转化，也和"反屏幕"的品牌相冲突。

步骤：

1. **先有内容再申请。**AdSense 审核看重原创内容，建议至少有 15 到 20 篇有实质内容的文章再申请。现在有 3 篇中英对照文章。
2. 审核通过后，在 `.env` 里填入 `PUBLIC_ADSENSE_CLIENT`（ca-pub-开头）和两个广告位 ID；把 `public/ads.txt` 里的 `pub-0000000000000000` 换成你的发布商 ID。
3. **欧盟必须做：**在 AdSense 后台的"隐私权和消息"里开启"欧洲法规"同意提示。这是 Google 认证的同意管理工具，免费，会在欧盟和英国访客首次访问时弹出，不需要另外写代码。
4. 每篇文章有两个广告位：正文结束后一个，相关文章后一个。都不在首屏，不打断阅读。

在填入真实 ID 之前，广告位在正式网站上不显示任何东西；在本地开发模式下会显示一个虚线占位框，方便看排版。

## 博客：怎么写一篇新文章

1. 在 `src/content/blog/en/` 和 `src/content/blog/zh/` 各新建一个文件，**文件名（网址）必须相同**，例如 `paper-helicopter.md`
2. 开头的信息照着现有文章填：`title`、`description`（不超过 170 字符）、`pubDate`、`lang`、`tags`
3. 正文用 `##` 做小标题，文章结尾链接到首页出题机（英文 `/#try`，中文 `/zh/#try`）
4. 所有科学解释必须能用一句真话讲清；不确定的写法宁可不写

**接下来 10 篇的选题建议**（按家长的真实搜索意图排序）：

1. How to reduce screen time without fights（怎么减少孩子屏幕时间又不吵架）
2. Rainy day activities for 10 year olds at home（下雨天在家陪 10 岁孩子玩什么）
3. Road trip games for older kids（适合大孩子的自驾路上游戏）
4. Camping activities for kids aged 8 to 12（露营时和孩子玩什么）
5. Waiting room activities for kids（医院、办事大厅等候时玩什么）
6. Paper engineering challenges for kids（纸工程挑战合集）
7. Fermi estimation games for kids（费米估算游戏）
8. Science behind the paper helicopter（纸直升机的原理）
9. Screen-free birthday party games for 11 year olds（不用屏幕的生日派对游戏）
10. EU social media age limits: what parents should know（欧盟社交媒体年龄限制，家长需要知道什么，发布前务必核实最新进展）

## 按材料搜索

`src/data/library.ts` 是游戏库（动手挑战 + 零道具的口才、对话、韧性类游戏）：每个游戏标注了用到哪些材料。首页的搜索框按材料匹配（带同义词，比如搜「卷纸芯」也能找到「卫生纸筒」），再结合家长勾选的「我的百宝箱」（存在浏览器本地）排序，缺什么直接标出来。新增游戏时往 `LIBRARY` 里加一条；新增材料时记得在 `MATERIALS` 里补上同义词。

## 需要你补的占位内容

- `hello@playin30.com`：换成你真实的联系邮箱（页脚、隐私说明、结构化数据里都有）
- `.env` 里的邮箱登记接口：推荐 Formspree、Buttondown 或 Brevo，任何能接收 JSON POST 的都行。建议开启"双重确认"（用户点邮件里的确认链接才算订阅）
- 隐私说明页（`/privacy/` 和 `/zh/privacy/`）是草稿，上线前请按你的实际配置核对

## 手册现状

| 场景 | 英文 | 中文 |
|---|---|---|
| 今晚在家（纸柱子 + 潜水员 + 书页拔河） | 有 | 有 |
| 超人印章手工 + 印章卡补充页 | 有 | 有 |
| 百宝箱箱盖标签 + 箱内清单 | 有 | 有 |
| 说说看 / Just Talk（15 个零道具聊天游戏） | 有 | 有 |
| 充电站（纸桥 + 纸直升机） | 有 | 有 |
| 餐厅（叉子 + 三个话题） | 有 | 待做 |
| 车内口头版 | 待做 | 有 |
| 户外（秋冬：保温挑战 + 落叶降落 + 白气） | 有 | 有 |
| 户外（春夏） | 待做 | 待做 |

出题机里，没有对应手册的场景会把"打印"按钮换成"留个邮箱通知你"。新手册做好后，放进 `public/booklets/`，在 `src/data/games.ts` 的 `BOOKLETS` 里登记即可。
