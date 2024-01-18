const allPairs = [
    'src/img1.webp', 'src/img1.webp',
    'src/img2.webp', 'src/img2.webp',
    'src/img3.webp', 'src/img3.webp',
    'src/img4.webp', 'src/img4.webp',
    'src/img5.webp', 'src/img5.webp',
    'src/img6.webp', 'src/img6.webp',
    'src/img7.webp', 'src/img7.webp',
    'src/img8.webp', 'src/img8.webp'
];

const grid = document.querySelector('.pexeso');
let flippedCards = [];
let completedPairs = 0;

const createCards = () => {
    const selectedPairs = selectRandomPairs(allPairs, 8);
    let shuffledPairs = selectedPairs.sort(() => 0.5 - Math.random());

    shuffledPairs.forEach((image, index) => {
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        
        cardImage.src = image;
        
        card.classList.add('card');
        card.dataset.image = image;
        card.addEventListener('click', flipCard);
        card.appendChild(cardImage);
        
        grid.appendChild(card);
    });
}

const selectRandomPairs = (pairs, numberOfPairs) => {
    const halfPairs = pairs.filter((value, index) => index % 2 === 0);
    const shuffledHalfPairs = halfPairs.sort(() => 0.5 - Math.random());
    const selectedHalfPairs = shuffledHalfPairs.slice(0, numberOfPairs);

    let selectedPairs = [];
    for (const pair of selectedHalfPairs) {
        const pairIndex = pairs.indexOf(pair);
        selectedPairs.push(pairs[pairIndex], pairs[pairIndex + 1]);
    }

    return selectedPairs;
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

const checkMatch = () => {
    if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
        completedPairs++;
        if (completedPairs === 8) {
            alert('Gratulujeme! Vyhráli jste!');
        }
    } else {
        flippedCards[0].classList.remove('flipped');
        flippedCards[1].classList.remove('flipped');
    }
    flippedCards = [];
}

createCards();