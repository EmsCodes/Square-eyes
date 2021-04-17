function message(error, message = "Error") {
    return `<div class="error" id="error"${error}">${message}</div>`;
}
