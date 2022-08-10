function postItem(item) {

    fetch('http://127.0.0.1:5000/item/', {
        method: 'POST',
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
    postItem(item);

    event.preventDefault();
    event.currentTarget.reset();
});

/**
 * Gets the order data with JQuery
 */
function getItemData() {

    return {
        name: $("input[name='name']").val(),
        price: $("input[name='price']").val(),
        type: "ingredient"
    };
}

/**
 * Shows a notification when the order is accepted
 */
function showNotification() {
    let itemAlert = $("#item-alert");
    itemAlert.toggle();
    setTimeout(() => itemAlert.toggle(), 5000);
}
