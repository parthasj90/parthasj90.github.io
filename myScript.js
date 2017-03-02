$(function () {
    count = 0;
    wordsArray = ["Android Developer", "Web Developer", "Java Developer", "Quality Engineer"];
    setInterval(function () {
        count++;
        $("#roles").fadeOut(400, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
        });
    }, 2000);
});