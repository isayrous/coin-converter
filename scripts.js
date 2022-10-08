const convert = document.getElementById("button-converter")
const select2 = document.getElementById("seccond-select")
const select1 = document.getElementById("first-select")
/* REAL, DOLAR, BITCOIN , EURO */
const real = [5.16, 5.08]
const dolar = [0.19 , 0.98]
const euro = [0.20 , 1.02]
const bitcoin = [98137.74 , 19010.10 , 19269.79]


const convertvalue = () => {
    const input = document.getElementById("values").value
    const returninput1 = document.getElementById("return-input1")
    const returninput2 = document.getElementById("return-input2")
    /* RETURNS DO INPUT 1 */

    if (select1.value === 'R$ Real Brasileiro') {
        returninput1.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
        }).format(input)

        if (select2.value === 'US$ Dólar Americano') {
            returninput2.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
            }).format(input * dolar[0])
        }
        else if (select2.value === '€ Euro') {
            returninput2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency', currency: 'EUR'
            }).format(input * euro[0])
        }
        else if (select2.value === 'Bitcoin'){
            returninput2.innerHTML = (input / bitcoin[0]).toFixed(2)
        }
        else if (select2.value === 'R$ Real Brasileiro') {
            returninput2.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(input)
        }
    }


    else if (select1.value === 'US$ Dólar Americano') {
        returninput1.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(input)
    
        if (select2.value === 'US$ Dólar Americano') {
            returninput2.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
            }).format(input)
        }
        else if (select2.value === '€ Euro') {
            returninput2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency', currency: 'EUR'
            }).format(input * euro[1])
        }
        else if (select2.value === 'Bitcoin'){
            returninput2.innerHTML = (input / bitcoin[1]).toFixed(2)
        }
        else if (select2.value === 'R$ Real Brasileiro') {
            returninput2.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(input * real[0])
        }
        
    } 
    
    else if (select1.value === '€ Euro') {
        returninput1.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(input)

        if (select2.value === 'US$ Dólar Americano') {
            returninput2.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
            }).format(input * dolar[1])
        }
        else if (select2.value === '€ Euro') {
            returninput2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency', currency: 'EUR'
            }).format(input)
        }
        else if (select2.value === 'Bitcoin'){
            returninput2.innerHTML = (input / bitcoin[1]).toFixed(2)
        }
        else if (select2.value === 'R$ Real Brasileiro') {
            returninput2.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(input * real[1])
        }
    } 
    
    else if (select1.value === 'Bitcoin') {
        returninput1.innerHTML = (input)

        if (select2.value === 'US$ Dólar Americano') {
            returninput2.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
            }).format(input * bitcoin[1])
        }
        else if (select2.value === '€ Euro') {
            returninput2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency', currency: 'EUR'
            }).format(input * bitcoin[2])
        }
        else if (select2.value === 'Bitcoin'){
            returninput2.innerHTML = (input)
        }
        else if (select2.value === 'R$ Real Brasileiro') {
            returninput2.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(input * bitcoin[0])
        }


    }

}

const change2 = () => {
    const currencyName2 = document.getElementById("seccond-currency")
    const currencyImg2 = document.getElementById("currency-img2")

    if (select2.value === '€ Euro') {
        currencyName2.innerHTML = '€ Euro'
        currencyImg2.src = "./assets/EURO.png"
    } else if (select2.value === 'Bitcoin') {
        currencyName2.innerHTML = 'Bitcoin'
        currencyImg2.src = "./assets/BITCOIN.png"
    } else if (select2.value === 'US$ Dólar Americano') {
        currencyName2.innerHTML = 'Dólar'
        currencyImg2.src = "./assets/USA.png"
    } else if (select2.value === 'R$ Real Brasileiro') {
        currencyName2.innerHTML = 'Real'
        currencyImg2.src = "./assets/BRL.png"
    }

    convertvalue()
}

const change1 = () => {
    const currencyName1 = document.getElementById("first-currency")
    const currencyImg1 = document.getElementById("currency-img1")

    if (select1.value === '€ Euro') {
        currencyName1.innerHTML = '€ Euro'
        currencyImg1.src = "./assets/EURO.png"
    } else if (select1.value === 'Bitcoin') {
        currencyName1.innerHTML = 'Bitcoin'
        currencyImg1.src = "./assets/BITCOIN.png"
    } else if (select1.value === 'US$ Dólar Americano') {
        currencyName1.innerHTML = 'Dólar'
        currencyImg1.src = "./assets/USA.png"
    } else if (select1.value === 'R$ Real Brasileiro') {
        currencyName1.innerHTML = 'Real'
        currencyImg1.src = "./assets/BRL.png"
    }
    convertvalue()

}

convert.addEventListener('click', convertvalue)
select1.addEventListener('change', change1)
select2.addEventListener('change', change2)