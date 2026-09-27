# GitHub使用教程

## 目录
1. [Git安装教程](#一git安装教程)
2. [终端环境配置](#二终端环境配置)
3. [Git基础配置](#三git基础配置)
4. [GitHub仓库操作](#四github仓库操作)
5. [本地版本控制](#五本地版本控制)
6. [远程仓库管理](#六远程仓库管理)
7. [分支管理](#七分支管理)
8. [协作开发](#八协作开发)
9. [常见问题解决](#九常见问题解决)
10. [Git命令速查表](#十git命令速查表)

---

## 一、Git安装教程

### 1.1 Git下载  
前往Git官网，选择需要的版本下载即可。下载地址为：
- ① [git-scm.com](https://git-scm.com) （Git官网，支持Windows、macOS、Linux）
- ② [gitforwindows.org](https://gitforwindows.org) （仅Windows系统）

**注意：**
- ①为Git官网，进入官网后，点击Downloads，选择自己电脑对应的系统安装即可
- ②只有Windows系统的安装包

### 1.2 不同系统的安装方式

#### 1.2.1 Windows系统安装
（以Git-2.48.1-64-bit.exe版本为例）

**步骤1：使用许可声明**
点击Next即可

**步骤2：选择安装路径**
点击"Browse..."可更改安装位置。建议安装在C盘以外的其他盘（例如D盘等），并注意安装路径中不要出现中文。

**步骤3：选择安装组件**
根据个人需要进行勾选，建议保持默认设置，然后点击Next

**步骤4：选择开始菜单文件夹**
无特殊要求点击Next即可。

**步骤5：选择Git默认编辑器**
Git安装程序内置了多种编辑器，如Atom、Notepad、Notepad++、Sublime Text、Visual Studio Code、Vim等。
- 默认是Vim，但操作有难度
- 推荐选择Visual Studio Code（如果已安装）
- 新手可选择Notepad++

**步骤6：决定初始化新项目的主干名字**
- 第一种：默认的master
- 第二种：自定义，默认是main（推荐）

**步骤7：调整path环境变量**
- 第一种：仅从Git Bash使用Git
- 第二种：从命令行以及第三方软件进行Git（推荐）
- 第三种：从命令提示符使用Git和可选的Unix工具

**步骤8：选择SSH执行文件**
选择Git自带的OpenSSH即可（默认选项1）

**步骤9：选择HTTPS后端传输**
默认第一项，点击Next即可

**步骤10：配置行尾符号转换**
- Windows用户选择第一项
- Mac、Linux用户选择第二项

**步骤11：配置终端模拟器**
建议选择第一种MinTTY，功能更强大

**步骤12：选择默认的"git pull"行为**
默认第一项，点击Next即可

**步骤13：选择凭证帮助程序**
选择第一个选项"Git凭证管理"

**步骤14：配置额外选项**
- 启用文件系统缓存：建议开启
- 启用符号链接：建议不开启

**步骤15：配置实验性选项**
如果有此步骤，建议都不选择，直接点击Install安装

#### 1.2.2 macOS系统安装

**方法1：使用Homebrew安装**
```bash
# 安装Homebrew（如果未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 使用Homebrew安装Git
brew install git
```

**方法2：下载安装包**
从[git-scm.com](https://git-scm.com)下载macOS安装包，双击安装

**方法3：使用Xcode Command Line Tools**
```bash
xcode-select --install
```

#### 1.2.3 Linux系统安装

**Ubuntu/Debian系统：**
```bash
sudo apt update
sudo apt install git
```

**CentOS/RHEL/Fedora系统：**
```bash
# CentOS/RHEL
sudo yum install git

# Fedora
sudo dnf install git
```

**Arch Linux系统：**
```bash
sudo pacman -S git
```

### 1.3 验证安装
安装完成后，在终端/命令行中输入以下命令验证安装：
```bash
git --version
```

---

## 二、终端环境配置

### 2.1 Windows终端

#### 2.1.1 PowerShell配置
Windows 10/11默认使用PowerShell，Git安装后可在PowerShell中直接使用。

**打开PowerShell的方法：**
1. Win + R，输入`powershell`
2. Win + X，选择"Windows PowerShell"
3. 在文件夹空白处，Shift + 右键，选择"在此处打开PowerShell窗口"

**基本命令对比：**
| 功能 | PowerShell | Git Bash | CMD |
|------|------------|----------|-----|
| 列出文件 | `ls` 或 `dir` | `ls` | `dir` |
| 切换目录 | `cd` | `cd` | `cd` |
| 创建目录 | `mkdir` | `mkdir` | `mkdir` |
| 当前路径 | `pwd` | `pwd` | `cd` |

#### 2.1.2 Git Bash配置
Git Bash是Git for Windows自带的终端，提供Linux风格的命令行体验。

**特点：**
- 支持Linux命令
- 更好的Git集成
- 支持SSH密钥管理

### 2.2 Linux终端

#### 2.2.1 常用终端
- **Bash**：大多数Linux发行版的默认终端
- **Zsh**：功能更强大，支持插件
- **Fish**：用户友好的交互式Shell

#### 2.2.2 Zsh + Oh My Zsh配置（推荐）
```bash
# 安装Zsh
sudo apt install zsh  # Ubuntu/Debian
sudo yum install zsh  # CentOS/RHEL

# 安装Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 设置为默认Shell
chsh -s $(which zsh)
```

### 2.3 macOS终端

#### 2.3.1 内置终端
macOS自带Terminal应用，默认使用Zsh（macOS Catalina及更高版本）

#### 2.3.2 iTerm2（推荐）
功能更强大的终端替代品：
```bash
# 使用Homebrew安装
brew install --cask iterm2
```

#### 2.3.3 配置Zsh
```bash
# 安装Oh My Zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 安装有用的插件
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

---

## 三、Git基础配置

### 3.1 全局配置
首次使用Git需要配置用户信息：

```bash
# 配置用户名
git config --global user.name "Your Name"

# 配置邮箱
git config --global user.email "your.email@example.com"

# 配置默认编辑器
git config --global core.editor "code --wait"  # VS Code
git config --global core.editor "nano"         # Nano
git config --global core.editor "vim"          # Vim

# 配置默认分支名
git config --global init.defaultBranch main

# 查看配置
git config --list
```

### 3.2 SSH密钥配置

#### 3.2.1 生成SSH密钥

**Windows（PowerShell/Git Bash）：**
```powershell
# PowerShell
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"

# 或使用更安全的ed25519算法
ssh-keygen -t ed25519 -C "your.email@example.com"
```

**Linux/macOS：**
```bash
# 生成RSA密钥
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"

# 或使用ed25519算法（推荐）
ssh-keygen -t ed25519 -C "your.email@example.com"
```

#### 3.2.2 添加SSH密钥到ssh-agent

**Windows：**
```powershell
# 启动ssh-agent
Start-Service ssh-agent

# 添加私钥
ssh-add ~/.ssh/id_rsa
# 或
ssh-add ~/.ssh/id_ed25519
```

**Linux/macOS：**
```bash
# 启动ssh-agent
eval "$(ssh-agent -s)"

# 添加私钥
ssh-add ~/.ssh/id_rsa
# 或
ssh-add ~/.ssh/id_ed25519
```

#### 3.2.3 获取公钥

**Windows（PowerShell）：**
```powershell
Get-Content ~/.ssh/id_rsa.pub | Set-Clipboard
# 或
cat ~/.ssh/id_rsa.pub
```

**Linux/macOS：**
```bash
# 复制到剪贴板
cat ~/.ssh/id_rsa.pub | pbcopy  # macOS
cat ~/.ssh/id_rsa.pub | xclip -selection clipboard  # Linux

# 或直接查看
cat ~/.ssh/id_rsa.pub
```

#### 3.2.4 添加SSH密钥到GitHub
1. 登录GitHub，点击右上角头像
2. 选择"Settings"
3. 在左侧菜单选择"SSH and GPG keys"
4. 点击"New SSH key"
5. 粘贴公钥内容，添加标题
6. 点击"Add SSH key"

#### 3.2.5 测试SSH连接
```bash
ssh -T git@github.com
```

成功的话会看到：
```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## 四、GitHub仓库操作

### 4.1 创建GitHub仓库

#### 4.1.1 在GitHub网站创建
1. 登录GitHub，点击右上角的"+"
2. 选择"New repository"
3. 填写仓库名称（Repository name）
4. 选择可见性：
   - **Public**：公开，所有人可见
   - **Private**：私有，仅授权用户可见
5. 可选填写描述（Description）
6. 选择是否初始化README、.gitignore、License
7. 点击"Create repository"

#### 4.1.2 从本地推送到新仓库

**方法1：从现有项目创建仓库**
```bash
# 进入项目目录
cd /path/to/your/project

# 初始化Git仓库
git init

# 添加远程仓库
git remote add origin git@github.com:username/repository-name.git

# 添加文件
git add .

# 提交
git commit -m "Initial commit"

# 推送到远程仓库
git branch -M main
git push -u origin main
```

**方法2：克隆空仓库后添加文件**
```bash
# 克隆仓库
git clone git@github.com:username/repository-name.git

# 进入目录
cd repository-name

# 添加文件
# ... 添加你的文件 ...

# 提交并推送
git add .
git commit -m "Add initial files"
git push origin main
```

### 4.2 克隆仓库

#### 4.2.1 使用SSH克隆（推荐）
```bash
git clone git@github.com:username/repository-name.git
```

#### 4.2.2 使用HTTPS克隆
```bash
git clone https://github.com/username/repository-name.git
```

#### 4.2.3 克隆到指定目录
```bash
git clone git@github.com:username/repository-name.git my-project
```

#### 4.2.4 浅克隆（只克隆最新提交）
```bash
git clone --depth 1 git@github.com:username/repository-name.git
```

### 4.3 Fork仓库

#### 4.3.1 在GitHub上Fork
1. 访问要Fork的仓库页面
2. 点击右上角的"Fork"按钮
3. 选择Fork到的账户/组织

#### 4.3.2 克隆Fork的仓库
```bash
# 克隆你Fork的仓库
git clone git@github.com:yourusername/repository-name.git

# 添加上游仓库
git remote add upstream git@github.com:originalowner/repository-name.git

# 查看远程仓库
git remote -v
```

#### 4.3.3 同步Fork的仓库
```bash
# 获取上游仓库的更新
git fetch upstream

# 切换到主分支
git checkout main

# 合并上游更新
git merge upstream/main

# 推送到你的Fork
git push origin main
```

---

## 五、本地版本控制

### 5.1 Git工作区概念

Git有三个主要区域：
- **工作区（Working Directory）**：当前工作的文件目录
- **暂存区（Staging Area）**：临时保存改动的区域
- **版本库（Repository）**：存储版本历史的区域

### 5.2 基本版本控制操作

#### 5.2.1 初始化仓库
```bash
# 在现有目录初始化
git init

# 创建新目录并初始化
git init my-project
cd my-project
```

#### 5.2.2 查看状态
```bash
# 查看工作区状态
git status

# 简洁模式
git status -s
```

#### 5.2.3 添加文件到暂存区
```bash
# 添加单个文件
git add filename.txt

# 添加多个文件
git add file1.txt file2.txt

# 添加所有文件
git add .

# 添加所有.js文件
git add *.js

# 交互式添加
git add -i
```

#### 5.2.4 提交更改
```bash
# 提交暂存区的更改
git commit -m "提交信息"

# 提交并跳过暂存区（仅对已跟踪文件有效）
git commit -am "提交信息"

# 修改最后一次提交
git commit --amend -m "修改后的提交信息"
```

#### 5.2.5 查看提交历史
```bash
# 查看完整提交历史
git log

# 一行显示
git log --oneline

# 图形化显示分支
git log --graph

# 查看特定文件的历史
git log filename.txt

# 查看最近3次提交
git log -3

# 查看提交的详细信息
git show commit-hash
```

### 5.3 文件操作

#### 5.3.1 移除文件
```bash
# 从工作区和暂存区删除文件
git rm filename.txt

# 只从暂存区删除，保留工作区文件
git rm --cached filename.txt

# 删除目录
git rm -r directory/
```

#### 5.3.2 移动/重命名文件
```bash
# 重命名文件
git mv old-name.txt new-name.txt

# 移动文件
git mv filename.txt directory/
```

#### 5.3.3 忽略文件
创建`.gitignore`文件：
```gitignore
# 忽略所有.log文件
*.log

# 忽略node_modules目录
node_modules/

# 忽略IDE配置文件
.vscode/
.idea/

# 忽略系统文件
.DS_Store
Thumbs.db

# 但不忽略特定文件
!important.log
```

### 5.4 比较差异

#### 5.4.1 查看工作区与暂存区的差异
```bash
git diff
```

#### 5.4.2 查看暂存区与最近提交的差异
```bash
git diff --cached
```

#### 5.4.3 查看工作区与特定提交的差异
```bash
git diff HEAD
git diff commit-hash
```

#### 5.4.4 比较两个提交
```bash
git diff commit1 commit2
```

### 5.5 撤销操作

#### 5.5.1 撤销工作区的修改
```bash
# 撤销单个文件的修改
git checkout -- filename.txt

# 撤销所有修改
git checkout -- .

# 新语法（Git 2.23+）
git restore filename.txt
git restore .
```

#### 5.5.2 撤销暂存区的修改
```bash
# 取消暂存单个文件
git reset HEAD filename.txt

# 取消暂存所有文件
git reset HEAD

# 新语法（Git 2.23+）
git restore --staged filename.txt
git restore --staged .
```

#### 5.5.3 撤销提交
```bash
# 撤销最近一次提交，保留修改在工作区
git reset --soft HEAD^

# 撤销最近一次提交，修改放入暂存区
git reset --mixed HEAD^

# 完全撤销最近一次提交
git reset --hard HEAD^

# 撤销到特定提交
git reset --hard commit-hash
```

#### 5.5.4 创建新提交来撤销
```bash
# 安全地撤销特定提交
git revert commit-hash

# 撤销最近一次提交
git revert HEAD
```

---

## 六、远程仓库管理

### 6.1 远程仓库配置

#### 6.1.1 查看远程仓库
```bash
# 查看远程仓库列表
git remote

# 查看远程仓库详细信息
git remote -v

# 查看特定远程仓库信息
git remote show origin
```

#### 6.1.2 添加远程仓库
```bash
# 添加远程仓库
git remote add origin git@github.com:username/repository.git

# 添加多个远程仓库
git remote add upstream git@github.com:upstream/repository.git
```

#### 6.1.3 修改远程仓库URL
```bash
# 修改远程仓库URL
git remote set-url origin git@github.com:username/new-repository.git

# 从HTTPS切换到SSH
git remote set-url origin git@github.com:username/repository.git
```

#### 6.1.4 删除远程仓库
```bash
git remote remove origin
```

### 6.2 推送操作

#### 6.2.1 推送到远程仓库
```bash
# 推送当前分支到对应远程分支
git push

# 首次推送，建立跟踪关系
git push -u origin main

# 推送特定分支
git push origin feature-branch

# 推送所有分支
git push --all origin

# 强制推送（危险操作）
git push --force origin main
git push -f origin main

# 安全的强制推送
git push --force-with-lease origin main
```

#### 6.2.2 推送标签
```bash
# 推送单个标签
git push origin v1.0.0

# 推送所有标签
git push --tags origin
```

### 6.3 拉取操作

#### 6.3.1 获取远程更新
```bash
# 获取远程仓库的更新（不合并）
git fetch origin

# 获取所有远程仓库的更新
git fetch --all

# 获取并删除远程已删除的分支
git fetch --prune origin
```

#### 6.3.2 拉取并合并
```bash
# 拉取并合并当前分支
git pull

# 拉取特定分支并合并
git pull origin main

# 使用rebase方式拉取
git pull --rebase origin main
```

### 6.4 多远程仓库管理

#### 6.4.1 典型的Fork工作流
```bash
# 添加原始仓库为upstream
git remote add upstream git@github.com:original/repository.git

# 从upstream获取更新
git fetch upstream

# 合并upstream的更新到本地main分支
git checkout main
git merge upstream/main

# 推送到自己的Fork
git push origin main
```

#### 6.4.2 不同远程仓库的操作
```bash
# 从upstream拉取
git pull upstream main

# 推送到origin
git push origin main

# 推送到不同的远程仓库
git push backup main
```

---

## 七、分支管理

### 7.1 分支基础概念

分支是Git最强大的功能之一，允许你在不影响主代码的情况下开发新功能。

### 7.2 分支操作

#### 7.2.1 查看分支
```bash
# 查看本地分支
git branch

# 查看所有分支（包括远程）
git branch -a

# 查看远程分支
git branch -r

# 查看分支详细信息
git branch -v

# 查看已合并的分支
git branch --merged

# 查看未合并的分支
git branch --no-merged
```

#### 7.2.2 创建分支
```bash
# 创建新分支
git branch feature-login

# 创建并切换到新分支
git checkout -b feature-login

# 新语法（Git 2.23+）
git switch -c feature-login

# 从特定提交创建分支
git checkout -b hotfix commit-hash
```

#### 7.2.3 切换分支
```bash
# 切换分支
git checkout feature-login

# 新语法（Git 2.23+）
git switch feature-login

# 切换到上一个分支
git checkout -
git switch -
```

#### 7.2.4 删除分支
```bash
# 删除已合并的分支
git branch -d feature-login

# 强制删除分支
git branch -D feature-login

# 删除远程分支
git push origin --delete feature-login
```

### 7.3 合并分支

#### 7.3.1 普通合并
```bash
# 切换到目标分支
git checkout main

# 合并分支
git merge feature-login
```

#### 7.3.2 快进合并
当目标分支没有新提交时，Git会进行快进合并：
```bash
git merge feature-login  # 快进合并
```

#### 7.3.3 禁用快进合并
```bash
# 总是创建合并提交
git merge --no-ff feature-login
```

#### 7.3.4 压缩合并
```bash
# 将多个提交压缩为一个
git merge --squash feature-login
git commit -m "Add login feature"
```

### 7.4 变基操作

#### 7.4.1 基本变基
```bash
# 将当前分支变基到main
git rebase main

# 变基特定分支
git rebase main feature-branch
```

#### 7.4.2 交互式变基
```bash
# 修改最近3个提交
git rebase -i HEAD~3

# 从特定提交开始变基
git rebase -i commit-hash
```

在交互式变基中，你可以：
- `pick`：保留提交
- `reword`：修改提交信息
- `edit`：编辑提交
- `squash`：合并到前一个提交
- `drop`：删除提交

#### 7.4.3 解决变基冲突
```bash
# 解决冲突后继续变基
git rebase --continue

# 跳过当前提交
git rebase --skip

# 中止变基
git rebase --abort
```

### 7.5 分支策略

#### 7.5.1 Git Flow
- **main**：主分支，只包含发布版本
- **develop**：开发分支，包含最新开发进度
- **feature/**：功能分支，从develop分出
- **release/**：发布分支，准备发布时从develop分出
- **hotfix/**：热修复分支，从main分出

#### 7.5.2 GitHub Flow
- **main**：主分支，永远保持可部署状态
- **feature/**：功能分支，完成后通过Pull Request合并到main

#### 7.5.3 GitLab Flow
结合了上述两种策略的优点，适用于持续部署。

---

## 八、协作开发

### 8.1 Pull Request/Merge Request

#### 8.1.1 创建Pull Request
1. 推送功能分支到远程仓库
2. 在GitHub上创建Pull Request
3. 填写PR标题和描述
4. 选择审核者
5. 等待代码审核

#### 8.1.2 代码审核
作为审核者：
1. 查看代码变更
2. 添加评论和建议
3. 批准或请求修改
4. 合并PR

#### 8.1.3 处理审核反馈
```bash
# 在功能分支上修改代码
git checkout feature-branch

# 添加修改
git add .
git commit -m "Address review comments"

# 推送更新
git push origin feature-branch
```

### 8.2 代码冲突解决

#### 8.2.1 合并冲突
当两个分支修改了同一文件的同一部分时会产生冲突：

```bash
# 尝试合并时出现冲突
git merge feature-branch

# 查看冲突文件
git status

# 手动编辑冲突文件，选择保留的内容
# 冲突标记：
# <<<<<<< HEAD
# 当前分支的内容
# =======
# 要合并分支的内容
# >>>>>>> feature-branch

# 解决冲突后添加文件
git add conflicted-file.txt

# 完成合并
git commit
```

#### 8.2.2 变基冲突
```bash
# 变基过程中出现冲突
git rebase main

# 解决冲突后继续
git add .
git rebase --continue
```

#### 8.2.3 使用工具解决冲突
```bash
# 配置合并工具
git config --global merge.tool vimdiff

# 使用工具解决冲突
git mergetool
```

### 8.3 团队协作最佳实践

#### 8.3.1 提交信息规范
使用约定式提交（Conventional Commits）：
```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

类型：
- `feat`：新功能
- `fix`：修复bug
- `docs`：文档更新
- `style`：代码格式
- `refactor`：重构
- `test`：测试
- `chore`：构建/工具相关

示例：
```
feat(auth): add login functionality

Add user authentication with email and password.
Includes password hashing and JWT token generation.

Closes #123
```

#### 8.3.2 分支命名规范
```
feature/user-authentication
bugfix/login-error
hotfix/security-patch
release/v1.2.0
```

#### 8.3.3 代码审核清单
- [ ] 代码功能正确
- [ ] 代码风格一致
- [ ] 有适当的测试
- [ ] 文档已更新
- [ ] 没有敏感信息
- [ ] 性能影响可接受

---

## 九、常见问题解决

### 9.1 认证问题

#### 9.1.1 SSH密钥问题
```bash
# 测试SSH连接
ssh -T git@github.com

# 如果失败，检查SSH代理
ssh-add -l

# 重新添加密钥
ssh-add ~/.ssh/id_rsa
```

#### 9.1.2 HTTPS认证问题
从2021年8月13日起，GitHub不再接受密码认证，需要使用个人访问令牌（PAT）。

创建PAT：
1. GitHub Settings → Developer settings → Personal access tokens
2. 生成新令牌，设置适当权限
3. 使用令牌代替密码

#### 9.1.3 缓存凭据
```bash
# Windows
git config --global credential.helper manager

# macOS
git config --global credential.helper osxkeychain

# Linux
git config --global credential.helper cache
```

### 9.2 同步问题

#### 9.2.1 本地落后于远程
```bash
# 拉取最新更改
git pull origin main

# 如果有本地修改，使用rebase
git pull --rebase origin main
```

#### 9.2.2 本地超前于远程
```bash
# 推送本地更改
git push origin main

# 如果被拒绝，先拉取再推送
git pull origin main
git push origin main
```

#### 9.2.3 分叉历史
当本地和远程有不同的提交历史时：
```bash
# 允许无关历史合并
git pull origin main --allow-unrelated-histories
```

### 9.3 撤销错误操作

#### 9.3.1 撤销错误的提交
```bash
# 查看提交历史
git log --oneline

# 撤销到特定提交
git reset --hard commit-hash

# 如果已经推送，使用revert
git revert commit-hash
```

#### 9.3.2 恢复删除的分支
```bash
# 查看引用日志
git reflog

# 恢复分支
git checkout -b recovered-branch commit-hash
```

#### 9.3.3 修复错误的合并
```bash
# 如果还没推送
git reset --hard HEAD~1

# 如果已经推送
git revert -m 1 merge-commit-hash
```

### 9.4 性能问题

#### 9.4.1 仓库太大
```bash
# 清理不必要的文件
git gc --prune=now

# 查看仓库大小
git count-objects -vH

# 移除大文件历史
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch large-file.bin' \
  --prune-empty --tag-name-filter cat -- --all
```

#### 9.4.2 网络问题
```bash
# 浅克隆
git clone --depth 1 repo-url

# 部分克隆
git clone --filter=blob:none repo-url

# 配置代理
git config --global http.proxy http://proxy:8080
```

---

## 十、Git命令速查表

### 10.1 配置命令
```bash
# 设置用户信息
git config --global user.name "用户名"
git config --global user.email "邮箱"

# 查看配置
git config --list
git config user.name

# 设置别名
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

### 10.2 基础命令
```bash
# 初始化仓库
git init

# 克隆仓库
git clone <url>

# 查看状态
git status

# 添加文件
git add <file>
git add .

# 提交
git commit -m "消息"
git commit -am "消息"

# 查看历史
git log
git log --oneline
git log --graph
```

### 10.3 分支命令
```bash
# 查看分支
git branch
git branch -a

# 创建分支
git branch <name>
git checkout -b <name>

# 切换分支
git checkout <name>
git switch <name>

# 合并分支
git merge <branch>

# 删除分支
git branch -d <name>
git branch -D <name>
```

### 10.4 远程命令
```bash
# 查看远程仓库
git remote -v

# 添加远程仓库
git remote add origin <url>

# 推送
git push origin <branch>
git push -u origin <branch>

# 拉取
git pull origin <branch>
git fetch origin
```

### 10.5 撤销命令
```bash
# 撤销工作区修改
git checkout -- <file>
git restore <file>

# 撤销暂存
git reset HEAD <file>
git restore --staged <file>

# 撤销提交
git reset --soft HEAD^
git reset --hard HEAD^
git revert <commit>
```

### 10.6 标签命令
```bash
# 创建标签
git tag v1.0.0
git tag -a v1.0.0 -m "版本1.0.0"

# 查看标签
git tag
git tag -l "v1.*"

# 推送标签
git push origin v1.0.0
git push origin --tags

# 删除标签
git tag -d v1.0.0
git push origin --delete v1.0.0
```

### 10.7 实用命令
```bash
# 查看差异
git diff
git diff --cached
git diff HEAD

# 暂存修改
git stash
git stash list
git stash pop
git stash apply

# 查看文件历史
git log --follow <file>
git blame <file>

# 搜索
git grep "搜索内容"
git log --grep="搜索提交信息"

# 清理
git clean -fd
git gc --prune=now
```

---

## 附录

### A.1 .gitignore模板

#### Node.js项目
```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/

# Environment variables
.env
.env.local
.env.production

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

#### Python项目
```gitignore
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class

# Virtual environments
venv/
env/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Project specific
*.log
.pytest_cache/
```

#### Java项目
```gitignore
# Compiled class files
*.class

# Package files
*.jar
*.war
*.ear

# IDE
.idea/
*.iml
.vscode/
.eclipse/

# Build
target/
build/

# OS
.DS_Store
Thumbs.db
```

### A.2 常用Git别名配置
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

### A.3 参考资源
- [Git官方文档](https://git-scm.com/doc)
- [GitHub官方文档](https://docs.github.com/)
- [Pro Git书籍](https://git-scm.com/book)
- [Git可视化学习](https://learngitbranching.js.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [约定式提交](https://www.conventionalcommits.org/)

---

*最后更新：2025年8月20日*
