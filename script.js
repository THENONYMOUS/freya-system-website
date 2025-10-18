function toggleId(id) {
    if (document.getElementById(id).getAttribute("expanded") == "0") {
        document.getElementById(id).setAttribute("expanded", "1")
    }
    else {
        document.getElementById(id).setAttribute("expanded", "0")
    }
}


function load(parentElement) {
    let el = 0

    while (el < parentElement.getElementsByClassName("expandElement").length) {
        const element = parentElement.getElementsByClassName("expandElement")[el]
        element.id = String(el)
        if (element.getAttribute("expanded") == "0") {
            element.innerHTML = `${element.getAttribute("defaultHTML")}<br><center><div class="readmore" onclick="toggleId(${String(el)}); load(document)">Read More</div></center>`
        }
        else {
            element.innerHTML = `${element.getAttribute("defaultHTML")}<br><center><div class="readmore" onclick="toggleId(${String(el)}); load(document)">Read Less</div></center>${element.getAttribute("extraHTML")}`
            load(element)
        }
        el++
    }
}

setTimeout(load, 100, document)