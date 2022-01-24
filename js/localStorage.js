var save_ar = [];
var save_btn_ar = [];

function addToLocalStorage(elem){
    let key = elem.id;
    console.log(key);
    checkExist(elem);
    localStorage.setItem("customer",JSON.stringify(save_ar))
    console.log(save_ar);
}

function checkExist(_elem) {
    for (let i in save_ar) {
        if(_elem.id==save_ar[i].id){
            console.log("if");
            save_ar[i].value = _elem.value;
            return;
        }   
    }
    console.log("else");
    save_ar.push({id:_elem.id,value:_elem.value});
}

function checkLocal(){
    if(localStorage["customer"]){
        save_ar = JSON.parse(localStorage["customer"]);
        for (const i in save_ar) {
            let element = document.querySelector("#"+save_ar[i].id)
            if(element){
                element.value = save_ar[i].value;
            }
        }
    }
}

// ---local storage for all btns---//
function addBtnToLocalStorage(elem){
    checkExistBtn(elem);
    localStorage.setItem("customer-btns",JSON.stringify(save_btn_ar))
}

function checkExistBtn(_elem) {
    for (let i in save_btn_ar) {
        if(_elem.id==save_btn_ar[i].id){
            save_btn_ar[i].checked = _elem.checked;
            return;
        }   
    }
    save_btn_ar.push({id:_elem.id,checked:_elem.checked});
}

function checkLocalBtn(){
    if(localStorage["customer-btns"]){
        save_btn_ar = JSON.parse(localStorage["customer-btns"]);
        for (const i in save_btn_ar) {
            if(save_btn_ar[i].checked){
                document.querySelector("#"+save_btn_ar[i].id).click()
            }
        }
    }
}

// ---local storage for all btns---//

let getByName = (elem)=>{
    let radioName = elem.name;
    let name_ar = document.querySelectorAll(`[name=${radioName}]`);
    for (const thatRadio of name_ar) {
        addBtnToLocalStorage(thatRadio);
    }

}

// ---add button saved at local storage at MR or MIss---//
function addedCardBtnLocalStorageFlag(){
    if(localStorage["dblCard"]){
        if(localStorage["dblCard"] == "1"){
            localStorage["dblCard"] = "2";
        }else{
            localStorage["dblCard"] = "1";
        }
    }else{
        localStorage.setItem("dblCard","1")
    }
}
let checkAddedCardBtnLocalStorageFlag = ()=>{
    if(localStorage["dblCard"]){
        if(localStorage["dblCard"]=="2"){
            document.querySelector("#id_add_card").click();
            addedCardBtnLocalStorageFlag();
        }
    }
}

// ---title saved at local storage---//
function titleLocalStorage(elem){
    localStorage.setItem("title",elem.id)
}


function checkLocalTitle(){
    if(localStorage["title"]){
        let element = document.querySelector('#'+localStorage.title);
        element.click();
    }
}


// 
let countSelect = (elem) =>  localStorage.setItem("countCards",elem.value);  
// + 
let countSelectFromLocal = ()=>{
    if(localStorage["countCards"]){
        document.querySelector("#id_select").value = localStorage["countCards"];
    }
    // cardCount();
}

let deleteItemFromLS = (_elem)=>{
    console.log(_elem);
    for (let i in save_ar) {
        if(_elem.id==save_ar[i].id){
            save_ar.splice(i, 1);
        }
    }
    localStorage.setItem("customer",JSON.stringify(save_ar))
}


