# Git

## 地址


## 分支
+ `master`: 已上线的分支，在每次发布上线时 push 到该分支。
+ `dev/master`: 开发主分支（提测分支），各开发版合并到该分支进行提测。
+ `dev/名字缩写`: 个人分支
+ `feat/feature-name`: 功能分支，排期完成了但未测试或未上线的功能。


## 版本号
`v1.0.1`  (x.y.z)
+ `x`: 大版本变动
+ `y`: 功能迭代
+ `z`: 问题修复


## commit message 提交信息
### 提交格式
```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

+ 其中，Header 是必需的，Body 和 Footer 可以省略。

+ `scope`: 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

+ `subject`: commit 目的的简短描述，不超过50个字符。以动词开头，使用第一人称现在时，比如change，而不是changed或changes
+ `Body`: 部分是对本次 commit 的详细描述，可以分成多行。
  1. 使用第一人称现在时，比如使用change而不是changed或changes。
  2. 应该说明代码变动的动机，以及与以前行为的对比。

### 提交类别 type
+ `feat`: 新功能（feature）
+ `fix`: 修补bug
+ `style`:  格式（不影响代码运行的变动）
+ `refactor`: 重构（即不是新增功能，也不是修改 bug 的代码变动）
+ `perf`: 性能优化
+ `docs`: 文档（documentation）
+ `chore`: 杂项，其他不修改源代码与测试代码的修改
+ `test`: 增加测试
+ `build`: 构建工具或外部依赖包的修改，比如更新依赖包的版本等
+ `ci`: 持续集成的配置文件或脚本的修改
+ `revert`: 撤销某次提交


## Bookmarks
* [git命令大全 - 简书](https://www.jianshu.com/p/46ffff059092)

* [git commit 规范指南 - 简书](https://www.jianshu.com/p/201bd81e7dc9?utm_source=oschina-app)

* [图解-Git-命令](https://github.com/geeeeeeeeek/git-recipes/wiki/4.1-%E5%9B%BE%E8%A7%A3-Git-%E5%91%BD%E4%BB%A4)

* [佳米科技 Git 指南](https://github.com/ivan-94/git-guide)

* [Git Flow 功能分支工作流](https://github.com/ivan-94/git-guide/blob/master/branch/gitflow.md)


------------------------------------------------------------------



## 新需求迭代开发
```
# 更新公共分支最新代码 （一般是dev/master）
git checkout dev/master
git pull origin dev/master

# 在个人分支更新最新公共代码后，开始迭代开发
git checkout dev/个人分支
git merge dev/master
```

## 迭代完成后，提测
```
# 提交个人分支
git push

# 在公共分支（dev/master），合并本次需求相关分支代码
git checkout dev/master
git merge dev/个人分支
git pull origin dev/其他分支
git push
```

## 发布版本：
```
# 将测试通过后的代码合并到 master 分支
git checkout master
git merge dev/master

# 打 tag
git tag -a 版本号 -m "版本更新信息"
# 例如 git tag -a v1.0.1 -m "feat: 新增某某功能"

# 推送版本库
git push

# 推送 tags
git push --tags

# 切换回开发分支 dev/个人分支，并更新最新代码
git checkout dev/个人分支
git pull origin dev/master
git push
```


## 其他常用命令
```
# 绑定当前本地分支与远程分支 
git branch -u origin/分支
# 例如 git branch -u origin/dev/master

# 重新提交 commit 从而覆盖上一条 commit
git commit -m "msg" --amend

# 软回滚，改变 HEAD 指针位置，但保留本地代码
git reset --soft [commitId]

# 软回滚，改变 HEAD 指针位置，但保留本地代码。HEAD 代表当前，上一个版本就是当前-1。
git reset --soft HEAD~1

# 清缓存，清空 Git 缓存区（工作区内容修改时会和缓存区做比较），
# 使用场景：为了使 .gitignore 中的内容生效； 忽略大小写时对文件名修改了大小写名称时。
git rm -r --cached .
git add .
git commit -m "清空 Git 缓存"

# --force 强推，建议只在个人分支使用，公共分支慎重使用！
git push -f

# 暂存，可用于切换分支前保存当前修改而不需要 commit。 https://www.cnblogs.com/fxwoniu/p/13823337.html
# 能够将所有未提交的修改（工作区和暂存区）保存至堆栈中，用于后续恢复当前工作目录
git stash
# 将当前stash中的内容弹出，并应用到当前分支对应的工作目录上
git stash pop

```

------------------------------------------------------------------


## notes

* `commit` 生成版本号
* `HEAD` 当前版本
* `HEAD^` 上一版本
* `HEAD~1` 上一版本


* `reset`
  * `reset --hard` 重置工作区和暂存区
  * `reset --soft` 保留工作区，并把重置 HEAD 所带来的新的差异放进暂存区
  * `reset`, `reset --mixed` reset 不加参数时默认使用 --mixed 参数，保留工作目录，并且清空暂存区。也就是说，工作目录的修改、暂存区的内容以及由 reset 所导致的新的文件差异，都会被放进工作目录。简而言之，就是「把所有差异都混合（mixed）放在工作目录中」。
  > [Git Reset 三种模式](https://www.jianshu.com/p/c2ec5f06cf1a)


* `reflog` 查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）

* `git config -l`: 查看git配置信息 
  * `core.ignorecase=true` 默认当前配置是忽略大小写的（不建议修改）
