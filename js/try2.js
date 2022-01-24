var ajax_ar;
function callAjax(){
    $.ajax({
        url: "details.json",
        dataType: "json",
        crossDomain: true,
        success:function(data){
            ajax_ar=data;
            seedDetails();
            onMrMis();
        }
    })
}

function seedDetails(){
    $(".jx0").val(ajax_ar[1].first_name);
    $(".jx1").val(ajax_ar[1].last_name);
    $(".jx2").val(ajax_ar[1].custom);
    $(".jx3").val(ajax_ar[1].date);
    $(".jx4").val(ajax_ar[1].company);
    $(".jx5").val(ajax_ar[1].corporate);
    $(".jx6").val(ajax_ar[1].association);
    $(".jx7").val(ajax_ar[1].email);
    $(".jx8").val(ajax_ar[1].phone);
    $(".jx9").val(ajax_ar[1].address);
    $(".jx10").val(ajax_ar[1].city);
    $(".jx11").val(ajax_ar[1].zip);
    $(".jx12").val(ajax_ar[1].cuontry);
    $(".jx13").val(ajax_ar[1].s_q);
    $(".jx14").val(ajax_ar[1].answer);
    $(".jx15").val(ajax_ar[1].card);
}

// url parameter
isSeed = () =>{
    let parameters = new URLSearchParams(window.location.search);
    if( parameters.get("seed")){
        callAjax()
    }
}

