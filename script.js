const JustFood = pocetLidi => {
    const cena = pocetLidi * 100
    document.body.innerHTML += `Catering od Just Food pro ${pocetLidi} lidí za ${cena} Kč.<br>`
}

const YourMama = pocetLidi => {
    const cena = pocetLidi * 250
    document.body.innerHTML += `Catering od Your Mama pro ${pocetLidi} lidí za ${cena} Kč.<br>`
}

const FlavourHaven = pocetLidi => {
    const cena = pocetLidi * 500
    document.body.innerHTML += `Catering od Flavour Haven pro ${pocetLidi} lidí za ${cena} Kč.<br>`
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
    } else if (spolecnost === YourMama) {
        cena = pocetLidi * 250
    } else if (spolecnost === FlavourHaven) {
        cena = pocetLidi * 500
    }
    document.body.innerHTML += `Událost s názvem ${udalost} s cateringem od ${spolecnost.name} pro ${pocetLidi} ${sklonovaniLidi(pocetLidi)} stojí ${cena} Kč.`
}

createEvent("Vánoce", 4, FlavourHaven)