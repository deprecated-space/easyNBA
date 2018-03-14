# easyNBA

an chrome extension to watch NBA highlights in my own way

## Why

为什么会有这个扩展？

作为 NBA 球迷，没有时间看比赛，看个集锦是必须的。一般我都是通过网页 <https://www.baidu.com/s?wd=nba> 作为入口看集锦，但是视频有广告，某次在移动端打开没有广告，这给了我一个去广告的思路。经过分析，并不是通过 HTTP 请求头的 UA 来判断，而是粗暴地通过 `navigator.userAgent` 来判断环境，如果在移动端打开 PC 页面，则重定向到移动端的页面（无广告），反之如果在 PC 端打开移动端页面，也会进行判断从而跳转到 PC 端的页面，如果是 PC 端打开 PC 端页面或者移动端打开移动端页面，则不做跳转。

于是我通过 getter 函数将 `navigator.userAgent` 写死成移动端环境，就 ok 了。

另外添加了几个适合自己的小功能：

- 列表自动展开
- 关注球队添加背景颜色
- 打开集锦页自动播放
- 集锦页空格暂停

## 后记

后来发现去广告神器 [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb) 完全能够胜任此项去广告重任，但是在集锦详情页需要多 loading 2～3 秒时间，应该是在运行脚本。

所以如果没有很大的需求，装个 [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb)  就可以了。
