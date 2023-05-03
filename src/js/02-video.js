import Player from '@vimeo/player';

import lodashThrottle from 'lodash.throttle'

const playerEl =document.querySelector('#vimeo-player')

const player = new Player(playerEl);
const saveTime = ()=>{
    player.getCurrentTime().then(time =>{
localStorage.setItem("videoplayer-current-time", time)

    })
}
const getTime = localStorage.getItem("videoplayer-current-time")
if (getTime){
    player.setCurrentTime(getTime)
}



player.on('timeupdate', lodashThrottle(saveTime, 1000) )


