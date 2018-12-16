# easyNBA [deprecated]

2018-12-16：

百度搜索对于关键字为 [nba] 的搜索结果做了调整，如果点击 [集锦] 会着陆到一个百度的中间页，继而需要自己挑选视频观看。相应地，腾讯也做了新的措施，所以该法彻底失效了。

事实上，目前就算移动端去打开腾讯 nba 的集锦页面，也是有广告的；另外，ABP 也同时失效了。

哎，想看个没广告的集锦，真是累啊，目前还在搜寻新的方法中 ... 之前通过直播吧进入微博某账号，有没广告的集锦，但是貌似并不是每场比赛都有，源不是很稳定。同时并没有入口，可能需要自己去抓 ... 

---

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
- 可设置播放点

## 后记

后来发现去广告神器 [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb) 完全能够胜任此项去广告重任，但是在集锦详情页需要多 loading 2～3 秒时间，应该是在运行脚本。

所以如果没有很大的需求，装个 [Adblock Plus](https://chrome.google.com/webstore/detail/adblock-plus/cfhdojbkjhnklbpkdaibdccddilifddb)  就可以了。
