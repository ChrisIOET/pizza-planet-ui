
function fetchItem(_id) {
    fetch(`http://127.0.0.1:5000/item/id/${_id}`)
        .then(response => response.json())
        .then(ingredient => {
            $("#_id").val(item._id);
            $("#name").val(item.name);
            $("#price").val(item.price);

        });
}

function loadInformation() {
    let urlParams = new URLSearchParams(window.location.search);
    let _id = urlParams.get('_id');
    fetchItem(_id)
}

function putItem(item) {

    fetch('http://127.0.0.1:5000/item/', {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    })
        .then(res => res.json())
        .then(res => showNotification());


}

/**
 * Get the form and submit it with fetch API
 */
let itemForm = $("#item-form");
itemForm.submit(event => {

    let item = getItemData();
    putItem(item);

    event.preventDefault();
    event.currentTarget.reset();
    window.location.href = '/app/ingredient/ingredients.html';
});

/**
 * Gets the item data with JQuery
 */
function getItemData() {
    return {
        _id: $("input[id='_id']").val(),
        name: $("input[id='name']").val(),
        price: $("input[id='price']").val(),
        // type: $("input[id='type']").val()
    };
}

/**
 * Shows a notification when the item is accepted
 */
function showNotification() {
    let itemAlert = $("#item-alert");
    itemAlert.toggle();
    setTimeout(() => itemAlert.toggle(), 5000);
}


window.onload = loadInformation;