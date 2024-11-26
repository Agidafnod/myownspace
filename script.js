document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
        
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
        
            if (username === 'DON' && password === 'Fuckoff') {
                window.location.href = 'https://www.google.co.uk/';
            } else {
                alert('Incorrect username or password');
            }
        });