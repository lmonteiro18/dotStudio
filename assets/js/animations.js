var toggler_animation = lottie.loadAnimation({
    container: document.getElementById('animacaoOrdenacao'), // Required
    path: 'assets/animation/ordenacao_animation.json', // Required
    renderer: 'svg/canvas/html', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "toogler_ordenacao", // Name for future reference. Optional.
})

toggler_animation.play();