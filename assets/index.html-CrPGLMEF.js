import{_ as a,c as t,f as s,o as i}from"./app-SttqiV5p.js";const n="/yevin-notes-blog/assets/image7-BUui54Kk.png",p="/yevin-notes-blog/assets/image8-C7XUFW0z.png",r="/yevin-notes-blog/assets/image9-I5b57s0R.png",l="/yevin-notes-blog/assets/image10-DRl4j9Xi.png",o="/yevin-notes-blog/assets/image11-BidacDSe.png",d="/yevin-notes-blog/assets/image12-6Hx1TaeX.png",c="/yevin-notes-blog/assets/image13-DL84-I_l.png",g="/yevin-notes-blog/assets/image14-IJLBCIwj.png",h="/yevin-notes-blog/assets/image15-BQRr9DhL.png",x="/yevin-notes-blog/assets/image16-CSYFS6nZ.png",m="/yevin-notes-blog/assets/image17-YQ-x5FKg.png",v="/yevin-notes-blog/assets/image18-DAL4kg9x.png",b="/yevin-notes-blog/assets/image19-CTA7jmCd.png",y="/yevin-notes-blog/assets/image20-gaFJl08I.png",_="/yevin-notes-blog/assets/image21-DGfxbzan.png",u="/yevin-notes-blog/assets/image22-B8ntIDHR.png",f="/yevin-notes-blog/assets/image23-CMSpLkUq.png",P="/yevin-notes-blog/assets/image24-BCrTv2BD.png",N={};function G(k,e){return i(),t("div",null,e[0]||(e[0]=[s('<p>为何选择腾讯云：</p><ul><li>有域名服务和轻量级服务器服务，方便统一管理。</li><li>轻量应用服务器，活动价一年88，自带宝塔面板方便个人用户快速建站。全程操作简单方便。</li></ul><p>也可以选择其他其他域名和云服务器服务商，建站流程，大致操作基本一致。</p><h2 id="_1-购买域名" tabindex="-1"><a class="header-anchor" href="#_1-购买域名"><span>1. 购买域名</span></a></h2><h3 id="搜索域名" tabindex="-1"><a class="header-anchor" href="#搜索域名"><span>搜索域名</span></a></h3><p>腾讯云 ： https://buy.cloud.tencent.com/domain</p><p>搜索想要的域名进行购买。</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+n+'" alt="PNG"></div><h3 id="实名认证" tabindex="-1"><a class="header-anchor" href="#实名认证"><span>实名认证</span></a></h3><p>新注册的域名，根据规定需要实名认证，否则会无法正常使用。</p><p>无实名信息模板的，可以创建信息模板。不选择实名信息模板无法提交订单。</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+p+'" alt="PNG"></div><p>选择域名，选择实名信息模板，提交订单付款购买。</p><p>个人网站的话推荐购买 cn 域名，相对会比较便宜。</p><h2 id="_2-购买云服务器" tabindex="-1"><a class="header-anchor" href="#_2-购买云服务器"><span>2. 购买云服务器</span></a></h2><h3 id="选择服务器" tabindex="-1"><a class="header-anchor" href="#选择服务器"><span>选择服务器</span></a></h3><p>选择合适的云服务器，个人网站推荐轻量应用服务器。学习使用基本够用，主要是便宜，可以趁活动时购买。</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+r+'" alt="PNG"></div><h3 id="应用模板" tabindex="-1"><a class="header-anchor" href="#应用模板"><span>应用模板</span></a></h3><p>选择宝塔 Linux 面板，方便创建项目</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+l+'" alt="PNG"></div><p>购买完之后，查看自己的云服务器主机公网IP</p><p>路径：控制台 =&gt; 轻量应用服务器 =&gt; 选择服务器 =&gt; 查看IP</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+o+'" alt="PNG"></div><h2 id="_3-域名解析" tabindex="-1"><a class="header-anchor" href="#_3-域名解析"><span>3. 域名解析</span></a></h2><p>将自己购买的域名解析到云服务器上。</p><p>路径：控制台 =&gt; 我的资源 =&gt; 域名注册 =&gt; 全部域名 =&gt; 选择自己的域名 =&gt; 点击解析</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+d+'" alt="PNG"></div><p>点击添加记录，添加如上图所示三条记录。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>记录值，为自己的云服务器公网IP地址</p></div><h2 id="_4-云服务器设置" tabindex="-1"><a class="header-anchor" href="#_4-云服务器设置"><span>4. 云服务器设置</span></a></h2><h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙"><span>防火墙</span></a></h3><p>路径：控制台 =&gt; 我的资源 =&gt; 轻量级应用服务器 =&gt; 选择自己的云服务器 =&gt; 防火墙 =&gt; 点击添加规则</p><p>添加一个8888端口规则，是默认的宝塔面板端口。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>安全考虑，后面请修改该默认端口</p></div><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+c+'" alt="PNG"></div><h3 id="登录云服务器" tabindex="-1"><a class="header-anchor" href="#登录云服务器"><span>登录云服务器</span></a></h3><p>点击下图所示的登录按钮，登录云服务器</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+g+'" alt="PNG"></div><p>执行以下命令：<code>sudo /etc/init.d/bt default</code></p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+h+'" alt="PNG"></div><p>保存默认的宝塔账号密码</p><h3 id="登录宝塔" tabindex="-1"><a class="header-anchor" href="#登录宝塔"><span>登录宝塔</span></a></h3><p>用下面地址，在自己个人电脑浏览器打开</p><blockquote><p><code>http://xxx:面板端口/tencentcloud</code></p><ul><li>xxx 为你的服务器公网ip地址 或者 你的域名</li><li>面板端口默认为 8888</li></ul></blockquote><p>使用刚刚通过命令获取的账号密码登录宝塔</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>安全考虑，后面请修改该默认账号密码</p></div><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+x+'" alt="PNG"></div><h3 id="下载软件" tabindex="-1"><a class="header-anchor" href="#下载软件"><span>下载软件</span></a></h3><p>根据自己的需求下载软件，推荐下载 Ngnix , MySQl 等软件</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+m+'" alt="PNG"></div><h3 id="绑定个人宝塔账号" tabindex="-1"><a class="header-anchor" href="#绑定个人宝塔账号"><span>绑定个人宝塔账号</span></a></h3><p>宝塔面板 =&gt; 首页 =&gt; 绑定个人宝塔账号</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+v+'" alt="PNG"></div><p>没有个人宝塔账号的，可以注册一个新账号。</p><h3 id="绑定腾讯云" tabindex="-1"><a class="header-anchor" href="#绑定腾讯云"><span>绑定腾讯云</span></a></h3><p>宝塔面板 =&gt; 首页 =&gt; 关联腾讯云</p><p>关联之后，可以查看 云服务器状态等。</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+b+'" alt="PNG"></div><p>关联所需要 APPID 和 Key ，可以通过上图中 点击查看 按钮获取。</p><h2 id="_5-发布个人网站" tabindex="-1"><a class="header-anchor" href="#_5-发布个人网站"><span>5. 发布个人网站</span></a></h2><h3 id="添加站点" tabindex="-1"><a class="header-anchor" href="#添加站点"><span>添加站点</span></a></h3><p>软件商店 下载 Nginx 后，点击侧边栏网站。</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+y+'" alt="PNG"></div><p>选择自己对应的项目，我的项目是个静态网页，直接选择第一个 PHP 项目，点击添加站点。</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+_+'" alt="PNG"></div><h3 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件"><span>上传文件</span></a></h3><p>点击刚刚添加站点的根目录</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+u+'" alt="PNG"></div><p>跳转至文件界面 点击上传自己的网站文件即可</p><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+f+'" alt="PNG"></div><p>到此为止，就可以通过自己的域名访问网站了。如有问题，欢迎联系我探讨。</p><h2 id="_6-其他设置" tabindex="-1"><a class="header-anchor" href="#_6-其他设置"><span>6. 其他设置</span></a></h2><h3 id="安全设置" tabindex="-1"><a class="header-anchor" href="#安全设置"><span>安全设置</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>为了安全考虑，及时修改宝塔默认端口，账号密码，面板访问地址，和开启面板SSL。</p></div><p>面板设置 =&gt; 全部设置</p><ul><li>开启面板SSL</li><li>修改面板端口</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意：修改面板端口，请在防火墙中放行该端口。</p></div><ul><li>修改安全入口</li></ul><div style="text-align:center;margin:12px 40px;"><img style="border-radius:12px;" src="'+P+'" alt="PNG"></div>',80)]))}const S=a(N,[["render",G],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/article/ut1aooki/","title":"轻松建站：使用腾讯云快速搭建个人网站","lang":"zh-CN","frontmatter":{"title":"轻松建站：使用腾讯云快速搭建个人网站","author":"耶温","createTime":"2024/05/29 20:04:51","permalink":"/article/ut1aooki/","tags":["网站服务"]},"headers":[],"readingTime":{"minutes":4.72,"words":1417},"git":{"updatedTime":1733124896000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"Blog/网站服务/个人网站建站教程.md","categoryList":[{"id":"be8df1","sort":10002,"name":"Blog"},{"id":"685a97","sort":10003,"name":"网站服务"}],"bulletin":false}');export{S as comp,I as data};