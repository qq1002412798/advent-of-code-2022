# Advent of Code 2022

## Git commit message

格式如下，具体例子可以使用 `git log` 查看，尽可能避免无意义的 message 出现。

```
[类型]: [简短描述]

[详细描述，可选]
```

类型如下：

- feat: 新功能
- fix: 修补 bug
- docs: 文档
- style: 代码格式
- refactor: 重构，即不是新增功能，也不是修改 bug 的代码变动
- test: 测试
- chore: 构建过程或辅助工具的变动

## Project Structure Rules

每一天的题目都新开一个为文件夹（e.g. `day_01`）
每一个 Part(e.g. `part_one.js`) 为一个文件。

## How to add a Solution

### 1. Instaill the deps
> yarn

### 2. Create a new directory for a new Day, and download the `input.txt` in it.

### 3. Write your solution in part_xxx.js, and Run it!

> e.g.
> node ./day_01/part_one.js
