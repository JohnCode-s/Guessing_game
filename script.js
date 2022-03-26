document.addEventListener('DOMContentLoaded', function () {
    const msg1 = document.getElementById("message1");
    const msg2 = document.getElementById("message2");
    const msg3 = document.getElementById("message3");
    const guessBtn = document.getElementById("my_btn");
    const playBtn = document.querySelector(".play");
    const welcome = document.querySelector(".welcome");
    const inputV = document.getElementById("guess");
    const prize = document.querySelector(".prize");

    playBtn.addEventListener('click', () => {
        welcome.style.display = 'none';
        prize.innerHTML = `₦${balance}`;
        inputV.focus();
    });

    guessBtn.addEventListener('click', () => {
        play();
        inputV.value = '';
    });

    guessBtn.classList.add('btnH');

    let answer = Math.floor(Math.random() * 100) + 1;
    let no_of_guesses = 0;
    let guess_limit = 8;
    let guessed_nums = [];
    let balance = 150

    function play() {
        let user_guess = inputV.value;
        if (user_guess < 1 || user_guess > 100) {
            alert("Please enter a number between 1 and 100.");
        }
        else {
            guessed_nums.push(user_guess);
            no_of_guesses += 1;

            if (user_guess < answer) {
                msg1.textContent = "Your guess is too low.";
                msg2.textContent = "No. of guesses: " + no_of_guesses;
                msg3.textContent = "Guessed numbers are: " +
                    guessed_nums;
            }
            else if (user_guess > answer) {
                msg1.textContent = "Your guess is too high.";
                msg2.textContent = "No. of guesses: " + no_of_guesses;
                msg3.textContent = "Guessed numbers are: " +
                    guessed_nums;
            }
            else if (user_guess == answer) {
                msg1.textContent = "Kudos 🙌 You Win!!";
                msg2.textContent = "The number was: " + answer;
                msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
                guessBtn.disabled = true;
                balance = balance + 50;
                prize.innerHTML = `₦${balance}`
            }

            if (no_of_guesses > guess_limit) {
                alert('You have finished Your gues limit');
                guessBtn.disabled = true;
                guessBtn.classList.remove('btnH');
                balance = balance - 50;
                prize.innerHTML = `₦${balance}`
            }
        }
    }
});