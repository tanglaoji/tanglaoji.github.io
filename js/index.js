new Vue({
    data() {
        return {
            last_updated: 'Last updated: Aug 8, 2021',
            lock: true,
            search: '',
            announcement: '',
            isShowAnnouncement: true,
            isLoading: [true, true],
            sidebar: [
                {
                    title: "UI框架",
                    icon: "bxs-file-css",
                    website: [
                        {
                            url: "https://v5.bootcss.com/",
                            title: "Bootstrap5",
                            img: "UI-frame/bootstrap.png",
                            desc: "Bootstrap 是全球最受欢迎的前端框架，用于构建响应式、移动设备优先的网站。",
                            tags: ["响应式", "前端"]
                        },
                        {
                            url: "https://element.eleme.cn/",
                            title: "ElementUI",
                            img: "UI-frame/element.svg",
                            desc: "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。",
                            tags: ["热门", "响应式", "前端"]
                        },
                        {
                            url: "https://www.layui.com/",
                            title: "LayUI",
                            img: "UI-frame/layui.png",
                            desc: "LayUI是一款采用自身模块规范编写的前端UI框架，极易上手，拿来即用。",
                            tags: ["轻量", "经典", "前端"]
                        },
                        {
                            url: "https://ant.design/",
                            title: "AntDesign",
                            img: "UI-frame/antdesign.svg",
                            desc: "企业级产品设计体系，创造高效愉悦的工作体验。",
                            tags: ["企业", "高效", "前端"]
                        },
                        {
                            url: "https://www.jeasyui.net/",
                            title: "JeasyUI",
                            img: "UI-frame/easyui.jpg",
                            desc: "帮助web开发者更轻松的打造出功能丰富并且美观的UI界面。",
                            tags: ["前端"]
                        },
                        {
                            url: "https://www.pintuer.com/",
                            title: "Pintuer",
                            img: "UI-frame/pintuer.png",
                            desc: "拼图前端框架在传统CSS框架的基本上，增加了HTML5、CSS3、JS等技术组合应用。",
                            tags: ["前端"]
                        },
                        {
                            url: "https://adminlte.io/",
                            title: "AdminLTE",
                            img: "UI-frame/adminlte.png",
                            desc: "AdminLTE 建立在 Bootstrap 之上，提供了一系列响应式、可重用和常用的组件。",
                            tags: ["前端"]
                        },
                        {
                            url: "https://aliqin.github.io/atui/",
                            title: "AtUI",
                            img: "UI-frame/atui.png",
                            desc: "由阿里通信技术团队打造基于Vue2.0的Web组件库。",
                            tags: ["前端"]
                        },
                    ]
                },
                {
                    title: "JS框架",
                    icon: "bxs-file-js",
                    website: [
                        {
                            url: "https://cn.vuejs.org/",
                            title: "Vue",
                            img: "JS-frame/vue.svg",
                            desc: "Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。",
                            tags: ["热门", "渐进式"]
                        },
                        {
                            url: "https://react.docschina.org/",
                            title: "React",
                            img: "JS-frame/react.svg",
                            desc: "用于构建用户界面的 JavaScript 库。",
                            tags: ["热门", "前端"]
                        },
                        {
                            url: "https://www.angularjs.net.cn/",
                            title: "Angular",
                            img: "JS-frame/angular.png",
                            desc: "AngularJS有着诸多特性，最为核心的是：模块化、双向数据绑定、依赖注入等等。",
                            tags: ["前端"]
                        },
                        {
                            url: "https://www.jquery123.com/",
                            title: "Jquery",
                            img: "JS-frame/jquery.png",
                            desc: "Jquery 提供的 API 易于使用且兼容众多浏览器，如事件处理、动画和 Ajax 等操作更加简单。",
                            tags: ["前端"]
                        },
                    ]
                },
                {
                    title: "前端插件",
                    icon: "bx-plug",
                    website: [
                        {
                            url: "https://layer.layui.com/",
                            title: "Layer",
                            img: "Front-end-plugin/layer.png",
                            desc: "用于实现网页中的各种弹出层交互，是一个Web弹窗/层的解决方案。",
                            tags: ["插件"]
                        },
                        {
                            url: "https://echarts.apache.org/",
                            title: "Echarts",
                            img: "Front-end-plugin/echarts.png",
                            desc: "一个由百度EFE团队出品的基于 JavaScript 的开源可视化图表库。",
                            tags: ["热门", "插件"]
                        },
                        {
                            url: "https://msurguy.github.io/background-blur/",
                            title: "Background-blur",
                            img: "Front-end-plugin/backgroundblur.png",
                            desc: "一个用于模糊图像的超小 Jquery 插件，基于 SVG 生成。",
                            tags: ["插件"]
                        },
                        {
                            url: "https://interactjs.io/",
                            title: "Interact",
                            img: "Front-end-plugin/interact.svg",
                            desc: "Interact是一个基于 JavaScript 的强大插件，集拖放、调整大小和多点触控手势等功能。",
                            tags: ["插件"]
                        },
                        {
                            url: "https://www.swiper.com.cn/",
                            title: "Swiper",
                            img: "Front-end-plugin/swiper.png",
                            desc: "Swiper 是纯 javascript 打造的滑动特效插件，面向手机、平板电脑等移动终端。",
                            tags: ["插件"]
                        },
                    ]
                },
                {
                    title: "Web公共库",
                    icon: "bxs-webcam",
                    website: [
                        {
                            url: "https://www.bootcdn.cn/",
                            title: "BootCDN",
                            img: "Web-public-library/bootcdn.png",
                            desc: "一个稳定、快速、免费的前端开源项目 CDN 加速服务，共收录了 4k+ 个前端开源项目。",
                            tags: ["CDN"]
                        },
                        {
                            url: "https://www.staticfile.org/",
                            title: "StaticCDN",
                            img: "Web-public-library/staticcdn.png",
                            desc: "一个 CDN 仓库，尽可能全面的收录优秀的开源库，并免费为之提供 CDN 加速服务。",
                            tags: ["CDN"]
                        },
                        {
                            url: "https://www.jq22.com/",
                            title: "JQ插件库",
                            img: "Web-public-library/jq22.png",
                            desc: "最全面的 Jquery 插件库，几乎收录了所有最新最好用的插件。",
                            tags: ["仓库"]
                        },
                        {
                            url: "http://jscdn.upai.com/",
                            title: "又拍云CDN",
                            img: "Web-public-library/upai.png",
                            desc: "又拍云为您托管常用的JavaScript库，您可以在自己的网页上直接通过script标记引用这些资源。",
                            tags: ["CDN"]
                        },
                    ]
                },
                {
                    title: "字体图标",
                    icon: "bx-text",
                    website: [
                        {
                            url: "https://www.iconfont.cn/",
                            title: "Iconfont",
                            img: "Font-icon/iconfont.svg",
                            desc: "阿里妈妈MUX倾力打造的矢量图标管理、交流平台。便于前端工程师自由调整与调用。",
                            tags: ["图标"]
                        },
                        {
                            url: "https://boxicons.com/",
                            title: "Boxicons",
                            img: "Font-icon/boxicons.svg",
                            desc: "高品质的网页图标，为设计师和开发人员精心制作的简单矢量图标。",
                            tags: ["图标"]
                        },
                        {
                            url: "https://icomoon.io/",
                            title: "Icomoon",
                            img: "Font-icon/icomoon.png",
                            desc: "国外的一款像素级完美图标解决方案，提供免费开源的字体图标库。",
                            tags: ["图标", "字体"]
                        },
                        {
                            url: "https://fontawesome.dashgame.com/",
                            title: "FontAwesome",
                            img: "Font-icon/fontawesome.png",
                            desc: "Font Awesome 为您提供可缩放的矢量图标，您可以使用CSS所提供的所有特性对它们进行更改。",
                            tags: ["图标", "字体"]
                        },
                    ]
                },
                {
                    title: "包管理器",
                    icon: "bx-command"
                },
                {
                    title: "模板引擎",
                    icon: "bx-notepad"
                },
                {
                    title: "服务器",
                    icon: "bx-server"
                },
                {
                    title: "辅助工具",
                    icon: "bxs-face-mask"
                },
                {
                    title: "社区论坛",
                    icon: "bxl-blogger"
                },
                {
                    title: "图片素材",
                    icon: "bx-image-add"
                },
                {
                    title: "精选站点",
                    icon: "bx-select-multiple"
                },
                {
                    title: "站长工具",
                    icon: "bx-selection"
                }
            ],
        }
    },
    methods: {
        getAnnouncement() {
            var that = this;
            axios.get("https://autumnfish.cn/api/joke").then(
                function (response) {
                    that.announcement = response.data;
                    that.isLoading[1] = false;
                }, function (err) {
                    console.log(err);
                }
            )
        },
        closeAnnouncement() {
            this.isShowAnnouncement = false;
        },
        openAnnouncement() {
            this.$alert(this.announcement, '公告', {
                confirmButtonText: '已阅'
            });
        },
        openCopyTips(lock) {
            if (lock) {
                this.$message({
                    message: '链接已复制，感谢分享！',
                    type: 'success'
                });
            }
            else {
                this.$message('复制的太快啦！');
            }
        }
    },
    created() {
        console.log('© 2021 ChenZhongYu.\nhttp://chenzhongyu.top\n\n暂时不做JS混淆，欢迎观看我的代码\n');
        console.log(this.last_updated);
        //禁用右键 （防止右键查看源代码）
        // window.oncontextmenu = function () {
        //     return false;
        // };
        this.getAnnouncement();
        setTimeout(() => {
            this.isLoading[0] = false;
        }, 1000);
    },
    mounted() {
        let that = this;
        new ClipboardJS('.copy-link').on('success', function (e) {
            that.openCopyTips(that.lock);
            if (that.lock) {
                that.lock = false;
                // 节流：控制执行次数
                setTimeout(() => {
                    that.lock = true;
                }, 1000);
            }
        });
    },
}).$mount('#index');