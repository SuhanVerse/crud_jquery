var items = groceryItems;
var editId = null;

// Render App
function render() {
    var $app = $("#app");
    $app.empty();

    var $formElement = createForm();
    $app.append($formElement);

    var $itemsElement = createItems(items);
    $app.append($itemsElement);
}

$(document).ready(function () {
    render();
});

function addItem(itemName) {
    var newItem = {
        id: Date.now(),
        name: itemName,
        completed: false,
    };
    items.push(newItem);
    render();
    // Toast is now triggered from form.js, so you can remove it here if you want
}


// Toggle completed state
function editCompleted(itemId) {
    items = items.map(function (item) {
        if (item.id === itemId) {
            return { ...item, completed: !item.completed };
        }
        return item;
    });
    render();
}

// Show toast message
function showToast(message, type = "danger") {
    var $toast = $("#toast");
    if ($toast.length === 0) {
        $("body").append('<div id="toast"></div>');
        $toast = $("#toast");
    }
    $toast.text(message);

    if (type === "success") {
        $toast.css("background", "var(--color-success)");
    } else {
        $toast.css("background", "var(--color-danger)");
    }
    $toast.addClass("show");
    setTimeout(() => $toast.removeClass("show"), 2000);
}

// Remove item
function removeItem(itemId) {
    items = items.filter(function (item) {
        return item.id !== itemId;
    });
    render();
    showToast("Item deleted successfully!");
}

// Start editing
function startEdit(itemId) {
    var item = items.find((i) => i.id === itemId);
    if (item) {
        editId = itemId;
        $("#item-input").val(item.name);
        $(".form-submit").text("Update");
    }
}

// Apply edit
function applyEdit(newName) {
    items = items.map(function (item) {
        if (item.id === editId) {
            return { ...item, name: newName };
        }
        return item;
    });
    editId = null;
    render();
    showToast("Item updated successfully!", "success");
}
