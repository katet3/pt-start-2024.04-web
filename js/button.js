var count = 0;

document.getElementById("myButton").onclick = function() {
    count++;
    
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        // Создаем новый элемент img
        var img = document.createElement("img");
        img.src = "image/red_team.jpg";
        // Добавляем изображение в параграф
        document.getElementById("demo").appendChild(img);
    }
}
