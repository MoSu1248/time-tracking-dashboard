
let currentSetting = "weekly"

const cards = document.querySelectorAll('.card_container');
const periodBtns = document.querySelectorAll('.period__btns');


updateInfo(); 

//FUNCTION TO GET AND PASS BUTTON VALUE 
periodBtns.forEach(Btn =>{
  Btn.addEventListener('click', ()=>{
    currentSetting = Btn.value; 

    periodBtns.forEach(B =>{B.classList.remove('active')})
    
    if (currentSetting === Btn.value) {
      Btn.classList.add('active')
    }

    updateInfo()
  })
})
//FUNCTION TO UPDATE INFO
function updateInfo(params) {
  fetch('data.json')
.then(response => response.json())
.then(data =>{

  for(let dataItem of data){
    
    cards.forEach(card =>{
      
    if (dataItem.title === card.id) {
        
        const header =  card.querySelector('h1');
        const p = card.querySelector('time')
        
        header.innerHTML = dataItem.timeframes[currentSetting].current + "hrs";
        p.innerHTML = 'Previous - ' +dataItem.timeframes[currentSetting].previous;
        
      }
      })
    }
    
})
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
}   