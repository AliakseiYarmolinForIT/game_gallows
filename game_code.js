<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Виселица!</title>
</head>

<body>
    <h1>Виселица!</h1>

    <script>
        var name = prompt("Как Вас зовут?");
        alert("Привет, " + name);
        var words = [
            "программа",
            "макака",
            "прекрасный",
            "оладушек"
        ];

        var word = words[Math.floor(Math.random() * words.length)];

        var answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }

        var remainingLetters = word.length;

        while (remainingLetters > 0) {
            alert(answerArray.join(" "));
            var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
            if (guess === null) {
                break;
            } else if (guess.length !== 1) {
                alert ("Пожалуйста, введите только одну букву.");
            } else {
                for (var J = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
            }
        }
    alert(answerarray.join(" "));
    alert("Отлично! Было загадано слово " + word);
    </script>
</body>
</html>