---
external: false
draft: false
title: Basic knowledge I needed about MySQL when creating CRUD app with Express
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web-development
---

## MySQL Installation on Mac M1

```
arch -arm64 brew install mysql
```

## Start MySQL

```
mysql -u root -p
>
```

↑initial pass is empty since user is root user

## Create new user

```
CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'new_password';
GRANT ALL PRIVILEGES ON your_database_name.* TO 'new_user'@'localhost';
```
