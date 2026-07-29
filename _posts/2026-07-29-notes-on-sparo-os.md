---
layout: post
lang: zh
title: BitFun 里三个能力怎么分工
description: 记录 Code Agent、Cowork Agent 和 Computer Use 在 BitFun 里的位置。
tags: [BitFun, agents, desktop]
---

在 BitFun 里，我更愿意把能力拆开看。

Code Agent 负责仓库内部的编辑、计划、调试和测试；Cowork Agent 更像处理协作、文档和知识整理；Computer Use 则负责那些必须真的操作桌面的动作。

这三个部分如果混在一起，系统会变得难以理解。拆开以后，BitFun 才更像一个可以持续扩展的 runtime，而不是一个什么都想做的壳。
