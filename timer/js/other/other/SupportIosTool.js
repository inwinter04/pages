/* 支持ios
   (让这个网页，可以支持ios系统：
    1、修改css样式
    2、减少音效) */
class SupportIosTool {
    /* 构造函数 */
    constructor() {
        //初始化变量
        this.isIos = false;
        //初始化组件
        this.buttonDownAudio = document.querySelector("#audios .buttonDown");
        this.completeAudio = document.querySelector("#audios .complete");
        this.catUpAudio = document.querySelector("#audios .catUp1");
    }
    /* 属性 */
    //是否是ios系统？
    get IsIos() {
        return this.isIos;
    }
    /* 公开方法 */
    //支持ios系统
    SupportIos() {
        //获取userAgent
        let _userAgent = navigator.userAgent;
        //根据userAgent中的数据，来判断是否是ios平台
        this.isIos = !!_userAgent.match(/iPhone|iPod|iPad|ios|mac/i);
        //如果是ios平台
        if (this.isIos == true) {
            /* 插入css代码 */
            //获取<head>元素
            let _head = document.querySelector("head");
            //创建1个<style>元素
            let _style = document.createElement("style");
            //一个文本节点：写CSS代码
            let _textNode = document.createTextNode("*{-webkit-user-select: none;}input{-webkit-appearance:none;border: 0px;}#timingUi .clock *{line-height: 240px;}#countdownUi .time .timeText{line-height: 270px;}#timingUi .changeClockInput .minute .input {padding: 0px;margin: -10px 0px 0px 0px;height: 100%;font-size: 180px;}#timingUi .changeClockInput .seconds .input {padding: 0px;margin: -10px 0px 0px 0px;height: 100%;font-size: 180px;}");
            //把写好的代码，放进这个<style>元素中
            _style.appendChild(_textNode);
            //把这个<style>元素，放到<head>元素中
            _head.appendChild(_style);
        }
    }
    //播放声音
    PlayAudio(_audioType) {
        //如果用户设置的是 不播放音效，就不执行之后的代码啦~
        if (TimerApp.Datas.volume <= 0)
            return;
        //播放声音
        switch (_audioType) {
            case AudioType.ButtonDown:
                this.buttonDownAudio.play();
                break;
            case AudioType.ButtonUp:
                break;
            case AudioType.AddOrlessNumber:
                break;
            case AudioType.Complete:
                this.completeAudio.play();
                break;
            case AudioType.CatUp:
                this.catUpAudio.play();
                break;
            case AudioType.CatDown:
                break;
        }
    }
}
