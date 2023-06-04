$(".item").click(function() {
    let itemId = $(this).text().toLowerCase();
    console.log(itemId)
    $(`.modal`).hide();
    $(`.modal-background`).show();
    $(`#${itemId}`).fadeToggle();
})

$('.modal-background').click(function() {
    $(".modal").hide();
    $(".modal-background").fadeToggle(100);
})

$('.close-button').click(function() {
    $(".modal").hide();
    $(".modal-background").fadeToggle(100);
})

function hideStuff() {
    $(".modal").hide();
    $(".modal-background").fadeToggle(100);
}