

document.querySelector(".upload-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const urlInput = document.getElementById("urlInput");
    const targetUrl = urlInput.value;

    this.action = targetUrl;

    this.submit();
});