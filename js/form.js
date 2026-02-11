//form.js

function createForm() {
    var $form = $(`
        <form class="grocery-form">
            <label for="item-input" class="sr-only">Add grocery item</label>
            <input type="text" class="form-input" id="item-input" placeholder="Add grocery item..." aria-label="Grocery item name" />
            <button type="submit" class="form-submit" aria-label="Add item">Add</button>
        </form>
    `);

    $form.on("submit", function (e) {
        e.preventDefault();
        var itemName = $("#item-input").val().trim();
        if (itemName) {
            if (editId) {
                applyEdit(itemName);
            } else {
                var newItem = {
                    id: Date.now(),
                    name: itemName,
                    completed: false,
                };
                items.push(newItem);
                render();
                showToast("Item added successfully!", "success");
            }
            $("#item-input").val("");
            $(".form-submit").text("Add");
        }
    });

    return $form;
}
