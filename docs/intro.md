---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.


## Deploying to GitHub Pages with custom domain



WARNING

By default, GitHub Pages runs published files through Jekyll. Since Jekyll will discard any files that begin with _, it is recommended that you disable Jekyll by adding an empty file named .nojekyll file to your static directory.

### Error

```
fatal: Remote branch gh-pages not found in upstream origin
[INFO] `git clone --depth 1 --branch gh-pages git@github.com:wecms/icmsite-docusaurus.git "C:\Users\Admin\AppData\Local\Temp\icmsite-docusaurus-gh-pagesN1OoRT"` code: 128
Initialized empty Git repository in C:/Users/Admin/AppData/Local/Temp/icmsite-docusaurus-gh-pagesN1OoRT/.git/
[INFO] `git init` code: 0
Switched to a new branch 'gh-pages'
```

因为没有初始化Git仓库。

```
git init
git set origin 
```

