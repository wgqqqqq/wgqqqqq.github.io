---
layout: post
lang: en
title: What flashgrep is solving
description: flashgrep is search infrastructure for agents working in large repositories.
tags: [flashgrep, search, indexing]
permalink: /en/notes/flashgrep-search/
---

flashgrep is not just another search wrapper. It is meant to solve a very specific problem: agent search is too slow in real codebases.

The core is two-stage: first recall candidate files through a character-level inverted index, then run exact regex verification. That moves regex from a full-repo scan to a much smaller candidate set.

To keep that useful over time, it also has to deal with base snapshots, dirty catalogs, published overlays, daemon protocols, MCP integration, and workspace-state recovery.

When I work on flashgrep, I am really trying to turn search into infrastructure that agents can depend on.
