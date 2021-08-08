new Vue({
    data() {
        return {
            last_updated: 'Last updated: Aug 8, 2021',
            search: '',
            announcement: '',
            isShowAnnouncement: true,
            isLoading: [true, true],
            sidebar: [
                {
                    title: "UI框架",
                    icon: "bxs-file-css"
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
            ]
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

    },
}).$mount('#index');