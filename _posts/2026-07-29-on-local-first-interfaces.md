---
layout: post
lang: zh
title: 为什么我坚持本地优先
description: 本地状态、可追踪行为和桌面工作流，决定了 agent 工具是否真的可用。
tags: [local-first, runtime, interfaces]
permalink: /notes/local-first/
---

我一直会回到本地优先这个方向，因为 agent 工具要做的往往不是“一次性回答”，而是持续工作。

长任务需要状态，状态需要落地，落地之后才有调试、恢复和复用的可能。把这些东西留在本地，比把它们全塞进一个远端黑盒里更适合做 agent runtime。

所以我更愿意把 filesystem、terminal、browser 和 computer use 放进一个本地可见的工作面里，让系统做过什么、卡在哪里、下一步是什么都能看清楚。
