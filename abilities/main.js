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

// // click on item from list

// $('.item').click(function(){
//     console.log($(this).text())
//     console.log(clickedItem)

//     console.log(itemInfo.find(clickedItem))
// })

// let itemInfo = [
//     {
//         name: "cat",
//         description: "it's a cat"
//     },
//     {
//         name: "dog",
//         description: "it's a dog"
//     },
//     {
//         name: "fish",
//         description: "it's a fish"
//     },
//     {
//         name: "horse",
//         description: "it's a horse"
//     },
// ]
// // text in modal popout changes to the text related to that item
// // the popout appears