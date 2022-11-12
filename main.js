const scriptURL = "https://script.google.com/macros/s/AKfycby_utqPLbluf47a0uTAd5e5NBJO1LxRJGEsNLAi8-07fUe-MVcGMGReX9gr4fyrgiGPzg/exec";
const form = document.forms["cotop"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
        window.location.href = ('./checkout.html');
    });

async function mlHarga() {
    try {
        const response = await fetch("./harga.json");
        const hargas = await response.json();
        const listHar = document.getElementById("lihar");
        hargas.map((a) => {
            return listHar.innerHTML += (`<div class="col-6 my-2" >
            <input type="radio" class="btn-check" name="nominaltopup" id="success-outlined${a.key}" autocomplete="off"  value="${a.key+ ". " + a.diamond + " / " +a.harga}" required/>
            <label class="btn btn-outline-primary price-box" for="success-outlined${a.key}">
                <div class="position-relative">
                <span line-height="52px" class="just-pay-13e7uab"></span>
                    <span class="text-box"><strong>${a.diamond}</strong></span>
                    <br />
                    <span  class="harg-box">${a.harga}</span>
                </div>
            </label>
        </div>`);
        });
    } catch (err) {
        return err;
    }
}
mlHarga();
