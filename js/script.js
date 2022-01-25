window.onload =  function () {
        console.log("js working");
        
        document.querySelector("#id_Mr").addEventListener("click",function(){
                onMrMis();
                titleLocalStorage(this);
        })
        document.querySelector("#id_Mis").addEventListener("click",function(){
                onMrMis();
                titleLocalStorage(this);
        })
        document.querySelector("#id_corporate").addEventListener("click",function(){
                onCorporate();
                titleLocalStorage(this);
        })
        document.querySelector("#id_association").addEventListener("click",function(){
                onAssociation();
                titleLocalStorage(this);
        })

        
        
        
        let mypromise = new Promise((resolve)=>{
                checkLocalTitle();
                countSelectFromLocal();
                checkAddedCardBtnLocalStorageFlag();
                resolve();
                
        })
        mypromise.then(()=>{
                titleCheck();
                checkLocal();
                checkLocalBtn();
                
        })
        
        isSeed();
        if_dif();
        dateOnCard();



        // ---------chenge title by local storage----------//1
        let titleCheck = () => {
                if(localStorage["title"]){
                    if(localStorage["title"]=="id_corporate"){
            
                        onCorporate();
                    }else if(localStorage["title"]=="id_association"){
                        
                        onAssociation();
                    }else{
                        onMrMis();
                    }
                }
            }
            

        // ----------- change gender ---------------//

        function onMrMis() {
                document.querySelector("#id_per_dtl").innerHTML = "personal details <p>&#8212;</p>";
                document.querySelector("#id_dtl_of_prsn").classList.remove("d-none");
                document.querySelector("#id_cprt").classList.add("d-none");
                document.querySelector("#id_associ").classList.add("d-none");
                document.querySelector("#id_card_account").classList.add("d-none");
                empty();
                changeFN();
                changeLN();
                changeCos();
                cardCount(counterCardsOnMr);
                console.log("mr");
        }


        function onCorporate() {
                document.querySelector("#id_per_dtl").innerHTML = "corporate information <p>&#8212;</p>";
                document.querySelector("#id_dtl_of_prsn").classList.add("d-none");
                document.querySelector("#id_cprt").classList.remove("d-none");
                document.querySelector("#id_associ").classList.add("d-none");
                document.querySelector("#id_card_account").classList.remove("d-none");
                empty();
                changeCom();
                changeStrc();
                changecoscom();
                cardCount();
        }

        function onAssociation() {
                document.querySelector("#id_per_dtl").innerHTML = "association information <p>&#8212;</p>";
                document.querySelector("#id_dtl_of_prsn").classList.add("d-none");
                document.querySelector("#id_cprt").classList.add("d-none");
                document.querySelector("#id_associ").classList.remove("d-none");
                document.querySelector("#id_card_account").classList.remove("d-none");
                empty();
                changeAssc();
                changecoscom();
                cardCount();

        }
                // --------card's changes---------//
        
} //<<--------------- end of onload---------------//


function changeFN() {
        let f = document.getElementById("id_first_name").value;
        document.getElementById("id_f_name_card").innerHTML = f;
        document.getElementById("id_first_summ").innerHTML = f + " ";
}

function changeLN() {
        let f = document.getElementById("id_last_name").value;
        document.getElementById("id_l_name_card").innerHTML = f;
        document.getElementById("id_last_summ").innerHTML = f;
}

function changeCos() {
        let f = document.getElementById("id_custom").value;
        document.getElementById("id_cstm_card").innerHTML = f;
}
// +++ Company
function changeCom() {
        let f = document.getElementById("id_company_name").value;
        document.getElementById("id_f_name_card").innerHTML = f;
        document.getElementById("id_first_summ").innerHTML = f + " ";
}

function changeStrc() {
        let f = document.getElementById("id_structure_name").value;
        document.getElementById("id_l_name_card").innerHTML = f;
        document.getElementById("id_last_summ").innerHTML = f;
}

function changecoscom() {
        let f = document.getElementById("id_here_1").value;
        document.getElementById("id_cstm_card").innerHTML = f;
}
// +++ Association
function changeAssc() {
        let f = document.getElementById("id_association_name").value;
        document.getElementById("id_f_name_card").innerHTML = f;
        document.getElementById("id_first_summ").innerHTML = f + " ";
}
// +++ empty
function empty() {
        document.getElementById("id_f_name_card").innerHTML = "";
        document.getElementById("id_l_name_card").innerHTML = "";
        document.getElementById("id_cstm_card").innerHTML = "";
}

// +++ date on th card
function dateOnCard() {
        let x, y, z;
        const d = new Date();
        y = d.getFullYear();
        x = y - 1998;
        z = d.getMonth() + 1,
                document.getElementById("id_date").innerHTML = `${z}/${x}`;
}
// -----------menu of small screan---------------//
function menu() {
        let bars = document.getElementById("id_nav");
        bars.classList.toggle("d-none");
}

// -----------Scroll through pages---------------//

var p = 0;
beforeNext = () => {
        if (p == 1) {
                if (validaPart_1()) {
                        next();
                }
        } else if (p == 2) {
                if (validaPart_2()) {
                        next();
                }
        } else {
                next();
        }
}

function validaPart_1() {
        if (document.querySelector("#id_i_do").checked) {
                if (document.querySelector("#id_corporate").checked) {
                        if (validaCompany() && validaStructure() && validaDOB_2()) {
                                return true;
                        } else {
                                return false;
                        }
                } else if (document.querySelector("#id_association").checked) {
                        if (validaAssociation() && validaDOB_3()) {
                                return true;
                        } else {
                                return false;
                        }
                } else {
                        if (validaFirst() && validaLast() && validaDOB_1()) {
                                return true;
                        } else {
                                return false;
                        }
                }
        } else {
                return false;
        }
}

function validaPart_2() {
        if (document.querySelector("#id_i_will").checked)
                if (validaEmail() && validaPhone() && validaAdress() && validaCity() && validaZip() && validaAnswer) {
                        if (document.querySelector("#id_delivery").checked) {
                                if (validaAdressDel() && validaCityDel() && validaZipDel()) {
                                        return true;
                                } else {
                                        return false;
                                }
                        } else {
                                return true;
                        }
                } else {
                        return false;
                }
}

function next() {
        document.getElementById("p-" + p).classList.add("d-none");
        p++;
        document.getElementById("p-" + p).classList.remove("d-none");
        if (p > 0) {
                document.getElementById("id_btn").classList.remove("d-none");
        }
        if (p == 3) {
                document.getElementById("id_continue").classList.add("d-none");
                cards = document.querySelector("#id_select").value;
                document.querySelector("#id_one_or_two").innerHTML = cards;
                updateSelectConnectSummaryToLocalStorage();
                mailDetails();
                ibanSumm();
                total();
                sponsorship();
        }
        if (p == 2) {
                document.getElementById("id_per_dtl").classList.add("d-none");
                document.getElementById("id_my_dtl").classList.remove("d-none");
        } else {
                document.getElementById("id_per_dtl").classList.remove("d-none");
                document.getElementById("id_my_dtl").classList.add("d-none");
        }
        if (p == 1 || p == 2) {
                document.getElementById("id_1_2").classList.remove("d-none");
                dateOnCard();
        } else {
                document.getElementById("id_1_2").classList.add("d-none");
        }

}

function pre() {
        document.getElementById("p-" + p).classList.add("d-none");
        p--;
        document.getElementById("p-" + p).classList.remove("d-none");
        if (p > 0) {
                document.getElementById("id_btn").classList.remove("d-none");
        } else {
                document.getElementById("id_btn").classList.add("d-none");

        }
        if (p == 3) {
                document.getElementById("id_continue").classList.add("d-none");

        } else {
                document.getElementById("id_continue").classList.remove("d-none");

        }
        if (p == 2) {
                document.getElementById("id_per_dtl").classList.add("d-none");
                document.getElementById("id_my_dtl").classList.remove("d-none");
        } else {
                document.getElementById("id_per_dtl").classList.remove("d-none");
                document.getElementById("id_my_dtl").classList.add("d-none");
        }
        if (p == 1 || p == 2) {
                document.getElementById("id_1_2").classList.remove("d-none");
        } else {
                document.getElementById("id_1_2").classList.add("d-none");
        }

}

// ----------- checkbox if diffrent ---------------//
if_dif = () => {
        let checkbox = document.querySelector("#id_delivery");
        if (checkbox.checked == true) {

                $(".if_dif").show();
        } else {
                $(".if_dif").hide();
        }
}

// ----------- add Card ---------------//
let counterCardsOnMr
function addNewCard() {
        counterCardsOnMr = 2;
        document.querySelector("#id_added").classList.remove("d-none");
        document.querySelector("#id_label_custom_2").classList.remove("d-none");
        document.querySelector("#id_add_card").classList.add("d-none");
        document.querySelector("#id_one_or_two").innerHTML = counterCardsOnMr ;
        cardCount(counterCardsOnMr);
}

function deleteNewCard() {
        counterCardsOnMr = 1;
        document.querySelector("#id_added").classList.add("d-none");
        document.querySelector("#id_label_custom_2").classList.add("d-none");
        document.querySelector("#id_add_card").classList.remove("d-none");
        document.querySelector("#id_one_or_two").innerHTML = counterCardsOnMr ;
        // document.querySelector("#id_select").value = counterCardsOnMr;
        cardCount(counterCardsOnMr);
}




function cardCount(seedCount) {

        let countCards;

        if(seedCount){
                countCards = seedCount;
                console.log(countCards);
        }else{
                countCards = document.querySelector("#id_select").value;
        }

        console.log(countCards);
        document.querySelector("#id_indicate").innerHTML =
          '<div class="me-3 me-md-0 col-8  col-md-6 pe-md-2"><label for="">Indicate here the desired customization</label><input id="id_here_1" type="text" oninput="changecoscom(),addToLocalStorage(this)"></div><div id="id_card_label" class="col-4 col-md-6 ps-md-2"><p class="mb-0">IBAN UK</p><label for="id_uk-1"><input id="id_uk-1" class="class_uk" type="radio" name="flag" onclick="ibanSummary(this)" onchange="getByName(this)"><span class="uk_span pointer"></span></label><label for="id_french-1"><input id="id_french-1" class="class_fr" type="radio" name="flag" onclick="ibanSummary(this)" onchange="getByName(this)"><span class="french_span pointer"></span></label></div>';
      
          document.querySelector("#id_cards_count").innerHTML =
          '<label class="col-12" for="id_deposit_1">Card #1 First Deposit<select name="deposit_1" id="id_deposit_1" class="col-12 jx15" onchange="selectConnectSummary(this),addToLocalStorage(this)"><option value="0">0 &euro;</option><option value="10">10 &euro;</option><option value="20">20 &euro;</option><option value="30">30 &euro;</option><option value="100">100 &euro;</option></select></label>';
          
          billFixedUpgrade();
          selectConnectSummary(document.querySelector("#id_deposit_1"));
          
        for (let i = 2; i <= countCards; i++) {
                document.querySelector("#id_indicate").innerHTML +=
                '<div class="me-3 me-md-0 col-8  col-md-6 pe-md-2"><label for="">Indicate here the desired customization</label><input id="id_here_' +
                i +
            '" type="text" oninput="addToLocalStorage(this)"></div><div id="id_card_label' +
            i +
            '" class="col-4 col-md-6 ps-md-2"><p class="mb-0">IBAN UK</p><label for="id_uk-' +
            i +
            '"><input id="id_uk-' +
            i +
            '" class="class_uk" type="radio" name="flag' +
            i +
            '" onclick="ibanSummary(this)" onchange="getByName(this)"><span class="uk_span pointer"></span></label><label for="id_french-' +
            i +
            '"><input id="id_french-' +
            i +
            '" class="class_fr" type="radio" name="flag' +
            i +
            '" onclick="ibanSummary(this)" onchange="getByName(this)"><span class="french_span pointer"></span></label></div>';
            
            document.querySelector("#id_cards_count").innerHTML +=
            '<label class="col-12 mt-3" for="id_deposit_' +
            i +
            '">Card #' +
            i +
            ' First Deposit<select name="deposit_' +
            i +
            '" id="id_deposit_' +
            i +
            '" class="col-12" onchange="selectConnectSummary(this),addToLocalStorage(this)"><option value="0">0 &euro;</option><option value="10">10 &euro;</option><option value="20">20 &euro;</option><option value="30">30 &euro;</option><option value="100">100 &euro;</option></select></label>';
            
            // let s =
            let sVal = document.querySelector("#id_deposit_" + i).value;
            document.querySelector("#id_summary_bill").innerHTML += `
            <p id="id_card_${i}" class="m-0">
            <i id="id_less_${i}" class="fa fa-trash-o text-danger pointer" onclick="lessOne(this)" aria-hidden="true"></i>
            1 X card (annual fees)<span id="id_iban_span_${i}"></span> 
            <span id="id_cost_card_${i}" class="float-end">
            29.90&euro;
            </span>
            </p>
            
            <p id="id_first_deposit_${i}" class="m-0 ms-4 " >
            <i id="id_trash_${i}" class="fa fa-trash-o text-white pointer" onclick="zero(this)" aria-hidden="true"></i>
            First deposit
            <span id="id_depo_${i}" class="float-end">
            ${sVal}&euro;
            </span>
            </p>
            `;
            selectConnectSummary(document.querySelector("#id_deposit_" + i));
        }
        
        checkLocal();

      }
      
      // ==========fixed============//
      
      function billFixedUpgrade() {
        let cor = document.querySelector("#id_corporate").checked;
        let asso = document.querySelector("#id_association").checked;
        let s = document.querySelector("#id_deposit_1");
        let sVal = s.value;
        if (cor) {
          document.querySelector("#id_summary_bill").innerHTML = `
              <span class="bg-light text-warning position-absolute rounded-circle px-2 py-1 cart">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <p id="id_fixed" class="m-0 ms-3">
              Fixed (upgrade corporate)
                  <span id="id_upgrade_auto" class="float-end">
                      8&euro;
                  </span>
          </p>
          <p id="id_card_1" class="m-0 ms-3">
              <!-- <i class="fa fa-trash-o text-danger pointer" aria-hidden="true"></i> -->
              1 X card (annual fees)<span id="id_iban_span_1"></span> 
              <span id="id_cost_card_1" class="float-end">
                  29.90&euro;
              </span>
          </p>
          <p id="id_first_deposit_1" class="m-0 ms-4" >
              <i id="id_trash_1" class="fa fa-trash-o text-white pointer" onclick="zero(this)" aria-hidden="true"></i>
              First deposit
              <span id="id_depo_1" class="float-end">
              ${sVal}&euro;
              </span>
          </p>
      `;
        } else if (asso) {
          document.querySelector(
            "#id_summary_bill"
          ).innerHTML = `                            <span class="bg-light text-warning position-absolute rounded-circle px-2 py-1 cart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <p id="id_fixed" class="m-0 ms-3">
          Fixed (upgrade association)
              <span  class="float-end">
                  8&euro;
              </span>
          </p>
          <p id="id_card_1" class="m-0 ms-3">
          <!-- <i class="fa fa-trash-o text-danger pointer" aria-hidden="true"></i> -->
          1 X card (annual fees)<span id="id_iban_span_1"></span> 
          <span id="id_cost_card_1" class="float-end">
              29.90&euro;
          </span>
          </p>
          <p id="id_first_deposit_1" class="m-0 ms-4" >
          <i id="id_trash_1" class="fa fa-trash-o text-white pointer" onclick="zero(this)" aria-hidden="true"></i>
          First deposit
          <span id="id_depo_1" class="float-end">
          ${sVal}&euro;
          </span>
          </p>
          `;
        } else {
      
          document.querySelector("#id_summary_bill").innerHTML = `                            
          <span class="bg-light text-warning position-absolute rounded-circle px-2 py-1 cart">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <p id="id_card_1" class="m-0 ms-3">
          <!-- <i class="fa fa-trash-o text-danger pointer" aria-hidden="true"></i> -->
          1 X card (annual fees)<span id="id_iban_span_1"></span> 
          <span id="id_cost_card_1" class="float-end">
              29.90&euro;
          </span>
          </p>
          <p id="id_first_deposit_1" class="m-0 ms-4" >
          <i id="id_trash_1" class="fa fa-trash-o text-white pointer" onclick="zero(this)" aria-hidden="true"></i>
          First deposit
          <span id="id_depo_1" class="float-end">
          ${sVal}&euro;
          </span>
          </p>
          `;
        }
      }
      
      // ----- trash icons--------//
      
      function lessOne(_elem) {
        let x = _elem.id.slice(-1);
        let ar_value = [];
        let howMuch = document.querySelector("#id_select").value;
        for (let i = 1; i <= howMuch; i++) {
          if (i < x) {
            ar_value[i] = document.querySelector(`#id_deposit_${i}`).value;
          } else if (i > x) {
            ar_value[i - 1] = document.querySelector(`#id_deposit_${i}`).value;
          }else{
                deleteItemFromLS(document.querySelector(`#id_deposit_${i}`))
          }
        }
        console.log(ar_value);
        howMuch--;
        if (document.querySelector(`#id_Mr`).checked || document.querySelector(`#id_Mis`).checked) {

          deleteNewCard();
          for (let i = 1; i < ar_value.length; i++) {
                  let y = document.querySelector(`#id_deposit_${i}`);
                  y.value = ar_value[i];
                  addToLocalStorage(y);
          }
          cardCount(counterCardsOnMr);
                
        }else{
                let select = document.querySelector("#id_select")
                select.value = howMuch;
                countSelect(select);
                for (let i = 1; i < ar_value.length; i++) {
                        let y = document.querySelector(`#id_deposit_${i}`);
                        y.value = ar_value[i];
                        addToLocalStorage(y);
                }
                cardCount();
        }
        total();
        updateSelectConnectSummaryToLocalStorage();
      
        // let promiseCard = new Promise(function (resolve) {
        //         () => {
        //                 for (let i = 1; i < ar_value.length; i++) {
        //                   let y = document.querySelector(`#id_deposit_${i}`);
        //                   y.value = ar_value[i];
        //                 //   selectConnectSummary(y);
        //                 }
        //         }
        //         resolve();
        // });
        
        // promiseCard.then(()=>{

        // });
        
      }
      
      function zero(elem) {
        let j = elem.id.slice(-1);
        let depoSelect = document.querySelector("#id_deposit_" + j);
        depoSelect.value = 0;
        selectConnectSummary(depoSelect);
        total();
      }
      
      function selectConnectSummary(_Select) {
        let k = _Select.id.slice(-1);
        let s = document.querySelector("#id_first_deposit_" + k);
        let depo = document.querySelector("#id_depo_" + k);
        let val = _Select.value;
        if (_Select.value == 0 || _Select == null) {
          s.classList.add("d-none");
        } else {
          s.classList.remove("d-none");
          depo.innerHTML = `${val}&euro;`;
        }
      }


      let updateSelectConnectSummaryToLocalStorage = () => {
        let mrChecked = document.querySelector(`#id_Mr`).checked;
        let missChecked = document.querySelector(`#id_Mis`).checked;
        let count;
        
        if( mrChecked || missChecked ){
                count = counterCardsOnMr;
                console.log("counterCardsOnMr:"+count);
        }else{
                count = document.querySelector("#id_select").value;
                console.log(`document.querySelector("#id_select").value:`+count);
        }
        for (let i = 1; i <= count; i++) {
                let selectFirst = document.querySelector("#id_deposit_"+i);
                console.log(selectFirst);
                selectConnectSummary(selectFirst);
        }
}


      function ibanSummary(iban) {
        let ib = iban.id.slice(3,5);
        let ind = iban.id.slice(-1);
        if ( ib == "fr"){
            document.querySelector(`#id_iban_span_${ind}`).innerHTML = ", Iban: FR"
          }else if (ib == "uk"){
            document.querySelector(`#id_iban_span_${ind}`).innerHTML = ", Iban: UK"
        }
}      
// --------details summary changes---------//
function mailDetails() {
        document.querySelector("#id_full_address").innerHTML = document.querySelector("#id_address_name").value;
        let city = document.querySelector("#id_city_name").value + " ";
        let zipy = document.querySelector("#id_zip_name").value;
        document.querySelector("#id_full_city").innerHTML = city + zipy;
        document.querySelector("#id_state").innerHTML = document.querySelector("#id_country").value;
}

// -------- summary card type---------//

basic = () => {
        document.querySelector("#id_card_type_summ").innerHTML = " basic";
}
Classic = () => {
        document.querySelector("#id_card_type_summ").innerHTML = " Classic";
}
vip = () => {
        document.querySelector("#id_card_type_summ").innerHTML = " VIP";
}
ibanSumm = () => {

        document.querySelector("#id_iban_summ").innerHTML = " UK";
        if (document.querySelector("#id_fr_1").checked) {

                document.querySelector("#id_iban_summ").innerHTML = " French";
        }
}
// ---------- total------------//
function total(){
        let s;
        let sum = 0;
        let mrChecked = document.querySelector(`#id_Mr`).checked;
        let missChecked = document.querySelector(`#id_Mis`).checked;
        if( mrChecked || missChecked ){
                s = counterCardsOnMr;
        }else{
                s = document.querySelector(`#id_select`).value;
                sum += 8 ;
        }
        let cards = parseInt(s, 10);
        sum += 29.9 * cards;
        for(let i = 1 ; i <= cards ; i++ ){
                let depo = document.querySelector("#id_deposit_"+i).value;
                let d = parseInt(depo, 10)
                sum += d;
        }       



        let print = sum.toFixed(2);
        document.querySelector("#id_totalos").innerHTML = print +"&euro;";
        return print;
    }