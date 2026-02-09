function createSingleItem(item) {
    var $div = $('<div class="single-item"></div>');
    if (item.completed) $div.addClass("completed");

    $div.html(`
        <input type="checkbox" ${item.completed ? "checked" : ""} />
        <p>${item.name}</p>
        <button class="btn edit-btn" title="Edit item">
            <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button class="btn remove-btn" title="Remove item">
            <i class="fa-regular fa-trash-can"></i>
        </button>
    `);

    $div.find('input[type="checkbox"]').on("change", function () {
        $div.toggleClass("completed", $(this).is(":checked"));
        editCompleted(item.id);
    });

    $div.find(".remove-btn").on("click", function () {
        $div.addClass("removing");
        setTimeout(() => removeItem(item.id), 400);
    });

    return $div;
}
