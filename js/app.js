const cl = console.log;

const showModal = document.getElementById('showModal');
const ovarlay = document.getElementById('ovarlay');
const myModal = document.getElementById('myModal');
const addMovie = document.getElementById('addMovie');
const title = document.getElementById('title');
const imgUrl = document.getElementById('imgUrl');
const rating = document.getElementById('rating');
const movieContainer = document.getElementById('movieContainer');
const myClose = [...document.querySelectorAll('.myClose')];

let movieArray = [];


const btnModal = (eve) => {
    ovarlay.classList.toggle('show')
    myModal.classList.toggle('show')
}


const temaplting = (arr) =>{
    let result = "";
    arr.forEach(obj => {
        result += `
        <div class="col-sm-4">
        <div class="card">
            <div class="card-header">
                <h3>
                   ${obj.title}
                </h3>  
            </div>
            <div class="card-body">
                <img src="${obj.imgUrl}">
            </div>
            <div class="footer text-right mr-4">
            ${obj.rating}/5</div>
        </div>
    </div
        
        `
        
    })
    movieContainer.innerHTML = result;
}

const onAddMovieHandler = (eve) => {
    eve.preventDefault();
   let obj = {
    title : title.value,
    imgUrl : imgUrl.value,
    rating : rating.value
   }
   movieArray.push(obj)
   temaplting(movieArray)
   cl(movieArray)
   btnModal()
}





myClose.forEach(ele => {
    ele.addEventListener('click',btnModal)
})

const onRatingEvent = (eve) => {
    let val =  eve.target.value;
    cl(val)
    if(val >= 1 && val <= 5){
        eve.target.nextElementSibling.classList.add('d-none')
        return
    }else{
        eve.target.nextElementSibling.classList.remove('d-none')
    }
}


showModal.addEventListener("click", btnModal )
// addMovie.addEventListener('click',onAddMovieHandler)
addMovie.addEventListener('submit',onAddMovieHandler)
rating.addEventListener('blur' , onRatingEvent)