function rando(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1; // returns a 'random' number btwn 1 and max inclusive
}

function phrasePick() {
    const phrases = [
        'Hey everybody, Matt Colville here.',
        'You are the DM your group needs.',
        'D&D is the most fun you can have with your brain.'
        /* 'D&D is the most fun you<br>can have with your brain.' */
    ];

    return phrases[rando(3) - 1];
}

document.getElementById('phrase').innerHTML = phrasePick();
