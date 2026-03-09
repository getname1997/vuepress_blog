# 安装claude code

```
npm install -g @anthropic-ai/claude-code
```



配置key （我们使用百炼大模型的 glm-4.7 不支持   使用qwen3-max）



```json
# MacOS & Linux 为 `~/.claude/settings.json`
# Windows 为`用户目录/.claude/settings.json`
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "sk-a020dd52bad2445798883d11e242bf42",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "qwen-plus",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "qwen3-max",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "qwen3-max",
    "ANTHROPIC_BASE_URL": "https://dashscope.aliyuncs.com/apps/anthropic",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": 1
  }
}


```

~~~json
# 再编辑或新增 `.claude.json` 文件
# MacOS & Linux 为 `~/.claude.json`
# Windows 为`用户目录/.claude.json`
# 新增 `hasCompletedOnboarding` 参数
{
  "hasCompletedOnboarding": true
}
~~~

 claude 命令里面 安装  ui-ux-pro-max-skill  安装 （命令行先 claude -> /init ）

```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

项目初始化

~~~

# Install CLI globally
npm install -g uipro-cli

# Go to your project
cd /path/to/your/project

# Install for your AI assistant
uipro init --ai claude      # Claude Code
~~~



使用 正常使用claude即可