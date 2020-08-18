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
                document.getElementById("song").innerHTML=title;
                // document.getElementById("album").innerText = data.data[0].album.title;
                const p = document.createElement("p");
                p.innerText = title;
                ul.appendChild(p);
            }
        })
})


lyricsButton = document.getElementById("lyrics-button")
srcButton.addEventListener("click" , function(){
    fetch("https://api.lyrics.ovh/suggest/"+inputValue.value)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            let songTitle = data.data.map(inputValue => inputValue.title);
            for(let i=0; i<10; i++){
                let title = songTitle[i];
                // console.log(title);
                document.getElementById("lyrics-title").innerHTML=title;
            }
        })
})


srcButton.addEventListener("click" , function(){
    fetch("https://api.lyrics.ovh/suggest/"+inputValue.value)
        .then(res => res.json())
        .then(data => {

            console.log(data);
            let songTitle = data.data.map(inputValue => inputValue.title);
            for(let i=0; i<10; i++){
                let title = songTitle[i];
                // console.log(title);
                document.getElementById("lyrics-title").innerHTML=title;
            }
        })
})



// function display(data){
//     console.log(data);
//     const lyricList = document.getElementById("lyric-list");
//     for(let i=0; i<10; i++){
//         document.getElementById("song").innerText = data.data[i].title;
//     }
// }


var lyricsButton = document.getElementById("lyrics-button");
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

// function loadLyrics(artistName,title){
//     const getLyric = document.getElementById("Lyric-button");
//     getLyric.addEventListener("click",function(){
//         fetch("https://api.lyrics.ovh/v1/${artist.name}/${album.title}/")
//         .then(res => tes.json())
//         .then(data => {
//             return data;
//         })
//     })
// }

// function getLyrics(artistName,title){
//     toggleElement(lyricList,singleLyrics);
//     const lyrics = loadLyrics(artistName,title);

//     lyrics.then((lyric)=> {
//         if(lyric.lyrics){
//             lyricsContainer.innerHTML = lyric.lyric;
//         } else {
//             lyricsContainer.innerHTML = "sorry lyrics not available"
//         }
//         lyricsTitle.innerHTML = title + " " +artistName;
//     })
// }