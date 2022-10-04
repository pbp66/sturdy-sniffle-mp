// select search input element
var searchInputEl = $('#search-input')
// select the format dropdown element
var formatDropdownEl = $('#format-dropdown')
// select the click me button
var clickMeBtn = $('#click-me-btn')



function searchFunction(event) {
    event.preventDefault()

    // API call

    // current elements get changed to be on the left side, new elements appear on the right side

    
}

// add event listener to the button
clickMeBtn.on('click', searchFunction)

////////////
// function renderData() {
//     console.log('hello from renderData', )
//     fetch('https://www.loc.gov/search/?fo=json')
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (json) {
//         console.log(json)
//       })
//   }
  
//   renderData()


  'https://www.loc.gov/' + format + '/?fo=json'
//   Format List : maps/audio/photos/manuscripts/newspapers/film-and-videos/notated-music/websites

'&q=' + query;

// "https://www.loc.gov/" + FORMAT + "/?q=" + QUERY INPUT "&fo=json"