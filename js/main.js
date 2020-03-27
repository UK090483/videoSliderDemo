

// let glide = new Glide('.glide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 3,
//     breakpoints: {
//         750: {
//             perView: 2
//         },
//         900: {
//             perView: 3
//         },
//         1100: {
//             perView: 3
//         },
//         1400: {
//             perView: 3
//         }

//     }
// }).mount()
// glide.on('resize',(e)=>{console.log(e)})












function startGlide() {
    let glide2 = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        breakpoints: {
            750: {
                perView: 2
            },
            900: {
                perView: 3
            },
            1100: {
                perView: 3
            },
            1400: {
                perView: 3
            }

        }
    }).mount()
}





// let mplayer = document.querySelector('#mplayer')

// console.log(mplayer.getBoundingClientRect().width * (9/16) + 'px')
// mplayer.style.height = mplayer.getBoundingClientRect().width * (9/16) + 'px'



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {

        events: {
            'onReady': onPlayerReady,
            'onApiChange': onApiChange,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError,
            'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
        }
    });

    function onPlayerPlaybackQualityChange(){
        console.log(player)
        console.log(player)
    }

    function onApiChange(e, b) {

    }
    function onPlayerReady() {
        let res = player.cuePlaylist(
            {
                list: 'PL8fumNHsC-3O0iQ_KP2Gz5f8ib2jP5rPv',
                listType: 'playlist'
            }
        );

        setTimeout(() => {
            console.log(player.getPlaylist())
            makeSliderItems(player.getPlaylist())
        }, 1000)
    }
    function onPlayerStateChange(e) {

    }
    function onPlayerError() { }




    // player.setSize(width: Number, height: Number)



}

function makeSliderItems(items) {

    let wrap = document.querySelector('.put_items')
    items.forEach((item) => {
        let ItemLi = makeSliderItem(item)
        wrap.appendChild(ItemLi)
    })

    startGlide();

    let sliderItems = document.querySelectorAll('.slider-item-overlay')

    sliderItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(item.dataset.yt_id)
            player.loadVideoById(item.dataset.yt_id, 5, "large")
        })
    })

}


function makeSliderItem(item) {
    let li = document.createElement("li")
    li.classList.add('slider-item', 'glide__slide')

    let innerDiv = document.createElement("div")
    innerDiv.classList.add('slider-item-inner')
    innerDiv.style.backgroundImage = "url('https://img.youtube.com/vi/" + item + "/0.jpg')"

    let overlay = document.createElement("div")
    overlay.classList.add('slider-item-overlay')
    overlay.setAttribute('data-yt_id', item);

    innerDiv.appendChild(overlay);
    li.appendChild(innerDiv);

    return li
}


