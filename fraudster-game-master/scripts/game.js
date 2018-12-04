var accountBalance = 50,
    cashInHand = 0;

toastr.options = {
    "closeButton": true

}

function timeTicker(timeStamp) {
    document.getElementById('time-tracker').innerHTML = timeStamp;
    setTimeout(function() {
        var timeStore = timeStamp.split(':');
        if (Number(timeStore[1]) == 59) {
            timeStore[0] = Number(timeStore[0]) + 1;
            timeStore[1] = '00';
        } else {
            timeStore[1] = timeStore[1] < 9 ? '0' + (Number(timeStore[1]) + 1) : Number(timeStore[1]) + 1;
        }
        //loop-on
        timeTicker(timeStore.join(":"))
    }, 1000)
}

$(function() {

    $("#rulesModal").modal();
    $("#rulesModal").on('hidden.bs.modal', function() {
        timeTicker('0:00');
    });
    $(".radioShopSelect").change(function(event){
        debugger;
    })

});
