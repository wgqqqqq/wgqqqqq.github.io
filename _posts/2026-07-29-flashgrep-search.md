---
layout: post
lang: zh
title: flashgrep 在解决什么
description: flashgrep 不是简单的 grep 封装，而是给 agent 用的大仓库搜索基础设施。
tags: [flashgrep, search, indexing]
permalink: /notes/flashgrep-search/
---

flashgrep 解决的不是“再做一个搜索工具”的问题，而是“agent 在真实代码仓库里搜索太慢”的问题。

它的核心是两段式：先用字符级倒排索引做候选召回，再用精确 regex 验证。这样 regex 不再是全库硬扫，而是在候选集合上做更小范围的计算。

为了让这件事能长期工作，它还得处理 base snapshot、dirty catalog、published overlay、daemon 协议、MCP 接入和 workspace 状态恢复。

我写 flashgrep 的时候，实际上是在把“搜索”这件事做成 agent 可以依赖的基础设施。
