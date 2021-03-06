// 常用时间操作
window.mylib.date = {
    /**
     * 格式化 Unix 时间戳
     * @param date 要格式化的日期
     * @param format 进行格式化的模式字符串
     *     支持的模式字母有：
     *     y:年,
     *     M:年中的月份(1-12),
     *     d:月份中的天(1-31),
     *     h:小时(0-23),
     *     m:分(0-59),
     *     s:秒(0-59),
     *     S:毫秒(0-999),
     *     q:季度(1-4)
     * @return String
     * @example mylib.date.format(1466394241, 'yyyy-MM-dd hh:mm:ss'); // 'yyyy年MM月dd日 hh:mm:ss'
     */
    format: function (date, format) {
        if (date == 0 || date == '') return '';

        date = new Date(date * 1000);

        var map = {
            "M": date.getMonth() + 1, //月份
            "d": date.getDate(), //日
            "h": date.getHours(), //小时
            "m": date.getMinutes(), //分
            "s": date.getSeconds(), //秒
            "q": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        format = format.replace(/([yMdhmsqS])+/g, function(all, t){
            var v = map[t];
            if(v !== undefined){
                if(all.length > 1){
                    v = '0' + v;
                    v = v.substr(v.length-2);
                }
                return v;
            }
            else if(t === 'y'){
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
    }
};

window.mylib.htmlspecialchars = function(str){
    if(typeof str == "undefined" || !str) return "";
    str = str.toString();
    if(str.length == 0) return "";

    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#039;');
    return str;
};

//判断大小写是否打开
window.mylib.detectCapsLock = function(e) {
    var keyCode = e.keyCode || e.which;
    var isShift = e.shiftKey || !!(keyCode == 16);
    if (
        ((keyCode >= 65 && keyCode <= 90) && !isShift) ||
        ((keyCode >= 97 && keyCode <= 122) && isShift)
    ) {
        return true;
    } else {
        return false;
    }
};
