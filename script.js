

//==============================================html var ===================================================//
let resetbtn = document.querySelector('.reset')
let nums =Array.from(document.getElementsByClassName('num'));
let input_X = document.getElementById('name1')
let input_O = document.getElementById('name2')
let winText = document.querySelector('.wintext')
//dictionary to covert id from html to int in js
let dict = {
"ziro" : 0 ,
"one" : 1 ,
"two" : 2 ,
"three" : 3 ,
"four" : 4 ,
"five" : 5 ,
"six" :6 ,
"seven" : 7 ,
"eight" :8
};




//==========================================game var=======================================================//
const win_possibility = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const win_possibility_lebght = win_possibility.length;
const sizeofcell = 3;
let res_x = []
let res_o = []
const x="X"
const o="O"
let current_player = x
let name1
let name2

//==========================================start game=======================================================//
function startGame (){
    for(let i=0;i<nums.length;i++){
        nums[i].style.pointerEvents = "auto"
    }

    for(let i = 0 ; i < nums.length ; i++){
    nums[i].innerHTML = ' '
    }
    current_player = x
    res_x = []
    res_o = []
    for(let i=0;i<nums.length;i++){
        nums[i].style.backgroundColor ="darkslategray"
    }
    input_X.value = ' '
    input_O.value = ' '
    winText.innerHTML = "Let's Play"
}
startGame()
//==========================================reset button=======================================================//
const resetbtnlisnner = () =>{
    startGame()
}
resetbtn.addEventListener('click',resetbtnlisnner)
//==========================================checkingWining=======================================================//
function checkArrayInArray(arr, arr2D) {
    let cnt =0
    for (let i = 0; i < arr2D.length; i++) {
        cnt=0
        for(let j=0;j<win_possibility_lebght;j++){
            for(let k =0; k<arr.length;k++){
                if(arr2D[i][j]===arr[k]){
                    cnt++
                }
                console.log(cnt)
                if(cnt===3){
                    nums[arr2D[i][0]].style.backgroundColor = 'black';
                    nums[arr2D[i][1]].style.backgroundColor = 'black';
                    nums[arr2D[i][2]].style.backgroundColor = 'black';

                    return true
                }
            }
        }
    }
    return false;
}
    

//==========================================drew =======================================================//

function drewlisnner (e){
    const id= e.target.id
    if(document.getElementById(id).innerHTML === " "){
        if(current_player === x){
            document.getElementById(id).innerHTML=current_player
            res_x.push(dict[id])
            console.log(res_x)
            current_player = o
            if(checkArrayInArray(res_x,win_possibility)&&res_x.length>=sizeofcell){
                for(let i=0;i<nums.length;i++){
                    nums[i].style.pointerEvents = "none";
                }
                if(document.getElementById('name1').value === " "){
                    winText.innerHTML =  "X has won"
                }else{
                    winText.innerHTML = document.getElementById('name1').value +" has won"
                }
            }
            
        }else{
            document.getElementById(id).innerHTML=current_player
            res_o.push(dict[id])
            console.log(res_o)
            current_player = x
            if(checkArrayInArray(res_o,win_possibility)&&res_o.length>=sizeofcell){
                for(let i=0;i<nums.length;i++){
                    nums[i].style.pointerEvents = "none"
                }
                if(document.getElementById('name2').value === " "){
                    winText.innerHTML =  " O has won"
                }else{
                    winText.innerHTML = document.getElementById('name2').value +" has won"
                }
                
            }
        }
    }else if(res_o.length + res_x.length >=8){
        startGame()
    }
}

for( let i = 0 ; i < nums.length ; i++){
    nums[i].addEventListener('click',drewlisnner)
}



