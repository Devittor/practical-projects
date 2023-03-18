const starsImgs = document.querySelectorAll('.stars');
const planetsImgs = document.querySelectorAll('.planets');
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

function handleMouseMove(e) {
    const positionX = (centerX - e.clientX) / 76;
    const positionY = (centerY - e.clientY) / 76;

    starsImgs.forEach((element, ind) => {
        const newStarsLeftPosition = positionX * (ind + 1) / 2 - 30 + 'px';
        const newStarsTopPosition = positionY * (ind + 1) / 2 - 30 + 'px';

        const newPlanetsLeftPosition = positionX * (ind + 1) - 30 + 'px';
        const newPlanetsTopPosition = positionY * (ind + 1) - 30 + 'px';

        element.style.left = newStarsLeftPosition;
        element.style.top = newStarsTopPosition;

        planetsImgs[ind].style.left = newPlanetsLeftPosition;
        planetsImgs[ind].style.top = newPlanetsTopPosition; 
    });
};

document.addEventListener('mousemove', handleMouseMove);