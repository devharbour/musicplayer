$(document).ready(function () {
    // Sample data for music files (name, category, album image, mp3 path)
    const musicData = [
       
        {
            title: "Ervin Bushati",
            category: "shkodrane",
            albumImage: "assets/images/eb.png",
            mp3File: "assets/music/ervinbushati.mp3"
        },

        {
            title: "Sidrit Bejleri Shend e Vere",
            category: "shkodrane",
            albumImage: "assets/images/shendevere.jpg",
            mp3File: "assets/music/Sidrit Bejleri Shend e vere.mp3"
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
            title: "Peaky Blinders Laura Marling - A Hard Rain's A Gonna Fall  Peaky Blinders?",
            category: "pop",
            albumImage: "assets/images/peaky.jpg",
            mp3File: ""https://drive.google.com/file/d/189N3QxwMIfkZ0yoQ1ct4KP6f6SZbMMEA/view?usp=drive_link""
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

