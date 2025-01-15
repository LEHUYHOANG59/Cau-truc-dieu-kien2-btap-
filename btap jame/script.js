const puzzleContainer = document.getElementById('puzzle');
const puzzlePieces = [];
const correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Ví dụ với một puzzle 3x3

// Hàm tạo các ô puzzle
function createPuzzlePieces(images) {
    images.forEach((image, index) => {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundImage = `url(${image})`;
        piece.dataset.index = index;
        puzzleContainer.appendChild(piece);
        puzzlePieces.push(piece);
    });
}

// Hàm trộn ngẫu nhiên các ô puzzle
function shufflePuzzle() {
    puzzlePieces.forEach(piece => {
        const randomIndex = Math.floor(Math.random() * puzzlePieces.length);
        [puzzlePieces[index], puzzlePieces[randomIndex]] = [puzzlePieces[randomIndex], puzzlePieces[index]];
        piece.style.order = randomIndex;
    });
}

// Hàm kiểm tra xem puzzle đã hoàn thành chưa
function checkPuzzle() {
    for (let i = 0; i < puzzlePieces.length; i++) {
        if (puzzlePieces[i].dataset.index !== correctOrder[i]) {
            return false;
        }
    }
    return true;
}

// Sự kiện click vào ô puzzle
puzzleContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('puzzle-piece')) {
        // Logic hoán đổi vị trí ô puzzle với ô trống (nếu có)
        // ...
        if (checkPuzzle()) {
            alert('Chúc mừng bạn đã hoàn thành!');
        }
    }
});

// Ví dụ về mảng chứa đường dẫn đến các hình ảnh
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

// Khởi tạo puzzle
createPuzzlePieces(images);
shufflePuzzle();