let currentScreen = 1;

document.addEventListener('swiped-left', function(e) {
    if (currentScreen < 7) {
        currentScreen++;
        document.querySelector('.container').scrollTo({
            left: window.innerWidth * (currentScreen - 1),
            behavior: 'smooth'
        });
    }
});

document.addEventListener('swiped-right', function(e) {
    if (currentScreen > 1) {
        currentScreen--;
        document.querySelector('.container').scrollTo({
            left: window.innerWidth * (currentScreen - 1),
            behavior: 'smooth'
        });
    }
});

function validate() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === 'Zebragames123' && password === 'hunter@123') {
        currentScreen++;
        document.querySelector('.container').scrollTo({
            left: window.innerWidth * (currentScreen - 1),
            behavior: 'smooth'
        });
    } else {
        alert('Invalid ID or Password');
    }
}

// Swipe detection
(function() {
    let touchstartX = 0;
    let touchendX = 0;

    function checkDirection() {
        if (touchendX < touchstartX) document.dispatchEvent(new Event('swiped-left'));
        if (touchendX > touchstartX) document.dispatchEvent(new Event('swiped-right'));
    }

    document.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    });
})();