const photoFrame = document.querySelector('.photo-frame');

const updateGlow = (event) => {
    if (!photoFrame) return;
    const rect = photoFrame.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    photoFrame.style.setProperty('--glow-x', `${x}%`);
    photoFrame.style.setProperty('--glow-y', `${y}%`);
};

photoFrame?.addEventListener('pointermove', updateGlow);
photoFrame?.addEventListener('pointerleave', () => {
    photoFrame.style.removeProperty('--glow-x');
    photoFrame.style.removeProperty('--glow-y');
});
