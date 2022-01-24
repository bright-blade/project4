let countDownDate = new Date("Jan 26, 2022 23:58:25").getTime();

function sponsorship(){
  $.ajax({
    url: "sponsorship.json",
    dataType: "json",
    crossDomain: true,
    success: function (data) {
      ajax_ar = data;
      let parameters = new URLSearchParams(window.location.search);
      for (const key in ajax_ar) {
        if (ajax_ar[key].code == parameters.get('sponsorship')) {
              console.log("yes")
              let countDownDate = new Date(ajax_ar[key].date).getTime();

                 console.log(countDownDate)
                let spo = setInterval(function() {
                  
                let now = new Date().getTime();
                
                let distance = countDownDate - now;
                
                // Time calculations for days, hours, minutes and seconds
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                
                // Output the result in an element with id="demo"
                days = pad(days);
                document.getElementById("id_days").innerHTML = days ;
                hours = pad(hours);
                document.getElementById("id_hours").innerHTML =  hours ;
                minutes = pad(minutes);
                document.getElementById("id_minutes").innerHTML = minutes ;
                
                // If the count down is over, write some text 
                if (distance < 0) {
                  clearInterval(spo);
                  document.getElementById("id_modal").innerHTML = 
                  `
                  <div class="d-flex col-12 flex-column position-relative align-items-center">
                  <img src="images/Project 3 - Sponsorship.png" class="col-4 mb-4" alt="present">
                  <div class="btn rounded-pill btn-warning text-uppercase p-2 px-3 text-white fw-bold col-4 position-absolute bottom-0">+5&euro;</div>
                  </div>
                  <h5 class="mx-5 mt-3 text-center">This offer has expired but you can buy an <span class="text-uppercase">amex</span> card</h5>
                  <button type="button" class="btn rounded-pill btn-warning text-uppercase p-2 px-3 text-white fw-bold my-3" data-bs-dismiss="modal">i order &#10095;</button>
                  <p class="small">
                  This offer has expired
                  </p>
                  `;
                }
              }, 1000);
            

                if(ajax_ar[key].per == "card"){
                    let cards = document.querySelector("#id_select").value;
                    console.log(cards);
                    total();
                    console.log(total());
                    let discount = cards * ajax_ar[key].amount;
                    let x = total() - discount;
                    console.log(x);
                    document.querySelector("#id_summary_bill").innerHTML += `<p class=" m-0 ms-4">discount of ${discount}&euro;</p> `
                    document.querySelector("#id_totalos").innerHTML = `${x}&euro; `
                }else{
                    total();
                    let discount = ajax_ar[key].amount;
                    let x = total() - discount;
                    document.querySelector("#id_summary_bill").innerHTML += `<p class=" m-0 ms-4">discount of ${discount}&euro;</p> `
                    document.querySelector("#id_totalos").innerHTML = `${x}&euro; `

                }


                playTheModal();
                
            }
        }
    }
})
}
  
  
  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
