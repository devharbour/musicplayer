$(document).ready(function () {
    // Sample data for music files (name, category, album image, mp3 path)
    const musicData = [
        {
            title: "Blues Jazz",
            category: "jazz",
            albumImage: "assets/images/bluejazz.jpg",
            mp3File: "assets/music/blues.mp3"
        },
         {
            title: "Blues The Sky is Crying",
            category: "jazz",
            albumImage: "assets/images/bluejazz.jpg",
            mp3File: "assets/music/jazz2.mp3"
        },
           {
            title: "Blues Dan Patlansky - Big Things Going Down",
            category: "jazz",
            albumImage: "assets/images/bluejazz.jpg",
            mp3File: "assets/music/Dan Patlansky - Big Things Going Down.mp3"
        },
           {
            title: "Blues Eb Davis - What You Gonna Do",
            category: "jazz",
            albumImage: "assets/images/bluejazz.jpg",
            mp3File: "assets/music/Eb Davis - What You Gonna Do.mp3"
        },
            {
            title: "Blues Delight - If I Had Money",
            category: "jazz",
            albumImage: "assets/images/bluejazz.jpg",
            mp3File: "assets/music/Blues Delight - If I Had Money.mp3"
        },
             {
            title: "Chris Bell - Elevator To Heaven",
            category: "jazz",
            albumImage: "assets/images/bluejazz.jpg",
            mp3File: "assets/music/Chris Bell - Elevator To Heaven.mp3"
        },
        {
            title: "Potpuri Shkodrane Eduart Jubani",
            category: "shkodrane",
            albumImage: "assets/images/potpurishkodrane.jpg",
            mp3File: "assets/music/eduartjubani.mp3"
        },
           {
            title: "Ervin Bushati",
            category: "shkodrane",
            albumImage: "assets/images/eb.png",
            mp3File: "assets/music/ervinbushati.mp3"
        },
        {
            title: "Rosela Gjylbegu",
            category: "shkodrane",
            albumImage: "assets/images/ro.jpg",
            mp3File: "assets/music/roselagjylbegu.mp3"
        },

        {
            title: "Sidrit Bejleri Shend e Vere",
            category: "shkodrane",
            albumImage: "assets/images/shendevere.jpg",
            mp3File: "assets/music/Sidrit Bejleri Shend e vere.mp3"
        },
          {
            title: "Sidrit Bejleri Ne prag te deres",
            category: "shkodrane",
            albumImage: "assets/images/nepragtederes.jpg",
            mp3File: "assets/music/Sidrit Bejleri - Në prag të derës (Official Video) .mp3"
        },
{
            title: "Sidrit Bejleri Pat kene nje kohe",
            category: "shkodrane",
            albumImage: "assets/images/patkenenjekoh.jpg",
            mp3File: "assets/music/Sidrit Bejleri - Pat kene nji kohe.mp3"
        },
        {
            title: "Sidrit Bejleri Galina",
            category: "shkodrane",
            albumImage: "assets/images/galina.jpg",
            mp3File: "assets/music/Sidrit Bejleri Galina.mp3"
        },

        {
            title: "Sidrit Bejleri A e ke ndi",
            category: "shkodrane",
            albumImage: "assets/images/aekendi.jpg",
            mp3File: "assets/music/Sidrit Bejleri - A e ke ndi.mp3"
        },
        {
            title: "Si ke ndje Irian Taraboshi",
            category: "shkodrane",
            albumImage: "assets/images/sikendje.jpg",
            mp3File: "assets/music/SI KE NDJE_.mp3"
        },
        {
            title: "Shkoj e vi nga dera jote",
            category: "shkodrane",
            albumImage: "assets/images/shkojevi.jpg",
            mp3File: "assets/music/Shkoj e vi nga dera jote- Niki Mjeda.mp3"
        },
         {
            title: "Frederik Ndoci - Ah ky mall",
            category: "shkodrane",
            albumImage: "assets/images/Fndoci.jpg",
            mp3File: "assets/music/Frederik Ndoci - Ah ky mall (2010).mp3"
        },
        // Add more songs as needed
         {
            title: "Rame Lahaj Per mu paska ken kismet",
            category: "shkodrane",
            albumImage: "assets/images/ramelahaj.jpg",
            mp3File: "assets/music/Rame Lahaj - Per mu paska kenkismet - August 2021 (1).mp3"
        },
        {
            title: "Rame Lahaj - Bishtalecat Pale Pale",
            category: "shkodrane",
            albumImage: "assets/images/ramelahaj.jpg",
            mp3File: "assets/music/Rame Lahaj - Bishtalecat Pale Pale - January 2023.mp3"
        },
        {
            title: "Peaky Blinders PJ Harvey - Red Right Hand",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Peaky1.mp3"
        },
        {
            title: "Peaky Blinders Arctic Monkeys - Do I Wanna Know?",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Peaky2.mp3"
        },
        {
            title: "Peaky Blinders Laura Marling - What He Wrote",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Peaky3.mp3"
        },
        {
            title: "Peaky Blinders Black Rebel Motorcycle Club - River Styx",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Black Rebel Motorcycle Club - River Styx  Peaky Blinders.mp3"
        },
        {
            title: "Peaky Blinders Black Sabbath - The Wizard",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Black Sabbath - The Wizard  Peaky Blinders.mp3"
        },
        {
            title: "Peaky Blinders Laura Marling - A Hard Rain's A Gonna Fall",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Laura Marling - A Hard Rain's A Gonna Fall  Peaky Blinders.mp3"
        },
        {
            title: "Peaky Blinders Nick Cave And The Bad Seeds - Breathless",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Nick Cave And The Bad Seeds - Breathless  Peaky Blinders.mp3"
        },
        {
            title: "Peaky Blinders Royal Blood - Come On Over",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Royal Blood - Come On Over  Peaky Blinders.mp3"
        },
        {
            title: "Peaky Blinders Savages - Adore",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: "assets/music/Savages - Adore  Peaky Blinders.mp3"
        },
    ];

    // Function to render the music list based on category
    function renderMusicList(category) {
        $("#music-list").empty(); // Clear previous list

        const filteredMusic = category === "all" ? musicData : musicData.filter(music => music.category === category);

        filteredMusic.forEach(music => {
            const musicItem = $(`
                <div class="music-item" data-mp3="${music.mp3File}" data-title="${music.title}" data-image="${music.albumImage}">
                    <img src="${music.albumImage}" alt="${music.title}" />
                    <p>${music.title}</p>
                </div>
            `);
            $("#music-list").append(musicItem);
        });
    }

    // Event listener for category filter change
    $("#category").change(function () {
        const selectedCategory = $(this).val();
        renderMusicList(selectedCategory);
    });

    // Initial render of music list
    renderMusicList("all");

    // Event listener for music item click
    $(document).on("click", ".music-item", function () {
        const mp3File = $(this).data("mp3");
        const title = $(this).data("title");
        const albumImage = $(this).data("image");

        $("#audio-source").attr("src", mp3File);
        $("#album-art").attr("src", albumImage);
        $("#music-title").text(title);
        $("#audio-player")[0].load(); // Reload the audio player
        $("#audio-player")[0].play(); // Play the selected song
    });
});
