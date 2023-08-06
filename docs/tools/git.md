# Git

## Github

不知道什么原因，家里电脑Github克隆我的仓库时报错：

```
$ git clone git@github.com:wecms/icmsite-docusaurus.git
Cloning into 'icmsite-docusaurus'...
Warning: the ECDSA host key for 'github.com' differs from the key for the IP address '140.82.114.4'
Offending key for IP in /c/Users/ICMS/.ssh/known_hosts:6
Matching host key in /c/Users/ICMS/.ssh/known_hosts:7
Are you sure you want to continue connecting (yes/no)? yes
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

```
ssh-keygen -t rsa -C "icms@foxmail.com"
```

重新生成又提示：

```
$ ssh -T git@github.com
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
SHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s.
Please contact your system administrator.
Add correct host key in /c/Users/ICMS/.ssh/known_hosts to get rid of this messag                                                                                                                                                                                               e.
Offending RSA key in /c/Users/ICMS/.ssh/known_hosts:1
RSA host key for github.com has changed and you have requested strict checking.
Host key verification failed.
```

问AI说，这可能表示主机密钥（host key）发生了变化。这通常发生在你之前连接过该主机，但现在它的密钥发生了更改。

如果你之前连接过该主机，并且你信任该主机的身份验证，可以尝试更新你本地SSH密钥缓存中的主机密钥。你可以使用以下命令来删除旧的主机密钥缓存：

```
ssh-keygen -R github.com
```

这将删除已知主机密钥缓存中的GitHub主机密钥。

如果你之前没有连接过该主机，或者你不确定是否应该信任新的主机密钥，可以手动验证主机密钥的指纹。打开终端，运行以下命令：

```
ssh-keyscan github.com
```

这将返回GitHub主机的公钥指纹。比较这个指纹与GitHub官方文档或其他可信来源中的指纹是否匹配。如果匹配，则可以选择接受该密钥并继续克隆操作。如果不匹配，可能存在安全风险，应该谨慎继续操作。

我执行了`ssh-keygen -R github.com`以后，正常了。

挽回旧的密钥也正常了。

## 参考文献

[Xshell的下载与使用 - 知乎](https://zhuanlan.zhihu.com/p/196664911)
