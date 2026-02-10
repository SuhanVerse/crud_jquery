//app.js

var items = groceryItems;

// Render App
function render() {
    var $app = $("#app");
    $app.empty();

    var $formElement = createForm();
    $app.append($formElement);

    var $itemsElement = createItems(items);
    $app.append($itemsElement);
}

// Initialize App
$(document).ready(function () {
    render();
});

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

    // Change color based on type
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
