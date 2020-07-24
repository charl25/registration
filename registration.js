const input = document.querySelector(".regInput")
const addBtn = document.querySelector(".addBtn")
const display = document.querySelector(".display")
const filterBtn = document.querySelector(".filterBtn")

var list = []
if (typeof localStorage["regNums"] !== "undefined" && localStorage["regNums"] !== "undefined") {
    list = JSON.parse(localStorage.getItem('regNums'));
}

var regNums = RegNums(list)

addBtn.addEventListener('click', function () {
    display.innerHTML = ""

    var regNum = input.value.trim();
    regNums.plateNumber(regNum)
    list = regNums.getPlates()

    for (var i = 0; i < list.length; i++) {
        const plate = document.createElement("li")
        plate.innerHTML = list[i]
        display.appendChild(plate)
    }

    localStorage.setItem('regNums', JSON.stringify(list));
})

filterBtn.addEventListener('click', function () {

    var checkedPlace = document.querySelector("input[name='town']:checked")
    display.innerHTML = ""
    regNums.sort(checkedPlace.value)
    var print = regNums.sorted()

    for (var i = 0; i < print.length; i++) {
        const plate = document.createElement("li")
        plate.innerHTML = print[i]
        display.appendChild(plate)
    }

})
