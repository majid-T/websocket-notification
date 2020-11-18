//WS URL
const WS_SERVER = 'http://localhost:4000';

//Connect to wsServer
const socket = io.connect(WS_SERVER)

// DOM elements
const notificationBox = document.getElementById('notificationBox');

// Event listeners
notificationBox.addEventListener('click', () => {
    socket.emit('seen', {
        user: 'UserA',
        action: 'notification seen'
    })

    notificationBox.classList.remove('show')
    notificationBox.classList.add('hide')
})