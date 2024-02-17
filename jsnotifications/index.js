
let btn = document.getElementById("btn");
let input = document.getElementById("text");


function not() {
    Notification.requestPermission()
        .then(perm => {
            if (perm === 'granted') {
                new Notification(input.value);
            }
        })
}

btn.addEventListener('click', not)

