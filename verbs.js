//
// © Hamd Waseem 2023 under the Apache License 2.0
// https://github.com/TheLatinNet/TheLatinNet
//

function isCapital(character) {
    return character === character.toUpperCase() && character !== character.toLowerCase();
}

function randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function conjugateVerb() {
    const ref = document.getElementById("verb");
    const verb = ref.value;

    let examples = [];
`

fetch("https://raw.githubusercontent.com/TheLatinNet/examples/main/nouns.json")
.then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Error: " + response.status);
    }
})
.then(data => {
    
    examples = data;

})
.catch(error => {
    console.error("Error:", error);
});

`
    fetch("https://raw.githubusercontent.com/TheLatinNet/verbs/main/words.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: " + response.status);
            }
        })
        .then(data => {

            const html = document.getElementById("verb-conjuagted");

            if (data[verb] == undefined) {


            } else {
                let conj = getConjugation(data[verb], verb);

                if (isCapital(verb.charAt(0))) {

                    html.innerHTML = `
                
                    <center><h1>${conj[0]}, ${conj[3]}, ${data[noun][2]}</h1></center>


                    <div class="left" style="width: 100%;">
                        <center><h2>Singular</h2></center>
                        <hr>

                        <div style="margin: 10px;padding:5px;">
                            <p><span class="key">Nominative</span> ${conj[0]} -  <span class="meaning">${data[noun][2]}</span></p>
                            <p><span class="key">Vocative</span> ${conj[1]} -  <span class="meaning">${data[noun][2]}</span></p>
                            <p><span class="key">Accusative</span> ${conj[2]} -  <span class="meaning">${data[noun][2]}</span></p>
                            <p><span class="key">Genitive</span> ${conj[3]} -  <span class="meaning">of ${data[noun][2]}</span></p>
                            <p><span class="key">Dative</span> ${conj[4]} -  <span class="meaning">to/for ${data[noun][2]}</span></p>
                            <p><span class="key">Ablative</span> ${conj[5]} -  <span class="meaning">with/by/from ${data[noun][2]}</span></p>
                            <p><span class="key">Locative</span> ${conj[12]} -  <span class="meaning">in ${data[noun][2]}</span></p>                          
                        </div>

                    </div>


                    `

                } else {

                    

                }
                html.innerHTML = `
                
                    <center><h1>${conj[6]}</h1></center>

                    <div>
                        <div class="se1">
                            <center><h2>Present</h2></center>
                            <hr>
                            <p><span class="key">ego</span> ${conj[0][0]} - <span class="meaning">I ${data[verb][3]}</span></p>
                            <p><span class="key">tū</span> ${conj[0][1]} - <span class="meaning">You ${data[verb][3]}</span></p>
                            <p><span class="key">is</span> ${conj[0][2]} - <span class="meaning">He/She/It ${data[verb][4]}</span></p>
                            <p><span class="key">nōs</span> ${conj[0][3]} - <span class="meaning">We ${data[verb][3]}</span></p>
                            <p><span class="key">vōs</span> ${conj[0][4]} - <span class="meaning">You all ${data[verb][3]}</span></p>
                            <p><span class="key">iī</span> ${conj[0][5]} - <span class="meaning">They ${data[verb][3]}</span></p>
                        </div>
                        <div class="se2">
                            <center><h2>Imperfect</h2></center>
                            <hr>
                            <p><span class="key">ego</span> ${conj[1][0]} - <span class="meaning">I was ${data[verb][5]}</span></p>
                            <p><span class="key">tū</span> ${conj[1][1]} - <span class="meaning">You were ${data[verb][5]}</span></p>
                            <p><span class="key">is</span> ${conj[1][2]} - <span class="meaning">He/She/It was ${data[verb][5]}</span></p>
                            <p><span class="key">nōs</span> ${conj[1][3]} - <span class="meaning">We were ${data[verb][5]}</span></p>
                            <p><span class="key">vōs</span> ${conj[1][4]} - <span class="meaning">You all were ${data[verb][5]}</span></p>
                            <p><span class="key">iī</span> ${conj[1][5]} - <span class="meaning">They were ${data[verb][5]}</span></p>
                        </div>
                        <div class="se3">
                            <center><h2>Perfect</h2></center>
                            <hr>
                            <p><span class="key">ego</span> ${conj[2][0]} - <span class="meaning">I ${data[verb][6]}</span></p>
                            <p><span class="key">tū</span> ${conj[2][1]} - <span class="meaning">You ${data[verb][6]}</span></p>
                            <p><span class="key">is</span> ${conj[2][2]} - <span class="meaning">He/She/It ${data[verb][6]}</span></p>
                            <p><span class="key">nōs</span> ${conj[2][3]} - <span class="meaning">We ${data[verb][6]}</span></p>
                            <p><span class="key">vōs</span> ${conj[2][4]} - <span class="meaning">You all ${data[verb][6]}</span></p>
                            <p><span class="key">iī</span> ${conj[2][5]} - <span class="meaning">They ${data[verb][6]}</span></p>
                        </div>
                        <div class="se4">
                            <center><h2>Pluperfect</h2></center>
                            <hr>
                            <p><span class="key">ego</span> ${conj[3][0]} - <span class="meaning">I had ${data[verb][6]}</span></p>
                            <p><span class="key">tū</span> ${conj[3][1]} - <span class="meaning">You had ${data[verb][6]}</span></p>
                            <p><span class="key">is</span> ${conj[3][2]} - <span class="meaning">He/She/It had ${data[verb][6]}</span></p>
                            <p><span class="key">nōs</span> ${conj[3][3]} - <span class="meaning">We had ${data[verb][6]}</span></p>
                            <p><span class="key">vōs</span> ${conj[3][4]} - <span class="meaning">You all had ${data[verb][6]}</span></p>
                            <p><span class="key">iī</span> ${conj[3][5]} - <span class="meaning">They had ${data[verb][6]}</span></p>
                        </div>
                        <div class="se5">
                            <center><h2>Future</h2></center>
                            <hr>
                            <p><span class="key">ego</span> ${conj[4][0]} - <span class="meaning">I will ${data[verb][3]}</span></p>
                            <p><span class="key">tū</span> ${conj[4][1]} - <span class="meaning">You will ${data[verb][3]}</span></p>
                            <p><span class="key">is</span> ${conj[4][2]} - <span class="meaning">He/She/It will ${data[verb][3]}</span></p>
                            <p><span class="key">nōs</span> ${conj[4][3]} - <span class="meaning">We will ${data[verb][3]}</span></p>
                            <p><span class="key">vōs</span> ${conj[4][4]} - <span class="meaning">You all will ${data[verb][3]}</span></p>
                            <p><span class="key">iī</span> ${conj[4][5]} - <span class="meaning">They will ${data[verb][3]}</span></p>
                        </div>
                    </div>

                    <br>
                    <br>
                    
                    <div class="se1" style="width: 100%;">
                        <h3>Imperative</h3>
                        <p><span class="key">tū</span> ${conj[5][0]}! - <span class="meaning">${data[verb][3]}!</span></p>
                        <p><span class="key">vōs</span> ${conj[5][1]}! - <span class="meaning">${data[verb][3]}! (pl.)</span></p>
                    </div>
                    


                    `

                
            }
            

        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function getConjugation(data, verb) {
    if (data[0] == "1") {
        let stem = data[1];
        let perfectStem = data[2].slice(0, -1)

        let result = [
            [
                stem + "o",
                stem + "as",
                stem + "at",
                stem + "amus",
                stem + "atis",
                stem + "ant"
            ],
            [
                stem + "abam",
                stem + "abas",
                stem + "abat",
                stem + "abamus",
                stem + "abatis",
                stem + "abant"
            ],
            [
                perfectStem + "i",
                perfectStem + "isti",
                perfectStem + "it",
                perfectStem + "imus",
                perfectStem + "istis",
                perfectStem + "erunt"
            ],
            [
                perfectStem + "eram",
                perfectStem + "eras",
                perfectStem + "erat",
                perfectStem + "eramus",
                perfectStem + "eratis",
                perfectStem + "erant"
            ],
            [
                stem + "abo",
                stem + "abis",
                stem + "abit",
                stem + "abimus",
                stem + "abitis",
                stem + "abunt"
            ],
            [
                stem + "a",
                stem + "ate"
            ],
            `${stem + "o"}, ${stem + "are"}, ${perfectStem + "i"}, to ${data[3]}`
        ]

        return result
    }
    if (data[0] == "2") {
        let stem = data[1];
        let perfectStem = data[2].slice(0, -1)

        let result = [
            [
                stem + "eo",
                stem + "es",
                stem + "et",
                stem + "emus",
                stem + "etis",
                stem + "ent"
            ],
            [
                stem + "ebam",
                stem + "ebas",
                stem + "ebat",
                stem + "ebamus",
                stem + "ebatis",
                stem + "ebant"
            ],
            [
                perfectStem + "i",
                perfectStem + "isti",
                perfectStem + "it",
                perfectStem + "imus",
                perfectStem + "istis",
                perfectStem + "erunt"
            ],
            [
                perfectStem + "eram",
                perfectStem + "eras",
                perfectStem + "erat",
                perfectStem + "eramus",
                perfectStem + "eratis",
                perfectStem + "erant"
            ],
            [
                stem + "ebo",
                stem + "ebis",
                stem + "ebit",
                stem + "ebimus",
                stem + "ebitis",
                stem + "ebunt"
            ],
            [
                stem + "e",
                stem + "ete"
            ],
            `${stem + "eo"}, ${stem + "ere"}, ${perfectStem + "i"}, to ${data[3]}`
        ]

        return result
    }
    if (data[0] == "3") {
        let stem = data[1];
        let perfectStem = data[2].slice(0, -1)

        let result = [
            [
                stem + "o",
                stem + "is",
                stem + "it",
                stem + "imus",
                stem + "itis",
                stem + "unt"
            ],
            [
                stem + "ebam",
                stem + "ebas",
                stem + "ebat",
                stem + "ebamus",
                stem + "ebatis",
                stem + "ebant"
            ],
            [
                perfectStem + "i",
                perfectStem + "isti",
                perfectStem + "it",
                perfectStem + "imus",
                perfectStem + "istis",
                perfectStem + "erunt"
            ],
            [
                perfectStem + "eram",
                perfectStem + "eras",
                perfectStem + "erat",
                perfectStem + "eramus",
                perfectStem + "eratis",
                perfectStem + "erant"
            ],
            [
                stem + "am",
                stem + "es",
                stem + "et",
                stem + "emus",
                stem + "etis",
                stem + "ent"
            ],
            [
                stem + "e",
                stem + "ite"
            ],
            `${stem + "o"}, ${stem + "ere"}, ${perfectStem + "i"}, to ${data[3]}`
        ]

        return result
    }
    if (data[0] == "3.5") {
        let stem = data[1];
        let perfectStem = data[2].slice(0, -1)

        let result = [
            [
                stem + "io",
                stem + "is",
                stem + "it",
                stem + "imus",
                stem + "itis",
                stem + "iunt"
            ],
            [
                stem + "iebam",
                stem + "iebas",
                stem + "iebat",
                stem + "iebamus",
                stem + "iebatis",
                stem + "iebant"
            ],
            [
                perfectStem + "i",
                perfectStem + "isti",
                perfectStem + "it",
                perfectStem + "imus",
                perfectStem + "istis",
                perfectStem + "erunt"
            ],
            [
                perfectStem + "eram",
                perfectStem + "eras",
                perfectStem + "erat",
                perfectStem + "eramus",
                perfectStem + "eratis",
                perfectStem + "erant"
            ],
            [
                stem + "iam",
                stem + "ies",
                stem + "iet",
                stem + "iemus",
                stem + "ietis",
                stem + "ient"
            ],
            [
                stem + "e",
                stem + "ite"
            ],
            `${stem + "io"}, ${stem + "ere"}, ${perfectStem + "i"}, to ${data[3]}`
        ]

        return result
    }

    if (data[0] == "4") {
        let stem = data[1];
        let perfectStem = data[2].slice(0, -1)

        let result = [
            [
                stem + "io",
                stem + "is",
                stem + "it",
                stem + "imus",
                stem + "itis",
                stem + "iunt"
            ],
            [
                stem + "iebam",
                stem + "iebas",
                stem + "iebat",
                stem + "iebamus",
                stem + "iebatis",
                stem + "iebant"
            ],
            [
                perfectStem + "i",
                perfectStem + "isti",
                perfectStem + "it",
                perfectStem + "imus",
                perfectStem + "istis",
                perfectStem + "erunt"
            ],
            [
                perfectStem + "eram",
                perfectStem + "eras",
                perfectStem + "erat",
                perfectStem + "eramus",
                perfectStem + "eratis",
                perfectStem + "erant"
            ],
            [
                stem + "iam",
                stem + "ies",
                stem + "iet",
                stem + "iemus",
                stem + "ietis",
                stem + "ient"
            ],
            [
                stem + "i",
                stem + "ite"
            ],
            `${stem + "io"}, ${stem + "ire"}, ${perfectStem + "i"}, to ${data[3]}`
        ]

        return result
    }
}