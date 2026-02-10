//app.js

var items = groceryItems;

// Render App
function render() {
    var $app = $("#app");
    $app.empty();

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

// Remove item
function removeItem(itemId) {
    items = items.filter(function (item) {
        return item.id !== itemId;
    });
    render();
    setTimeout(() => alert("Item deleted successfully!"), 0);
}
