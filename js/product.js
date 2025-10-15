const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
        result.innerHTML = `
        <div class="word">
                <h3>Title</h3>
                <button onclick="downloadFile()">
                    <i class="fas fa-download"></i>
                </button>
            </div>
            <div class="details">
                <p>Paragrapg</p>
                <p>/Paragra/</p>
            </div>
            <p class="word-meaning">
                Paragra
            </p>
            <p class="word-example">
                Paragra
            </p>`;
});

function downloadFile() {
    console.log("Thue buttton works");
}
