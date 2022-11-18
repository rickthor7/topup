document.addEventListener("DOMContentLoaded", function (event) {
    const cord = localStorage.getItem("userid");
    const chek = document.getElementById("cheo");
    if (cord === null && !!chek) {
        window.location.href = "./index.html";
    } else if (!!cord && !chek) {
        window.location.href = "./checkout.html";
    }
    async function mlHarga() {
        try {
            const response = await fetch("./harga.json");
            const hargas = await response.json();
            const listHar = document.getElementById("lihar");
            hargas.map((a) => {
                return (listHar.innerHTML += `<div class="col-6 my-2" >
                <input type="radio" class="btn-check tophar" name="nominaltopup" id="success-outlined${a.key}" autocomplete="off"  value="${a.key + ". " + a.diamond + " : " + a.harga}" required/>
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
    const coreval = () => {
        const denom = document.getElementById("denomco");
        if (!!denom) {
            denom.innerHTML += localStorage.getItem("diamn");
            document.getElementById("hargasss").innerHTML += localStorage.getItem("hargss");
            document.getElementById("hargco").innerHTML += localStorage.getItem("hargss");
            document.getElementById("usrco").innerHTML += localStorage.getItem("userid");
            document.getElementById("zoneco").innerHTML += localStorage.getItem("zoneid");
            document.getElementById("nowaco").innerHTML += localStorage.getItem("nomorwa");
        }
        const conocls = document.getElementsByClassName("conovis")[0];
        if (!!conocls) {
            for (var i = 0; i < localStorage.length; i++) {
                let asd = localStorage.key(i);
                let sda = localStorage.getItem(asd);
                // console.log(asd, sda);
                conocls.innerHTML += ` <input type="hidden" readonly="readonly" name="${asd}" value="${sda}" />`;
            }
        }
    };
    coreval();

});
// const scrollbot = [...document.getElementsByClassName("tophar")];
// const anchor1  = document.querySelector("dana1");
// for (const box of scrollbot) {
//     box.addEventListener("click", (e) => {
//     e.preventDefault();
//     anchor1.scrollIntoView();
    
// })}


const fo = document.forms["fotop"];
if (fo) {
    fo.addEventListener("submit", (e) => {
        e.preventDefault();
        const radhar = document.querySelector('input[name="nominaltopup"]:checked').value;
        const foval = [...document.getElementsByClassName("fo-val")];
        const foname = ["userid", "zoneid", "pembayaran", "nomorwa"];
        const harnam = ["diamn", "hargss"];
        // console.log(foval)
        // console.log(radhar)

        foval.map((e, index) => {
            let folonme = foname[index];
            // console.log(folonme, e.value)
            return localStorage.setItem(folonme, e.value);
        });
        let harsplt = radhar.split(" : ");
        console.log(harsplt);
        harsplt.map((e, index) => {
            let harnams = harnam[index];
            // console.log(harnams, e);
            localStorage.setItem(harnams, e);
        });
        localStorage.setItem("nominaltopup", radhar);
        window.location.href = "./checkout.html";
    });
}

const scriptURL = "https://script.google.com/macros/s/AKfycby_utqPLbluf47a0uTAd5e5NBJO1LxRJGEsNLAi8-07fUe-MVcGMGReX9gr4fyrgiGPzg/exec";
const co = document.forms["cotop"];
if (co) {
    co.addEventListener("submit", (e) => {
        e.preventDefault();
        AmagiLoader.show();
        fetch(scriptURL, { method: "POST", body: new FormData(co) })
            .then((response) => console.log("Success!", response))
            .then(() => localStorage.setItem("sudahco", "sudahkonfirm"))
            .then(() =>
                setTimeout(() => {
                    AmagiLoader.hide();
                }, 5000)
            )
            .then(() => (window.location.href = "./checkout.html"))
            .catch((error) => console.error("Error!", error.message));
    });
}

const ubhdat = [...document.getElementsByClassName("datdel")];
if (!!ubhdat) {
    ubhdat.map((sd) => {
        sd.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.clear();
            window.location.href = "./index.html";
        });
    });
}

const confrm = localStorage.getItem("sudahco");
const ccofrm = document.getElementById("chag");
const ccofrm2 = document.getElementById("chag2");

if (!!confrm && !!ccofrm) {
    ccofrm.style.cssText = "display:none";
    ccofrm2.style.cssText = "display:flex";
} else if (!confrm && !!ccofrm) {
    ccofrm2.style.cssText = "display:none";
    ccofrm.style.cssText = "display:flex";
}
