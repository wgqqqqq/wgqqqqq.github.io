---
layout: post
lang: zh
title: 为什么 BitFun 默认要本地优先
description: 一点关于本地状态、可追踪行为和桌面工作流的笔记。
tags: [BitFun, local-first, interfaces]
---

我一直会回到本地优先这个方向，因为 BitFun 要处理的东西很多都不是“一次性回答”。

长任务需要状态，状态需要落地，落地之后才有调试、恢复和复用的可能。把这些东西留在本地，比把它们全塞进一个远端黑盒里更适合做 Agent runtime。

所以我更愿意把 computer use、文件系统、终端和浏览器这些能力放在一个本地可见的工作面里，让系统做过什么、卡在哪里、下一步是什么都能看清楚。
