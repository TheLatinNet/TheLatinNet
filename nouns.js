//
// © Hamd Waseem 2023 under the Apache License 2.0
// https://github.com/TheLatinNet/TheLatinNet
//

function loadNouns() {
    
}

function conjugateNoun() {
    const ref = document.getElementById("noun");
    const noun = ref.value;

    fetch("https://raw.githubusercontent.com/TheLatinNet/nouns/main/words.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: " + response.status);
            }
        })
        .then(data => {
            if (data[noun] == undefined) {

            } else {
                let conj = getConjugation(data[noun], noun);

                const html = document.getElementById("noun-conjuagted");

                html.innerHTML = `
                
                <center><h1>${conj[0]}, ${conj[3]}, ${data[noun][2]}</h1></center>


                <div class="left" style="margin: 5px;width: 48%;">
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

                <div class="right" style="margin: 5px;width:48%;">
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
            stem + "is"
        ]

        return result
    }
    if (data[0] == "2") {
        let stem = data["1"].slice(0, -1);

        let result = [
            noun,
            stem + "e",
            stem + "um",
            stem + "i",
            stem + "o",
            stem + "o",
            stem + "i",
            stem + "i",
            stem + "os",
            stem + "orum",
            stem + "is",
            stem + "is"
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
            stem + "ibus"
        ]

        return result
    }
}