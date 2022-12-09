/* 网页的[其他界面] */
class OtherUi {
    /* 构造函数 */
    constructor() {
        /* 初始化 */
        //初始化[组件]
        this.topMenuPanelElement = document.querySelector("#topMenu .menu");
        this.openTopMenuButtonElement = document.querySelector("#topMenu .openButton");
    }
    /* 事件 */
    //当鼠标点击[打开菜单栏 按钮]时
    OnClickOpenTopMenuButton() {
        //打开菜单栏
        this.topMenuPanelElement.style.top = "0px";
    }
    //当鼠标点击[关闭菜单栏 按钮]时
    OnClickCloseTopMenuButton() {
        //打开菜单栏
        this.topMenuPanelElement.style.top = "-115px";
    }
}
