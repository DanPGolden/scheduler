$(document).ready(function() {

    // Adding date
    $("#date").text(moment().format("MMMM Do YYYY"));
    
    
    let description = $(".description");
    let saveButton = $(".saveBtn");
    let current = moment().hour();
    

    
    // color coding rows to their designated times
    description.each(function () {
        let timeBlock = parseInt($(this).attr("id"));
    
        if (timeBlock === current) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (timeBlock < current) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
    
    // populating to appropriate row upon loading browser
    
    description.each(function() {
    
        for (let i = 0; i < localStorage.length; i++) {
            let object = localStorage.key(i);
            let value = localStorage.getItem(object);
            let rowHour = $(this).siblings(".hour").text();
            
            if (object === rowHour) {
                $(this).val(value);
            }
           
        }
    });
    
// saving to local storage
    function tasks () {
        let currentTime = $(this).data("hour");
        let rowHour = $(this).siblings(".hour").text();
        let task = $(this).siblings(".description").val();
    
        if (task === "") {
            localStorage.setItem(rowHour, "");
        }
        else {
            localStorage.setItem(rowHour, task);
        }
    }
    
    saveButton.on("click", tasks);
    
    });