const API_KEY = "6ffd99b0fcefab65be94cd3f";
let rate = 1;
async function fetchAPI(url) {
    const loading = `
    <div class="fa-3x">
    <i class="fa-solid fa-spinner fa-spin-pulse"></i>
    </div>
    `;
    let spinElement = document.getElementById("result");
    spinElement.innerHTML = loading;
    try{
        let result = await fetch(url)

        if(!result.ok) {
            throw new Error(`Error - ${result.status}`);
        }
        let data = await result.json()
        spinElement.innerHTML = '';

        return data;

    }catch(error){
        console.log(error)
        throw new Error(`Error - ${error}`);
    }
}

async function getAllCurrencies() {
    try{
        let url = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
        let data = await fetchAPI(url)

        var curr_codes = data.supported_codes.reduce((acc,c) => {
            acc[c[0]] = c[1]
            return acc
        },{})
        return curr_codes;
    }catch(error){
        console.log(error)
        throw new Error(`Error - ${error}`);
    }
}

async function fillCurrSelects() {
    allCurr = await getAllCurrencies();
    const selectElements = document.querySelectorAll("select");
  
    selectElements.forEach((el) => {
        Object.keys(allCurr).forEach((code) => {
        el.innerHTML += `<option value="${code}">${code} - ${allCurr[code]}</option>`;
      });
    });
}

fillCurrSelects() 

const converterForm = document.getElementById("converter-form");
converterForm.addEventListener("submit", async (e) => {
  e.preventDefault();


  if (e.target.amount.value === "") {
    alert("You need to input an amount...");
    return;
  }
  fetchRate()

  //e.target.amount.value = "";
});


const switchDirectionBtn = document.getElementById("switchDirection")
switchDirectionBtn.addEventListener("click", () => {
    const fromSelect = document.getElementById("fromCur");
    const toSelect = document.getElementById("toCur");

    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    fetchRate();
});


async function fetchRate() {
    const loading = `
    <div class="fa-3x">
    <i class="fa-solid fa-spinner fa-spin-pulse"></i>
    </div>
    `;
    const fromCurrencySelectInput = document.getElementById("fromCur").value;
    const toCurrencySelectInput = document.getElementById("toCur").value;
    const amount = document.getElementById("amount").value;
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = loading;
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrencySelectInput}/${toCurrencySelectInput}/${amount}`;
    //    const { conversion_result: result } = await fetchFromCurrencyApi(url);
  
    try{
        let data = await fetchAPI(url)
        rate = data.conversion_rate
        if (amount === ''){
            resultElement.innerHTML = ''
            return
        }else if(amount === 0){
            resultElement.innerHTML = '0'
            return
        }else if(data == undefined) {
            resultElement.innerHTML = ''
        }else {
            resultElement.innerHTML = `${data.conversion_result}`
        }
        return rate
    }catch(error){
        console.log(error)
        throw new Error(`Error - ${error}`);
    }
}

const fromSelect = document.getElementById("fromCur");
const toSelect = document.getElementById("toCur");
const amountInput = document.getElementById("amount");

fromSelect.addEventListener("change", () => {
    fetchRate();
});

toSelect.addEventListener("change", () => {
    fetchRate();
});

amountInput.addEventListener("change", () => {
    let resultElement = document.getElementById("result");

    if (amountInput.value === "") {
        resultElement.innerHTML = "";
        return;
    }
    let amount = parseInt(amountInput.value)
    resultElement.innerHTML = `${rate * amount}`
});