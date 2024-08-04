let dropdown = document.querySelectorAll("select");
let convAmt = document.querySelector(".convAmt");

for (let select of dropdown) {
    for (let currCoun in countries) {
        let option = document.createElement("option");
        option.innerHTML = currCoun;
        option.value = countries[currCoun];
        if (select.name == "from" && currCoun == "USD") {
            option.selected = true;
        } else if (select.name == "to" && currCoun == "INR") {
            option.selected = true;
        }
        select.append(option);
    }
    select.addEventListener(("change"), (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let counCode = element.value;
    let img = element.parentElement.querySelector("img");
    let newSrc = `https://flagsapi.com/${counCode}/flat/64.png`;
    img.src = newSrc;
}

document.querySelector("button").addEventListener(("click"), (evt) => {
    let input = evt.target.parentElement.querySelector("input");
    let inpValue = input.value;

    let fromCode = dropdown[0].value;
    let toCode = dropdown[1].value;
    let excRate = exchangeRateAPI(fromCode, toCode);
    let chAmt = inpValue * excRate;
    convAmt.innerHTML = `${inpValue} ${fromCode} = ${chAmt} ${toCode}`;
});

document.getElementById("exchange-btn").addEventListener("click", () => {
    let tempValue = dropdown[0].value;
    dropdown[0].value = dropdown[1].value;
    dropdown[1].value = tempValue;
    updateFlag(dropdown[0]);
    updateFlag(dropdown[1]);
});
