//WS URL
const WS_SERVER = 'http://localhost:4000';

//Connect to wsServer
const socket = io.connect(WS_SERVER)

// DOM elements
const notificationBox = document.getElementById('notificationBox');
const notificationCount = document.getElementById('notificationCount');

// Events
notificationBox.addEventListener('click', () => {
    socket.emit('seen', {
        user: 'UserA',
        action: 'notification seen'
    })

    notificationBox.classList.remove('show')
    notificationBox.classList.add('hide')
})

socket.on('newNotification', (data) => {
    notificationBox.classList.remove('hide')
    notificationBox.classList.add('show')
    notificationCount.innerHTML = data.count;
    console.log(data)
})