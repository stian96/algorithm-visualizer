// When page has loaded.
window.onload = function() {
    var button = document.getElementById("insert-btn");

    // Add event listner for click
    button.addEventListener('click', function() {
        
        var value = document.getElementById('value-input').value;
        console.log("value: " + value)
    });
};