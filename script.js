var data = {
    title: [
    	"Anne-Marie - Alarm",
    	"John Legend - All of Me",
    	"Charlie Puth - Attention",
    	"Zara Larsson - Ain't My Fault",
    	"Duncan Laurence - Arcade",
    	"Imagine Dragons - Believer",
    	"Billie Eilish - Bellyache",
    	"Billie Eilish - Bad Guy",
    	"Billie Eilish - Bury a Friend",
    	"Anne-Marie - Ciao Adios",
    	"TONES AND I - DANCE MONKEY",
    	"Katy Perry - Dark Horse",
    	"Don't Let Me Down",
    	"Dream It Possible",
    	"ZAYN - Dusk Till Dawn",
    	"Everything i Wanted",
    	"ALEKSEEV - FOREVER",
    	"Charlie Puth - How Long",
    	"Hymn For The Weekend",
    	"Lykke Li - I Follow Rivers",
    	"i-dont-wanna-be-you-anymore",
    	"James Arthur - Impossible",
    	"Dynoro - In My Mind",
    	"Կաթիլ - Կուզիմ",
    	"Naughty Boy - La la la",
    	"Love Me Like You Do",
    	"Billie Eilish - Lovely",
    	"Zara Larsson - Lush Life",
    	"Anne-Marie - FRIENDS",
    	"James Arthur - Recovery",
    	"Mani Beats - N&N",
    	"Nemra - Nare / Նարե",
    	"Nicky Jam x J. Balvin - X",
    	"Elvana Gjata - Njesoj",
    	"Billie Eilish - Ocean Eyes",
    	"POLO & PAN - Canopée",
    	"Lucas Estrada - Radio Love",
    	"Sting - Shape of My Heart",
    	"Ed Sheeran - Shape of You",
    	"While Your Lips Are Still Red",
    	"Shawn Mendes - Stitches",
    	"Nothing Holding Me Back",
    	"Srbuk - Walking Out",
    	"We Don't Talk Anymore",
    	"When the Party's Over",
    	"Eric Saade - Wide Awake"
    ],
    song: [
        "Music/alarm.mp3",
        "Music/all_of_me.mp3",
        "Music/attention.mp3",
        "Music/aint_my_fault.mp3",
        "Music/arcade.mp3",
        "Music/believer.mp3",
        "Music/bellyache.mp3",
        "Music/bad_guy.mp3",
        "Music/bury_a_friend.mp3",
        "Music/ciao_adios.mp3",
        "Music/dance_monkey.mp3",
        "Music/dark_horse.mp3",
        "Music/dont_let_me_down.mp3",
        "Music/dream_it_possible.mp3",
        "Music/dusk_till_down.mp3",
        "Music/everything_i_wanted.mp3",
        "Music/forever.mp3",
        "Music/how_long.mp3",
        "Music/hymn_for_the_weekend.mp3",
        "Music/i_follow_you.mp3",
        "Music/idontwannabeyouanymore.mp3",
        "Music/impossible.mp3",
        "Music/in_my_mind.mp3",
        "Music/kuzim.mp3",
        "Music/la_la_la.mp3",
        "Music/love_me_like_you_do.mp3",
        "Music/lovely.mp3",
        "Music/lush_life.mp3",
        "Music/marshmello_friends.mp3",
        "Music/my_recovery.mp3",
        "Music/n&n.mp3",
        "Music/nemra _nare.mp3",
        "Music/nicky_jam.mp3",
        "Music/njesoj.mp3",
        "Music/ocean_eyes.mp3",
        "Music/polo_pan_canopee.mp3",
        "Music/radio_love.mp3",
        "Music/shape_of_my_heart.mp3",
        "Music/shape_of_you.mp3",
        "Music/still_red.mp3",
        "Music/stitches.mp3",
        "Music/theres_nothing_holding_me_back.mp3",
        "Music/walking_out.mp3",
        "Music/we_dont_talk_anymore.mp3",
        "Music/when_the_party_is_over.mp3",
        "Music/wide_awake.mp3"
    ],
    poster: [
    	"Images/1.jpg",
        "Images/2.jpg",
        "Images/3.jpg",
        "Images/4.jpg",
        "Images/5.jpg",
        "Images/6.jpg",
        "Images/7.jpg",
        "Images/8.jpg",
        "Images/9.jpg",
        "Images/10.jpg",
        "Images/11.jpg",
        "Images/12.jpg",
        "Images/13.jpg",
        "Images/14.jpg",
        "Images/15.jpg",
        "Images/16.jpg",
        "Images/17.jpg",
        "Images/18.jpg",
        "Images/19.jpg",
        "Images/20.jpg",
        "Images/21.jpg",
        "Images/22.jpg",
        "Images/23.png",
        "Images/24.jpg",
        "Images/25.jpg",
        "Images/26.jpg",
        "Images/27.jpg",
        "Images/28.jpg",
        "Images/29.jpg",
        "Images/30.jpg",
        "Images/31.jpg",
        "Images/32.jpg",
        "Images/33.jpg",
        "Images/34.jpg",
        "Images/35.jpg",
        "Images/36.jpg",
        "Images/37.jpg",
        "Images/38.png",
        "Images/39.png",
        "Images/40.jpg",
        "Images/41.jpg",
        "Images/42.jpg",
        "Images/43.jpg",
        "Images/44.jpg",
        "Images/45.jpg",
        "Images/46.jpg"
    ]
}

var currentSong = 0; 

var song = new Audio();

window.onload = function() {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
    console.log(song)
}

function playOrPauseSong() {
    let play = document.getElementById("play")

    if (song.paused) {
        song.play();
        play.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475790.svg"
    } else {
        song.pause();
        play.src = "https://image.flaticon.com/icons/svg/1262/1262172.svg"
    }
}

song.addEventListener("timeupdate", function () {
    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";
    convertTime(song.currentTime)
    if (song.ended) {
        next()
    }
})

function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
};

function totalTime(seconds) {
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec;
};

function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong();
    play.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475790.svg"
}

function prev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475790.svg"
}

function muted() {
    var mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475774.svg"
    } else {
        song.muted = true
        mute.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475784.svg"
    }
}

function increase() {
    song.volume += 0.1;
  	if (song.muted) {
  		song.muted = false
        mute.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475774.svg"
  	}
}

function decrease() {
    song.volume -= 0.1;
    if(song.volume == 1.3877787807814457e-16){
    	if (song.muted) {
        song.muted = true
        mute.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475774.svg"
    }
    else {
        song.muted = true
        mute.src = "https://www.flaticon.com/premium-icon/icons/svg/2475/2475784.svg"
    	}
    }
}

function speedFunction() {
  var speed = document.getElementById("mySelect").value;
  if (speed == "normal") {
  	song.playbackRate = 1.0;
  }
  else if(speed == "half"){
  	song.playbackRate = 0.8;
  }
  else if(speed == "double"){
  	song.playbackRate = 1.2;
  }
  else{
  	alert("Something went wrong, please try again")
  }
}

window.onkeypress = function(event){
	if (event.key == " "){
		playOrPauseSong()
	}
	else if (event.key == "d") {
		next()
	}
	else if (event.key == "a") {
		prev()
	}
	else if (event.key == "w") {
		increase()
	}
	else if (event.key == "s") {
		decrease()
	}
	else if (event.key == "m") {
    	muted()	
    }
}