const message = "❤️ كل سنة والقمر العسل البت بتاعتي بخير ❤️";

const typing = document.getElementById("typing");

const startBtn = document.getElementById("startBtn");

typing.textContent = "";

startBtn.style.display = "none";

let index = 0;

function typeWriter() {

    if (index < message.length) {

        typing.textContent += message.charAt(index);

        index++;

        setTimeout(typeWriter, 80);

    } else {

        document.querySelector(".heart").style.transform = "scale(1.3)";

        setTimeout(() => {

            document.querySelector(".heart").style.transform = "scale(1)";

            startBtn.style.display = "inline-block";

            startBtn.style.opacity = "0";

            startBtn.style.transform = "translateY(30px)";

            setTimeout(() => {

                startBtn.style.transition = "0.8s";

                startBtn.style.opacity = "1";

                startBtn.style.transform = "translateY(0)";

            }, 100);

        }, 500);

    }

}

window.onload = typeWriter;
startBtn.onclick = () => {

    document.getElementById("loader").style.display = "none";

    document.getElementById("website").style.display = "block";

    document.body.style.overflow = "auto";

};
const loveDate = new Date("2024-04-18T17:30:00");

function updateCounter(){

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter,1000);
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    document.querySelector(".counter").scrollIntoView({

        behavior: "smooth"

    });

});
const questions = [

    {
        question: "❤️ امتى اتعرفنا؟",
        answers: [
            "18/4/2024",
            "20/4/2024",
            "15/4/2024"
        ],
        correct: "18/4/2024"
    },

    {
        question: "😂 إيه أكتر كلمة بقولها لك؟",
        answers: [
            "والله انتي عسل يبت ❤️",
            "يبت يسوسو 😂",
            "آه 😅"
        ],
        correct: "والله انتي عسل يبت ❤️"
    },

    {
        question: "😂 سبتيني كام مرة؟",
        answers: [
            "مرة 😅",
            "أربع مرات 😂",
            "كتير فشخ 🤣"
        ],
        correct: "كتير فشخ 🤣"
    },

    {
        question: "🍎 لو معانا ٧ تفاحات، ادينا اتنين لعيل صغير، و٣ اترموا، وواحدة اتسرقت... معانا كام؟",
        answers: [
            "تفاحة 🍎",
            "تفاحة ونص 😂",
            "هتديني بوسة ❤️"
        ],
        correct: "هتديني بوسة ❤️"
    },

    {
        question: "❤️ بتحبيني؟",
        answers: [
            "أه ❤️",
            "لا 😒"
        ],
        correct: "أه ❤️",
        special: true
    }

];

let currentQuestion = 0;
let score = 0;

const quizBox = document.getElementById("quizBox");
const nextBtn = document.getElementById("nextQuestion");
nextBtn.disabled = true;

function loadQuestion() {

    document.getElementById("questionNumber").textContent =
        `السؤال ${currentQuestion + 1} من ${questions.length}`;

    const q = questions[currentQuestion];
    nextBtn.disabled = true;

    if (q.special) {

        quizBox.innerHTML = `
            <div class="question">${q.question}</div>

            <div class="answers">

                <button onclick="loveAnswer()">
                    أه ❤️
                </button>

                <button id="noBtn">
                    لا 😒
                </button>

            </div>
        `;

        const noBtn = document.getElementById("noBtn");

        noBtn.addEventListener("mouseenter", () => {

            noBtn.style.position = "absolute";
            noBtn.style.left = Math.random() * 70 + "%";
            noBtn.style.top = Math.random() * 70 + "%";

        });

        noBtn.addEventListener("click", (e) => {

            e.preventDefault();

            noBtn.style.position = "absolute";
            noBtn.style.left = Math.random() * 70 + "%";
            noBtn.style.top = Math.random() * 70 + "%";

        });

        return;
    }

    quizBox.innerHTML = `

        <div class="question">

            ${q.question}

        </div>

        <div class="answers">

            ${q.answers.map(answer =>

                `<button onclick="checkAnswer('${answer.replace(/'/g, "\\'")}')">
                    ${answer}
                </button>`

            ).join("")}

        </div>

    `;
}

function checkAnswer(answer){

    nextBtn.disabled = false;

    const buttons = document.querySelectorAll(".answers button");

    buttons.forEach(button=>{

        button.disabled = true;

        if(button.innerText.trim()===questions[currentQuestion].correct){

            button.classList.add("correct");

        }

        if(button.innerText.trim()===answer && answer!==questions[currentQuestion].correct){

            button.classList.add("wrong");

        }

    });

    if(answer===questions[currentQuestion].correct){

        score++;

    }

}

function loveAnswer(){

    score++;

    nextBtn.disabled = false;

    document.querySelectorAll(".answers button").forEach(button=>{

        button.disabled=true;

    });

}

nextBtn.onclick = () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        quizBox.innerHTML = `

            <h2>🎉 خلصنااا ❤️</h2>

            <h1>${score} / ${questions.length}</h1>

            <br>

            <p style="font-size:25px">

                ${
                    score === questions.length
                    ? "🥹 كنت عارف إنك هتجاوبي صح في كل حاجة ❤️"
                    : "😂 واضح إنك محتاجة تراجعي ذكرياتنا شوية."
                }

            </p>

        `;

        nextBtn.style.display = "none";

    }

};

loadQuestion();
