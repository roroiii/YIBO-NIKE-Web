
//了解更多 Modal
$(function(){
    $("#moreInfo").bind("click",function(){
        //顯示視窗前呼叫
        $("#moreInfo").on("show.bs.modal", function (e) {
            console.log('顯示視窗前呼叫');
        });

        //轉場特效結束，已完全呈現時呼叫
        $("#moreInfo").on("shown.bs.modal", function (e) {
            console.log('轉場特效結束，已完全呈現時呼叫');
        });

        //關閉視窗前呼叫
        $("#moreInfo").on("hide.bs.modal", function (e) {
            console.log('關閉視窗前呼叫');
        });

        //轉場特效結束，已完全隱藏時呼叫
        $("#moreInfo").on("hidden.bs.modal", function (e) {
            console.log('轉場特效結束，已完全隱藏時呼叫');
        });

        //隱藏視窗
        $("#moreInfo").modal('hide');

        //開啟視窗
        $("#moreInfo").modal('show');

        //切換視窗顯示、不顯示
        $("#moreInfo").modal('toggle');

        //判斷視窗是否開啟中
        if ($("#moreInfo").hasClass('in')) {
            console.log('視窗目前是開啟的狀態..');
        }
    });
});
