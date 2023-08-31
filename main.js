var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;
imageWidth = 30;
imageHeight = 30;

var player_object = "";
var image_object = "";

function player() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
}

function new_image(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        image_object = Img;
        image_object.scaleToWidth(imageWidth);
        image_object.scaleToHeight(imageHeight);
        image_object.set({ top: player_y, left: player_x });
        canvas.add(image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '67') {
        console.log("shift e C foram pressionadas");
        imageWidth = imageWidth + 10;
        imageHeight = imageHeight + 10;
        document.getElementById("currentWidth").innerHTML = imageWidth;
        document.getElementById("currentHeight").innerHTML = imageHeight;
    }
    if (e.shiftKey == true && keyPressed == '68') {
        if (imageWidth && imageHeight > 10) {
            console.log("shift e D foram pressionadas");
            imageWidth = imageWidth - 10;
            imageHeight = imageHeight - 10;
            document.getElementById("currentWidth").innerHTML = imageWidth;
            document.getElementById("currentHeight").innerHTML = imageHeight;
        }
        else {
            window.alert("ALERTA!!! LIMITE ATINGIDO !!!ALERTA")
        }
    }
    if (keyPressed == '38') {
        up();
        console.log("cima");
    }
    if (keyPressed == '40') {
        down();
        console.log("baixo");
    }
    if (keyPressed == '37') {
        left();
        console.log("esquerda");
    }
    if (keyPressed == '39') {
        right();
        console.log("direita");
    }
    if (keyPressed == '80') {
        new_image('wall.jpg');
        console.log("p");
    }
    if (keyPressed == '86') {
        new_image('light_green.png');
        console.log("v");
    }
    if (keyPressed == '71') {
        new_image('ground.png');
        console.log("g");
    }
    if (keyPressed == '77') {
        new_image('trunk.jpg');
        console.log("m");
    }
    if (keyPressed == '84') {
        new_image('roof.jpg');
        console.log("t");
    }
    if (keyPressed == '75') {
        new_image('yellow_wall.png');
        console.log("a");
    }
    if (keyPressed == '69') {
        new_image('dark_green.png');
        console.log("e");
    }
    if (keyPressed == '85') {
        new_image('unique.png');
        console.log("u");
    }
    if (keyPressed == '78') {
        new_image('cloud.jpg');
        console.log("n");
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - imageHeight;
        console.log("A altura do bloco é" + imageHeight);
        console.log("Quando a seta pra cima é pressionada,x" + player_x + "y" + player_y);
        canvas.remove(player_object);
        player();
    }
}
function down() {
    if (player_y <= 500) {
        player_y = player_y + imageHeight;
        console.log("A altura do bloco é" + imageHeight);
        console.log("Quando a seta pra baixo é pressionada,x" + player_x + "y" + player_y);
        canvas.remove(player_object);
        player();
    }
}
function left() {
    if (player_x > 0) {
        player_x = player_x - imageWidth;
        console.log("A altura do bloco é" + imageWidth);
        console.log("Quando a seta pra esquerda é pressionada,x" + player_x + "y" + player_y);
        canvas.remove(player_object);
        player();
    }
}
function right() {
    if (player_x <= 850) {
        player_x = player_x + imageWidth;
        console.log("A altura do bloco é" + imageWidth);
        console.log("Quando a seta pra direita é pressionada,x" + player_x + "y" + player_y);
        canvas.remove(player_object);
        player();
    }
}