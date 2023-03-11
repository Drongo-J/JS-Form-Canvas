let myCanvas = document.getElementById("myCanvas");

let context = myCanvas.getContext('2d');


// let x = 100;
// let y = 100;

// function Drawer() {
//     context.fillStyle = '#00bfff';
//     context.fillRect(x, y, 250, 250);
//     context.clearRect(x + 125, y + 125, 125, 125);
//     x += 1;
//     y += 1;
// }


// function main() {
//     // context.fillStyle = '#00bfff';
//     // context.fillRect(50, 70, 150, 100);

//     // context.fillStyle = 'rgba(255,0,0,0.4)';
//     // context.fillRect(80, 80, 150, 100);

//     // context.strokeStyle = '#00ff7f';
//     // context.strokeRect(50, 50, 300, 300);


//     setInterval(() => {
//         Drawer();
//     }, 1);
// }

// main();


function main(){

    const centerX = myCanvas.width / 2;
    const centerY = myCanvas.height / 2;
    const radius = centerY;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();


    context.moveTo(centerX, centerY);
    context.lineTo(x, y);
    context.lineWidth = 10;
    context.strokeStyle = 'black';
    context.stroke;
}


main();