// Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
// Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
// нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

function chessBoard(size) {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = size;
    canvas.height = size;
    ctx.strokeRect(0, 0, size, size);
    let squareSide = size / 10;
    ctx.strokeRect(squareSide, squareSide, squareSide * 8, squareSide * 8)
    ctx.fillRect(squareSide, squareSide, squareSide * 8, squareSide * 8);
    for (let x = 1; x <= 8; x += 2) {
        for (let y = 1; y <= 8; y += 2) {
            ctx.fillStyle = 'white'
            ctx.fillRect(squareSide * x, squareSide * y, squareSide, squareSide);
            ctx.fillRect(squareSide * (x + 1), squareSide * (y + 1), squareSide, squareSide);

        }
    }
    ctx.font = `${squareSide / 2}px arial`;
    ctx.fillStyle = 'red';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let string = 'ABCDEFGH';
    for (let i = 1; i <= 8; i++) {
        ctx.fillText(`${9 - i}`, squareSide / 2, squareSide * i + squareSide / 2);
        ctx.fillText(string[i - 1], squareSide * i + squareSide / 2, size - squareSide / 2);
    }
    ctx.rotate(Math.PI);
    for (let i = 1; i <= 8; i++) {
        ctx.fillText(`${9 - i}`, -size + squareSide / 2, -squareSide * i - squareSide / 2);
        ctx.fillText(string[i - 1], -squareSide * i - squareSide / 2, -squareSide / 2);
    }
}
window.onload = chessBoard(600);
// chessBoard(512);
