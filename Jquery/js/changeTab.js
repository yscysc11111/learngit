/**
 * Created by zz on 2019/3/18.
 */
$.fn.changeTab= function (index) {
    $(this).find("ul:eq("+index+")").show().siblings("ul").hide();
};