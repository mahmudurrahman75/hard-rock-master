// let srcButton = document.getElementById("button");
// let inputValue = document.getElementById("song-name");

// srcButton.addEventListener("click", function(){
//     fetch("https://api.lyrics.ovh/suggest/"+inputValue.value)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             // let songTitle = data.data.map(inputValue => inputValue.title);
//             const lyricsList = document.getElementById("lyrics-list");
//             for (let i = 0; i < 10; i++) {
//                 const user = data[i];
//                 console.log(user);
//                 const p = document.createElement("p");
//                 p.innerHTML = `
//                 <p><strong>${user.title}</strong><button>get lyrics</button></p>
//                 `
//                 lyricsList.appendChild(p);
                
//             }
//         })
// })


let srcButton = document.getElementById("button");
let inputValue = document.getElementById("song-name");

srcButton.addEventListener("click" , function(){
    fetch("https://api.lyrics.ovh/suggest/"+inputValue.value)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            let songTitle = data.data.map(inputValue => inputValue.title);
            const ul = document.getElementById("lyric-list");
            for(let i=0; i<10; i++){
                let title = songTitle[i];
                // console.log(title);
                // document.getElementById("song").innerHTML=title;
                // document.getElementById("album").innerText = data.data[0].album.title;
                const p = document.createElement("p");
                p.innerHTML = `
                <p class="song-list"><strong>${title}</strong>Album By<span> ${data.artist},${title} </span><button class="btn btn-success get-btn" onclick="getSongDetail(${title.no})">get lyrics</button></p>
                `;
                ul.appendChild(p);
            }
        })

        function getSongDetail(songDetail){
            fetch("https://api.lyrics.ovh/v1/${artist}/${title}")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const lyricsList = document.getElementById("lyrics");
                    lyricsList.innerHTML=`
                        <h1>${data.lyrics}</h1>
                        `
                })
        }
})


var lyricsButton = document.getElementById("get-btn");
lyricsButton.addEventListener("click", function(){
    artist = document.getElementById("artist");
    songTitle = document.getElementById("lyrics-title");
    fetch("https://api.lyrics.ovh/v1/${artist}/${songTitle}")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById("lyrics").innerText = data.lyrics;
    })
})