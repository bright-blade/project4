let crrtEmail;
function correctedEmail(){
    var myModal = new bootstrap.Modal(document.getElementById("exampleModal1"));
    // $(".modal").modal("show");


    
    let inptMail = document.querySelector("#id_email_name").value;
    inptMailSlice = inptMail.slice(-10,);
    inptMailSliceH = inptMail.slice(-12,);
    if( inptMailSlice == "@gnail.con" || inptMailSlice == "@gnail.com" || inptMailSlice == "@fmail.com"){
        myModal.show();
        let x = inptMail.slice(0,-10) + "@gmail.com"
        document.querySelector("#id_suggest_label").innerHTML = x;
        document.querySelector("#id_wrong_label").innerHTML =` keep (${inptMail})` ;  
        crrtEmail = document.querySelector("#id_email_name").value.slice(0,-10) + "@gmail.com";   
    }else if(inptMailSlice == "gmaill.com"){
        myModal.show();
        let l = inptMail.slice(0,-10) + "gmail.com"
        document.querySelector("#id_suggest_label").innerHTML = l;
        document.querySelector("#id_wrong_label").innerHTML =` keep (${inptMail})` ;     
        crrtEmail = document.querySelector("#id_email_name").value.slice(0,-11) + "@gmail.com";   
    }else if(inptMailSliceH == "@hotnail.com" || inptMailSliceH == "@hotmail.con" ){
        myModal.show();
        let h = inptMail.slice(0,-12) + "@hotmail.com"
        document.querySelector("#id_suggest_label").innerHTML = h;
        document.querySelector("#id_wrong_label").innerHTML =` keep (${inptMail})` ;     
        crrtEmail = document.querySelector("#id_email_name").value.slice(0,-12) + "@hotmail.com";
    }else if(inptMailSliceH == "hotmaill.com" ){
        myModal.show();
        let h = inptMail.slice(0,-12) + "@hotmail.com"
        document.querySelector("#id_suggest_label").innerHTML = h;
        document.querySelector("#id_wrong_label").innerHTML =` keep (${inptMail})` ;     
        crrtEmail = document.querySelector("#id_email_name").value.slice(0,-13) + "@hotmail.com";
    }
}
function changeEmail(){
    let y = document.getElementById("id_suggest").checked;
    if( document.querySelector("#id_suggest").checked){
        let inputEmail = document.querySelector("#id_email_name");
        inputEmail.value = crrtEmail;
        addToLocalStorage(inputEmail);

    }
}