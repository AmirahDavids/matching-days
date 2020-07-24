window.addEventListener("DOMContentLoaded", function () {

    var dateSelectorOne = document.querySelector(".dateOne");
    var dateSelectorTwo = document.querySelector(".dateTwo");

    var matchingDaysTemplateSource = document.querySelector(".matchingDaysTemplate").innerHTML;
    var matchingDaysTemplate = Handlebars.compile(matchingDaysTemplateSource);
    var insertMatchingDaysTemplate = document.querySelector(".insertMatchingDaysTemplate");

    var instance = Factory();


    window.addEventListener("load", function () {
        var data = {
            days: instance.addColor()
        }
        var matchingDaysDataHTML = matchingDaysTemplate(data);
        insertMatchingDaysTemplate.innerHTML = matchingDaysDataHTML;
    });

    dateSelectorOne.addEventListener("change", function () {
        var firstDate = dateSelectorOne.value;
        var secondDate = dateSelectorTwo.value;
        var data = {
            days: instance.addColor(firstDate, secondDate),

        };
        var matchingDaysDataHTML = matchingDaysTemplate(data);
        insertMatchingDaysTemplate.innerHTML = matchingDaysDataHTML;
    });

    dateSelectorTwo.addEventListener("change", function () {
        var firstDate = dateSelectorOne.value;
        var secondDate = dateSelectorTwo.value;
        var data = {
            days: instance.addColor(firstDate, secondDate),

        };
        var matchingDaysDataHTML = matchingDaysTemplate(data);
        insertMatchingDaysTemplate.innerHTML = matchingDaysDataHTML;
    });
});

