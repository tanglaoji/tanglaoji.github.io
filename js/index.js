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
                    icon: "bxs-file-js"
                },
                {
                    title: "前端插件",
                    icon: "bx-plug"
                },
                {
                    title: "Web公共库",
                    icon: "bxs-webcam"
                },
                {
                    title: "字体图标",
                    icon: "bx-text"
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