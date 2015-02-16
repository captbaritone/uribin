// The <textarea>
var t = document.getElementById('t');
// Resize the textarea to show all of it's content (+10)
t.style.height = t.scrollHeight + 10;
// Handy reference to the body's list of classes
var c = document.querySelector('body').classList;

// Opens a new tab a url of a prefix 'p' followed by an updated data URI
function l(p) {
    window.open(p+document.URL.replace(/(%3Ctextarea.*%3E)([^]*)(%3C%2Ftextarea%3E)/, function(z, a, b, c) {
        t.textContent = t.value; // Do this so we can access an escaped version of the content
        // Replace the old textarea content with what the user has supplied
        return a + encodeURIComponent(t.innerHTML) + c;
    // Open in a new tab
    }),'_blank');
}
