var toggler_animation = bodymovin.loadAnimation({
    container: document.getElementById('animacao_ordenacao'), // Required
    path: 'assets/animation/ordenacao_animation.json', // Required
    renderer: 'svg/canvas/html', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "toogler_ordenacao", // Name for future reference. Optional.
})