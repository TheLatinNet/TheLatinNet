//
// © Hamd Waseem 2023 under the Apache License 2.0
// https://github.com/TheLatinNet/TheLatinNet
//

function loadNouns() {
    
}

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

function conjugateNoun() {
    const ref = document.getElementById("noun");
    const noun = ref.value;

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
    fetch("https://raw.githubusercontent.com/TheLatinNet/nouns/main/words.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: " + response.status);
            }
        })
        .then(data => {

            const html = document.getElementById("noun-conjuagted");

            if (data[noun] == undefined) {

                html.innerHTML = `
                
                <center>
                    <h1>${noun} isn't defined!</h1>
                    If you think you've found a noun that we haven't got in our servers yet, please <a href="https://github.com/TheLatinNet/nouns/issues/new">file an issue</a> so we can add it as fast as possible!
                </center>

                `

            } else {
                let conj = getConjugation(data[noun], noun);

                if (isCapital(noun.charAt(0))) {

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

                    html.innerHTML = `
                
                    <center><h1>${conj[0]}, ${conj[3]}, ${data[noun][2]}</h1></center>


                    <div class="left">
                        <center><h2>Singular</h2></center>
                        <hr>

                        <div style="margin: 10px;padding:5px;">
                            <p><span class="key">Nominative</span> ${conj[0]} -  <span class="meaning">the ${data[noun][2]}</span></p>
                            <p><span class="key">Vocative</span> ${conj[1]} -  <span class="meaning">the ${data[noun][2]}</span></p>
                            <p><span class="key">Accusative</span> ${conj[2]} -  <span class="meaning">the ${data[noun][2]}</span></p>
                            <p><span class="key">Genitive</span> ${conj[3]} -  <span class="meaning">of the ${data[noun][2]}</span></p>
                            <p><span class="key">Dative</span> ${conj[4]} -  <span class="meaning">to/for the ${data[noun][2]}</span></p>
                            <p><span class="key">Ablative</span> ${conj[5]} -  <span class="meaning">with/by/from the ${data[noun][2]}</span></p>                        
                        </div>

                    </div>

                    <div class="right">
                        <center><h2>Plural</h2></center>
                        <hr>
                        
                        <div style="margin: 10px;padding:5px;">
                        <p><span class="key">Nominative</span> ${conj[6]} -  <span class="meaning">the ${data[noun][3]}</span></p>
                        <p><span class="key">Vocative</span> ${conj[7]} -  <span class="meaning">the ${data[noun][3]}</span></p>
                        <p><span class="key">Accusative</span> ${conj[8]} -  <span class="meaning">the ${data[noun][3]}</span></p>
                        <p><span class="key">Genitive</span> ${conj[9]} -  <span class="meaning">of the ${data[noun][3]}</span></p>
                        <p><span class="key">Dative</span> ${conj[10]} -  <span class="meaning">to/for the ${data[noun][3]}</span></p>
                        <p><span class="key">Ablative</span> ${conj[11]} -  <span class="meaning">with/by/from the ${data[noun][3]}</span></p>                        
                        </div>

                    </div>

                    


                    `

                }

                html.innerHTML = html.innerHTML + `
                <div style="margin: 10px;">
                    <p>${data[noun][6] !== "-" ? `<span class="key">Derivative</span> ${data[noun][6]}` : ""}</p>
                    <p>Declension ${data[noun][0].slice(0, 1)} - ${data[noun][5] == "f" ? "feminine" : data[noun][5] == "m" ? "masculine" : "neuter"}</p>
                    
                </div>
                `

                
            }
            

        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function getConjugation(data, noun) {
    if (data[0] == "1") {
        let stem = data["1"].slice(0, -2);

        let result = [
            stem + "a",
            stem + "a",
            stem + "am",
            stem + "ae",
            stem + "ae",
            stem + "a",
            stem + "ae",
            stem + "ae",
            stem + "as",
            stem + "arum",
            stem + "is",
            stem + "is",
            stem + "ae"
        ]

        return result
    }
    if (data[0] == "2") {
        let stem = data["1"].slice(0, -1);

        let voc = noun.slice(-2) === "us" ? stem + "e" : noun;

        let result = [
            noun,
            voc,
            stem + "um",
            stem + "i",
            stem + "o",
            stem + "o",
            stem + "i",
            stem + "i",
            stem + "os",
            stem + "orum",
            stem + "is",
            stem + "is",
            stem + "i"
        ]

        return result
    }
    if (data[0] == "2n") {
        let stem = data["1"].slice(0, -1);

        let result = [
            stem + "um",
            stem + "um",
            stem + "um",
            stem + "i",
            stem + "o",
            stem + "o",
            stem + "a",
            stem + "a",
            stem + "a",
            stem + "orum",
            stem + "is",
            stem + "is"
        ]

        return result
    }
    if (data[0] == "3") {
        let stem = data["1"].slice(0, -2);

        let result = [
            noun,
            noun,
            stem + "em",
            stem + "is",
            stem + "i",
            stem + "e",
            stem + "es",
            stem + "es",
            stem + "es",
            stem + "um",
            stem + "ibus",
            stem + "ibus"
        ]

        return result
    }

    if (data[0] == "3n") {
        let stem = data["1"].slice(0, -2);

        let result = [
            noun,
            noun,
            noun,
            stem + "is",
            stem + "i",
            stem + "e",
            stem + "a",
            stem + "a",
            stem + "a",
            stem + "um",
            stem + "ibus",
            stem + "ibus",
            stem + "e"
        ]

        return result
    }

    if (data[0] == "4") {
        let stem = data["1"].slice(0, -2);

        let result = [
            noun,
            noun,
            stem + "um",
            stem + "us",
            stem + "ui",
            stem + "u",
            stem + "us",
            stem + "us",
            stem + "us",
            stem + "uum",
            stem + "ibus",
            stem + "ibus"
        ]

        return result
    }

    if (data[0] == "5") {
        let stem = data["1"].slice(0, -2);

        let result = [
            noun,
            noun,
            stem + "em",
            stem + "ei",
            stem + "ei",
            stem + "e",
            stem + "es",
            stem + "es",
            stem + "es",
            stem + "erum",
            stem + "ebus",
            stem + "ebus"
        ]

        return result
    }
}