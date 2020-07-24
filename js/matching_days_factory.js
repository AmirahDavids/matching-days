function Factory() {

    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function weekDays() {
        return daysOfTheWeek;
    };

    function getDay(date) {
        if (date != undefined) {
            var newDate = new Date(date);
            return daysOfTheWeek[newDate.getDay()];
        }

    }

    function isMatch(dateOne, dateTwo) {

        if (dateOne !== undefined && dateTwo !== undefined) {

            var dayOne = new Date(dateOne);
            var dayTwo = new Date(dateTwo);

            if (daysOfTheWeek[dayOne.getDay()] === daysOfTheWeek[dayTwo.getDay()]) {

                return true
            } else {
                return false
            }
        }

    }

    function addColor(dateOne, dateTwo) {
        var days = {};


        for (var i = 0; i < daysOfTheWeek.length; i++) {
            var currentDay = daysOfTheWeek[i];

            days[currentDay] = {
                nameOfDay: currentDay
            }

            if (getDay(dateOne) === currentDay) {
                days[currentDay] = Object.assign({
                    "dateOneColor": "red"
                }, days[currentDay]);
                if (isMatch(dateOne, dateTwo)) {
                    delete days[currentDay].dateOneColor;
                    days[currentDay] = Object.assign({
                        "match": "green"
                    }, days[currentDay]);
                }

            }

            if (getDay(dateTwo) === currentDay) {
                days[currentDay] = Object.assign({
                    "dateTwoColor": "yellow"
                }, days[currentDay]);
                if (isMatch(dateOne, dateTwo)) {
                    delete days[currentDay].dateTwoColor;
                    days[currentDay] = Object.assign({
                        "match": "green"
                    }, days[currentDay]);
                }
            }
        }
        return days;
    }


    return {
        getDay,
        weekDays,
        addColor,
        isMatch,

    }
}