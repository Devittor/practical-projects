function handleMouseMove(e) {
    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty('--cursorX', x + 'px');
    document.documentElement.style.setProperty('--cursorY', y + 'px');
};

document.addEventListener('mousemove', handleMouseMove);