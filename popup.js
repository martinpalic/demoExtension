function parsePlzenska(result) {
    let plzenskaDoc = new DOMParser().parseFromString(result, "text/html")
    let parentElement = plzenskaDoc.getElementsByClassName("day-title")[0].parentElement;
    let container = document.getElementById("plzenska")
    container.innerHTML = ""
    for (let i = 0; i < 22; i++) {
        // container.insertAdjacentElement("beforeemd", "<>")
        container.appendChild(parentElement.nextSibling)
    }
    return container
}

function parseHaus(result) {
    let plzenskaDoc = new DOMParser().parseFromString(result, "text/html")
    let parentElement = plzenskaDoc.getElementsByClassName("denne-menu")[0].children[1].children[new Date(Date.now()).getDay() - 1];
    parentElement.removeChild(parentElement.getElementsByTagName("h2")[0])
    let container = document.getElementById("haus")
    container.innerHTML = ""
        container.appendChild(parentElement)
    return container
}

function parseQuijote(result) {
    let plzenskaDoc = new DOMParser().parseFromString(result, "text/html")
    let parentElement = plzenskaDoc.getElementsByClassName("dnesne_menu")[0];
    parentElement.removeChild(parentElement.getElementsByTagName("h2")[0])
    let container = document.getElementById("quijote")
    container.innerHTML = ""
    container.appendChild(parentElement)
    return container
}

function parseSvadby(result) {
    let plzenskaDoc = new DOMParser().parseFromString(result, "text/html")
    let parentElement = plzenskaDoc.getElementsByClassName("dnesne_menu")[0];
    parentElement.removeChild(parentElement.getElementsByTagName("h2")[0])
    let container = document.getElementById("svadby")
    container.innerHTML = ""
    container.appendChild(parentElement)
    return container
}

function refreshData() {
    fetch('https://menucka.sk/denne-menu/bratislava/plzenska-brana').then(r => r.text()).then(result => {
        parsePlzenska(result)
    })

    fetch('https://gastrohouse.sk/').then(r => r.text()).then(result => {
        parseHaus(result)
    })

    fetch('https://restauracie.sme.sk/restauracia/don-quijote_7436-nove-mesto_2653/denne-menu').then(r => r.text()).then(result => {
        parseQuijote(result)
    })

    fetch('https://restauracie.sme.sk/restauracia/svadby-a-kari-americka_10343-nove-mesto_2653/denne-menu').then(r => r.text()).then(result => {
        parseSvadby(result)
    })
}

refreshData()
