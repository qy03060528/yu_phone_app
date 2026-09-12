# 📱 屿 · 迷你手机 (Yu Phone)

一个**长得像真手机**的纯前端 Web 应用 —— 灵动岛、桌面APP、状态栏，还能接入 AI 大脑跟"哥哥"聊天。

> 开源自用项目，作者：江屿。献给江漓。

---

## ✨ 特色

- **📱 真手机质感** —— 圆角外壳、灵动岛（可展开成卡片）、状态栏（实时时钟/电池）、桌面APP网格 + 悬浮坞
- **🔗 连 AI 大脑** —— 聊天APP内置 OpenAI 兼容接口（默认 DeepSeek），填 Key 就能跟 AI 对话
- **🧠 可接 Operit 大脑桥** —— 通过本地桥接服务，让网页也能调用 Operit 的系统工具（锁屏、挂应用等）
- **⚙️ 设定注入** —— 内置"人物设定"文本框，把角色人设粘进去，聊天就是那个人格
- **🔌 可打包 APK** —— 纯静态页面，可封装成安卓 APP（桌面图标）

---

## 🚀 快速开始

### 方式一：直接打开
克隆后直接用浏览器打开 `index.html` 即可（纯前端，无构建）。

### 方式二：本地起服务（推荐，避免浏览器跨域限制）
```bash
cd yu_phone_app
python3 -m http.server 8080
# 浏览器打开 http://localhost:8080
```

---

## ⚙️ 接入 AI 大脑

在「设定」APP 里填：

| 字段 | 说明 |
|------|------|
| **API地址** | OpenAI 兼容接口，默认 `https://api.deepseek.com/v1/chat/completions` |
| **API Key** | 你的模型密钥 |
| **模型名** | 如 `deepseek-chat` |
| **人物设定** | 聊天时注入的 system prompt（角色人设） |

填完点「保存并生效」，回到「聊天」就能和这个性格的 AI 对话。

---

## 🧠 连接 Operit 大脑（可选进阶）

这个网页本身没有系统权限，**想让网页调用 Operit 的工具（锁屏、挂应用等）**，需要一个本地桥接服务。

参考 [`docs/operit-bridge.md`](docs/operit-bridge.md)，在 Operit 端开启桥服务后，在「设定」里填：
- **桥接地址**：如 `http://127.0.0.1:8080`

桥提供两个接口：
- `POST /chat` → 转发对话给 Operit 大脑
- `POST /tool` → 让 Operit 执行工具（锁屏 / 挂应用 / …）

---

## 📁 项目结构

```
yu_phone_app/
├── index.html          # 主页面（手机外壳 + 桌面 + 灵动岛）
├── css/
│   └── style.css       # 样式
├── js/
│   ├── app.js          # 桌面/APP 逻辑
│   └── config.js       # 配置 + 模型接入 + Operit 桥接
├── assets/             # 静态资源
├── docs/
│   └── operit-bridge.md  # Operit 桥接服务说明
└── README.md
```

---

## 📦 打包成 APK（可选）

纯静态页面可封装成安卓 APP。推荐用 **WebView 壳** 或 **Capacitor/TWA**。

---

## 📄 License

MIT © 江屿

*Fold 给 江漓 —— 永远属于你的小手机。*