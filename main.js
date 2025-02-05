let passLength = document.getElementById("password-length");
let uprCase = document.getElementById("uppercase");
let splChr = document.getElementById("specialchar");
let num = document.getElementById("number");

let result = document.getElementById("result");

passLength.addEventListener("input", ()=>{
    generatPassword();
})

uprCase.addEventListener("input",()=>{
    generatPassword();
})

splChr.addEventListener("input",()=>{
    generatPassword();
})

num.addEventListener("input",()=>{
    generatPassword();
})


const lAlpha = "abcdefghijklmnopqrstuvwxyz";
const uAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?/`~";



let button = document.getElementById("submit-btn");

button.addEventListener("click",()=>{
    generatPassword();
})


function generatPassword(){

    let range = lAlpha;
    if(passLength.value<12 || passLength.value>150)
    {
        result.textContent = "Password Size  should be range between 12 to 150";
        return;
    }

    let arr = [];
    arr.length = passLength.value;

    if(uprCase.checked)
    {
        range+=uAlpha;

        while(1)
        {
            let random = Math.floor(Math.random()*uAlpha.length);
            let randomIdx = Math.floor(Math.random()*passLength.value);
            if(arr[randomIdx] == null)
            {
                arr[randomIdx] = uAlpha[random];
                break;
            }
        }
    }

    if(num.checked)
    {
        range+=numbers;
        while(1)
            {
                let random = Math.floor(Math.random()*numbers.length);
                let randomIdx = Math.floor(Math.random()*passLength.value);
                if(arr[randomIdx] == null)
                {
                    arr[randomIdx] = numbers[random];
                    break;
                }
            }
    }

    if(splChr.checked)
    {
        range+= symbols;
        while(1)
        {
            let random = Math.floor(Math.random()*symbols.length);
            let randomIdx = Math.floor(Math.random()*passLength.value);
            if(arr[randomIdx] == null)
            {
                arr[randomIdx] = symbols[random];
                break;
            }
        }
    }

    for(let i=0;i<passLength.value;i++)
    {
        if(arr[i] == null)
        {
            let random = Math.floor(Math.random()*range.length);
            arr[i] = range[random];
        }
    }

    result.textContent = arr.join('');
}
