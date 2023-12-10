const JustFood = pocetLidi => {
    const cena = pocetLidi * 100
    const nazev = 'Just Food'
    document.body.innerHTML += `Catering od ${nazev} pro ${pocetLidi} lidí za ${cena} Kč.<br>`
}

const YourMama = pocetLidi => {
    const cena = pocetLidi * 250
    const nazev = 'Your Mama'
    document.body.innerHTML += `Catering od ${nazev} pro ${pocetLidi} lidí za ${cena} Kč.<br>`
}

const FlavourHaven = pocetLidi => {
    const cena = pocetLidi * 500
    const nazev = 'Flavour Haven'
    document.body.innerHTML += `Catering od ${nazev} pro ${pocetLidi} lidí za ${cena} Kč.<br>`
}

JustFood(15)
YourMama(15)
FlavourHaven(15)

const createEvent = (udalost, pocetLidi, spolecnost) => {
    let cena; 

    const sklonovaniLidi = pocetLidi => {
        if (pocetLidi === 1) {
            return 'člověka'
        } else if (pocetLidi >= 2 && pocetLidi <= 4) {
            return 'lidi'
        } else {
            return 'lidí'
        }
    }
    
    if (spolecnost === JustFood) {
        cena = pocetLidi * 100
        nazev = "Just Food"
    } else if (spolecnost === YourMama) {
        cena = pocetLidi * 250
        nazev = "Your Mama"
    } else if (spolecnost === FlavourHaven) {
        cena = pocetLidi * 500
        nazev = "Flavour Haven"
    }
    document.body.innerHTML += `Událost s názvem ${udalost} s cateringem od ${nazev} pro ${pocetLidi} ${sklonovaniLidi(pocetLidi)} stojí ${cena} Kč.`
}

createEvent("Vánoce", 4, FlavourHaven)

document.title = "Vyhlídalová - Úkol 7"