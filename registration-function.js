function RegNums(list) {
    let plate = list || [];
    //let sortedList = [];

    function plateNumber(x) {
        if (/C[AYJ] \d{3,6}$/.test(x) && !(plate.includes(x))) {
            plate.push(x) //= x
        }
    }
    function getPlates() {
        return plate
    }

    function sort(x) {
        sortedList = [];
        if (x === "CA") {
            for (var i = 0; i < plate.length; i++) {
                if (/CA \d{3,6}$/.test(plate[i])) {
                    sortedList.push(plate[i])
                }
            }
        }
        if (x === "CJ") {
            for (var i = 0; i < plate.length; i++) {
                if (/CJ \d{3,6}$/.test(plate[i])) {
                    sortedList.push(plate[i])
                }
            }
        }
        if (x === "CY") {
            for (var i = 0; i < plate.length; i++) {
                if (/CY \d{3,6}$/.test(plate[i])) {
                    sortedList.push(plate[i])
                }
            }
        }
        if (x === "all") {

            sortedList = list
        }

    }

    function sorted() {
        return sortedList
    }

    return {
        plateNumber,
        getPlates,
        sort,
        sorted
    }
}