describe("This is the factory function tests for matching days", function () {
    describe("The addColor function", function () {
        it("should return data object with marked days", function () {
            var kapanie = Factory();
            assert.deepEqual({
                "Sunday": {
                    "nameOfDay": "Sunday"
                },
                "Monday": {
                    "nameOfDay": "Monday"
                },
                "Tuesday": {
                    "nameOfDay": "Tuesday"
                },
                "Wednesday": {
                    "nameOfDay": "Wednesday",
                    "dateTwoColor": "yellow"
                },
                "Thursday": {
                    "nameOfDay": "Thursday"
                },
                "Friday": {
                    "nameOfDay": "Friday",
                    "dateOneColor": "red"
                },
                "Saturday": {
                    "nameOfDay": "Saturday"
                },
            }, kapanie.addColor("01-05-1990", "12-02-1992"))
        });
        it("should return data object with marked days", function () {
            var kapanie = Factory();
            assert.deepEqual({
                "Sunday": {
                    "nameOfDay": "Sunday",
                    "dateOneColor": "red"
                },
                "Monday": {
                    "nameOfDay": "Monday"
                },
                "Tuesday": {
                    "nameOfDay": "Tuesday"
                },
                "Wednesday": {
                    "nameOfDay": "Wednesday",
                    "dateTwoColor": "yellow"
                },
                "Thursday": {
                    "nameOfDay": "Thursday"
                },
                "Friday": {
                    "nameOfDay": "Friday"
                },
                "Saturday": {
                    "nameOfDay": "Saturday"
                },
            }, kapanie.addColor("01-05-2020", "12-02-2020"))
        });
        it("should return data object with marked days", function () {
            var kapanie = Factory();
            assert.deepEqual({
                "Sunday": {
                    "nameOfDay": "Sunday"
                },
                "Monday": {
                    "nameOfDay": "Monday"
                },
                "Tuesday": {
                    "nameOfDay": "Tuesday",
                },
                "Wednesday": {
                    "nameOfDay": "Wednesday"
                },
                "Thursday": {
                    "match": "green",
                    "nameOfDay": "Thursday"
                },
                "Friday": {
                    "nameOfDay": "Friday"
                },
                "Saturday": {
                    "nameOfDay": "Saturday"
                },
            }, kapanie.addColor("01-09-2020", "06-11-2020"))
        });
    });
    describe("The getDay function", function () {
        it("should return the day of the week", function () {
            var kapanie = Factory();
            assert.equal("Tuesday", kapanie.getDay("01-07-2020"))
        });
    });
    describe("The weekDays function", function () {
        it("should return the days of the week", function () {
            var kapanie = Factory();
            assert.deepEqual(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], kapanie.weekDays())
        });
    });
    describe("The isMatch function", function () {
        it("should return true if day one and day two match ", function () {
            var kapanie = Factory();
            assert.equal(false, kapanie.isMatch("14-08-2018", "12-06-2020"))
        });
    });

    describe("The isMatch function", function () {
        it("should return true if day one and day two match ", function () {
            var kapanie = Factory();
            assert.equal(true, kapanie.isMatch("14-07-2020", "28-07-2020"))
        });
    });
});