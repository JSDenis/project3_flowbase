var houseBtn1 = document.querySelector('#house1');
var houseBtn2 = document.querySelector('#house2');
var houseBtn3 = document.querySelector('#house3');
var houseBtn4 = document.querySelector('#house4');

houseBtn1.onclick = function(){
    filterHouse("house1");
}

houseBtn2.onclick = function(){
    filterHouse("house2");
}

houseBtn3.onclick = function(){
    filterHouse("house3");
}

houseBtn4.onclick = function(){
    filterHouse("house4");
}

function filterHouse(triggerSelector){
    var allHouses = document.querySelectorAll('.card');

    for(var i = 0; i < allHouses.length; i++){
        if(allHouses[i].classList.contains(triggerSelector)){
            allHouses[i].style.display = 'block';
        } else{
            allHouses[i].style.display = 'none';
        }
    }
}

  /* for(var i = 0; i < allHouses.length; i++){ 
        allHouses[i].style.display = 'block';
    } */
