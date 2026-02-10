//form.js

function createForm() {
    var $form = $(`
        <form class="grocery-form">
            <input type="text" class="form-input" id="item-input" placeholder="Add grocery item..." />
            <button type="submit" class="form-submit">Add</button>
        </form>
    `);

    $form.on("submit", function (e) {
        e.preventDefault();
        var itemName = $("#item-input").val().trim();
        if (itemName) {
            var newItem = {
                id: Date.now(),
                name: itemName,
                completed: false,
            };
            items.push(newItem);
            render();
            $("#item-input").val("");
        }
    });

    return $form;
}
