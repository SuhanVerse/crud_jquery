function createSingleItem(item) {
    var $div = $('<div class="single-item"></div>');
    if (item.completed) $div.addClass("completed");

    // Build structure
    var $checkbox = $(
        `<input type="checkbox" ${item.completed ? "checked" : ""} aria-label="Mark ${item.name} as completed" />`,
    );
    var $text =
        $(`<p style="text-decoration: ${item.completed ? "line-through" : "none"}">
      ${item.name}
    </p>`);
    var $editBtn =
        $(`<button class="btn edit-btn" title="Edit item" aria-label="Edit ${item.name}">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>`);
    var $removeBtn =
        $(`<button class="btn remove-btn" title="Remove item" aria-label="Remove ${item.name}">
                          <i class="fa-regular fa-trash-can"></i>
                        </button>`);

    // Append elements
    $div.append($checkbox, $text, $editBtn, $removeBtn);

    // Event bindings
    $checkbox.on("change", function () {
        $div.toggleClass("completed", $(this).is(":checked"));
        editCompleted(item.id);
    });

    $removeBtn.on("click", function () {
        $div.addClass("removing");
        setTimeout(() => removeItem(item.id), 400);
    });

    $editBtn.on("click", function () {
        startEdit(item.id);
    });

    return $div;
}
