const letters = {

    reminder: {

        title: "A Little Reminder",

        text: `
            <p>Dear Atu,</p>

            <p>
                Even though you're my junior, you've always felt more
                like a little sister to me. You're such an outgoing and
                fun person, and I really like the little sisterly bond we have.
            </p>

            <p>
                I still remember your pink hair days hehe. Now it's black,
                but honestly, both versions of you suit you. You've definitely
                had your hair eras.
            </p>

            <p>
                And I can't forget how you still tease Likkies so much lmao.
                You really never miss a chance to mess with her, and honestly,
                watching you two is always so funny.
            </p>

            <p>
                I also remember how you used to get sick so often back then,
                so I'm really happy to see that you're doing fine now.
                Please keep taking care of yourself, okay?
            </p>

            <p>
                And of course, I can't forget how you always get us food.
                You really do take care of us in your own little way,
                and I really appreciate that.
            </p>

            <p>
                I'm really happy to have you as my little sisterly junior.
                Keep being your outgoing and fun self, Atu.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>
        `

    },


    things: {

        title: "Little Things I Like",

        text: `
            <p>Dear Atu,</p>

            <p>
                You're honestly such a pretty girl, and I feel like you're
                both a cutie and a baddie at the same time. You have that
                kind of vibe where you can look all cute one moment and then
                look like a total baddie the next.
            </p>

            <p>
                I also really love how caring you are. And speaking of memories,
                I don't think I'll ever forget that one night when I cut your
                hair and me and Chamie coloured it black. And somehow I even
                managed to paint your ear black by mistake haha. We laughed
                so much that night, and it's definitely one of those random
                memories I'll always remember.
            </p>

            <p>
                You're also such an outgoing person and you're always full
                of energy. You bring so much life into the people around you,
                and I really love that about you.
            </p>

            <p>
                So yeah, you're pretty, caring, energetic, and definitely both
                a cutie and a baddie. Keep being your crazy little self, Atu hehe.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>
        `

    },


    faith: {

        title: "For Your Heart",

        text: `
            <p>Dear Atu,</p>

            <p>
                I hope you always remember that God has been with you through
                every season of your life. Even through the times when things
                weren't easy or when you weren't feeling your best, He was
                always there taking care of you.
            </p>

            <p>
                As you move forward in life, I hope you keep God close to your
                heart and always remember to talk to Him, not only when things
                are difficult, but also when things are going well. Don't forget
                to thank Him for the little things too.
            </p>

            <p>
                I pray that God keeps you healthy, protects you wherever you go,
                and gives you the strength and wisdom to handle whatever comes
                your way. I hope He fills your life with good people, good memories,
                and many reasons to smile.
            </p>

            <p>
                And whenever you're worried about the future, just remember that
                you don't have to have everything figured out. Trust God and let
                Him lead you one step at a time.
            </p>

            <p>
                Keep being the happy, energetic person you are, and never forget
                that you are deeply loved by God.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>
        `

    }

};



const mailbox =
    document.getElementById("mailbox");

const lettersArea =
    document.getElementById("lettersArea");

const instruction =
    document.getElementById("instruction");

const overlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");

const letterHeading =
    document.getElementById("letterHeading");

const letterBody =
    document.getElementById("letterBody");

const envelopes =
    document.querySelectorAll(".envelope");


let mailboxOpened = false;

let selectedLetter = false;



mailbox.addEventListener("click", () => {

    if (mailboxOpened) {
        return;
    }

    mailboxOpened = true;

    mailbox.classList.add("open");
    mailbox.classList.add("shake");

    setTimeout(() => {

        mailbox.classList.remove("shake");

    }, 700);


    instruction.innerHTML =
        "There are three letters inside.<br><strong>You can only choose one.</strong>";


    setTimeout(() => {

        lettersArea.classList.add("visible");


        envelopes.forEach((envelope, index) => {

            setTimeout(() => {

                envelope.classList.add("pop");

            }, index * 130);

        });

    }, 550);

});



envelopes.forEach(envelope => {

    envelope.addEventListener("click", () => {

        if (selectedLetter) {
            return;
        }

        selectedLetter = true;


        const key =
            envelope.dataset.letter;

        const letter =
            letters[key];


        if (!letter) {
            return;
        }


        letterHeading.textContent =
            letter.title;

        letterBody.innerHTML =
            letter.text;


        envelope.classList.add("selected");


        envelopes.forEach(other => {

            if (other !== envelope) {

                other.classList.add("locked");

            }

        });


        setTimeout(() => {

            overlay.classList.add("open");

        }, 200);

    });

});



closeLetter.addEventListener("click", () => {

    overlay.classList.remove("open");

});



overlay.addEventListener("click", event => {

    if (event.target === overlay) {

        overlay.classList.remove("open");

    }

});



document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        overlay.classList.remove("open");

    }

});



function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";


    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top =
        "-20px";


    const colors = [

        "#E8A77F",
        "#D98E6F",
        "#F2C2A5",
        "#F6D2BC",
        "#DFA080"

    ];


    petal.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];


    petal.style.animationDuration =
        (4 + Math.random() * 3) + "s";


    document.body.appendChild(petal);


    requestAnimationFrame(() => {

        petal.classList.add("active");

    });


    setTimeout(() => {

        petal.remove();

    }, 7500);

}



setInterval(() => {

    if (
        document.visibilityState === "visible"
    ) {

        createPetal();

    }

}, 2600);



setInterval(() => {

    if (
        !mailboxOpened &&
        document.visibilityState === "visible"
    ) {

        mailbox.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                },

                {

                    transform:
                        "translateY(-4px) rotate(-1deg)"

                },

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                }

            ],

            {

                duration: 900,

                easing: "ease-in-out"

            }

        );

    }

}, 6000);
