document.getElementById('signInButton').addEventListener('click', function() {
    document.getElementById('emailForm').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('emailForm').style.display = 'none';
    document.getElementById('signInButton').style.display = 'block';

    const formData = new FormData(this);
    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else {
            alert('Error: ' + data.error);
        }
        this.reset();
    })
    .catch(error => console.error('Error:', error));
});