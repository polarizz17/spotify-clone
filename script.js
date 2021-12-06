console.log("Welcome to Spotify");
// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let cover = document.getElementById('coverimg');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

//songs array

let songs = [
    {songName: "Ascence - Without You", filePath: "songs/1.mp3", coverPath: "covers/1.jpg",},
    {songName: "Cartoon - Howling (Ft. Asena)", filePath: "songs/2.mp3", coverPath: "covers/2.jpg",},
    {songName: "Diamond Eyes - Gravity ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg",},
    {songName: "Diamond-Eyes-Stars", filePath: "songs/4.mp3", coverPath: "covers/4.jpg",},
    {songName: "Kaivon - First Love", filePath: "songs/5.mp3", coverPath: "covers/5.jpg",},
]

//add songs and covers to list


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

//make all play 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.src = 'img/play.png';
    })
}



//play or pause

masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.src = 'img/pause.png'; 
        masterSongName.innerText = songs[songIndex].songName;
        cover.src =`C:/Users/polar/Desktop/HTML AND CSS/Projects/Spotify_Clone/covers/${songIndex+1}.jpg`;
        document.getElementById('masterSongName').style.opacity = 1;
        cover.style.opacity = 1;
        //cover img rotation
        cover.style.animationName = "rotation";
    }
    else{
        audioElement.pause();
        masterPlay.src = 'img/play.png';
        makeAllPlays();
        cover.style.animationName ="none";
    }
})

//progress bar

audioElement.addEventListener('timeupdate',()=>{
    // console.log("time updated...")
    //seek bar
    progress = parseFloat((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


//small play button in list

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        // console.log(e.target);
        songIndex = parseInt(e.target.id);
        e.target.src = 'img/pause.png';
        audioElement.src = `songs/${songIndex+1}.mp3`;
        cover.src =`C:/Users/polar/Desktop/HTML AND CSS/Projects/Spotify_Clone/covers/${songIndex+1}.jpg`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementById('masterSongName').style.opacity = 1;
        cover.style.opacity = 1;
        masterPlay.src = 'img/pause.png';
    })
})

//  next

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    cover.src =`C:/Users/polar/Desktop/HTML AND CSS/Projects/Spotify_Clone/covers/${songIndex+1}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'img/pause.png';
    cover.style.animationName = "rotation";

})

//pevious

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 4;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    cover.src =`C:/Users/polar/Desktop/HTML AND CSS/Projects/Spotify_Clone/covers/${songIndex+1}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'img/pause.png';
    cover.style.animationName = "rotation";
})

//auto next
audioElement.addEventListener('ended', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    cover.src =`C:/Users/polar/Desktop/HTML AND CSS/Projects/Spotify_Clone/covers/${songIndex+1}.jpg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.src = 'img/pause.png';
    cover.style.animationName = "rotation";

})

//cover img rotation








