

fetch('http://127.0.0.1:5000/item')
    .then(response => response.json())
    .then(items => {
        let rows = items.map(element => createItemTemplate(element));
        let table = $("#items tbody");
        table.append(rows);
    });


function createItemTemplate(item) {
    let template = $("#item-item-template")[0].innerHTML;
    return Mustache.render(template, item);
}
