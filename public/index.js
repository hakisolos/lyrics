document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchBtn");
    const lyricsSection = document.getElementById("lyricsSection");
    const q = document.getElementById("searchInput")
    
    searchButton.addEventListener("click", async () => {
        try{
            const input = q.value.trim();
            const lic = await fetch(`/search?q=${input}`)
            const lyrics = await lic.json()

            // Insert lyrics into the section
            lyricsSection.innerHTML = `<h2>${input}</h2><p>${lyrics}</p>`;
            
            // Show the lyrics section
            lyricsSection.classList.add("show-lyrics");
            lyricsSection.style.display = "block";
        }catch(e){
            alert("song not found")
            console.log(error)
        }
    });
});