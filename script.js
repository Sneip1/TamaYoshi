    //MODEL
    let buttonFood = "";
    let buttonWater = "";
    let buttonPlay = "";
    let view = "";
    let cycle = 60;
    let points = 0;
    // let temp = 0;
    let activity = "";


    //VIEW
    updateview();
    function updateview(){
        document.getElementById('app').innerHTML =/*HTML*/ `
        <div id="display">${view}</div>
        <div id="buttonDiv">
            <button id="buttonFood" onclick="feed()">Food</button>
            <button id="buttonWater" onclick="water()">Water</button>
            <button id="buttonPlay" onclick="play()">Play</button>
            </div><br>
            <h1>${cycle}</h1>
            `;
            }

    //CONTROLLER
    function feed(){
        if(activity == 1) {
            cycle += 30;
            activity = 0;
            imGood();
        } else{
            cycle -= 10;
        }
    }

    function water(){
        if(activity == 2) {
            cycle += 30;
            activity = 0;
            imGood();
        } else {
            cycle -= 10;
        }
    }

    function play() {
        if(activity == 3){
        cycle += 30;
        activity = 0;
        imGood();
      } else {
        cycle -= 10;
      }
    }

    randomchoice()
    function randomchoice(){
        setInterval(() => {
            activity = Math.floor(Math.random() * 3)+1;
            if(activity == 1){
                view = '<img class="emotions" src="img/hungryYoshi.png">' + '<br>' + 'Feed Me!';
            }
            else if (activity == 2){
                view ='<img class="emotions" src="img/thirstyYoshi.png">' + '<br>' + 'Thirsty!';
            }
            else if (activity == 3){
                view ='<img class="emotions" src="img/petYoshi.png">' + '<br>' + 'Play with Me!';
            }
            // console.log(activity)
            updateview();
        },20000);
    }
    // function checkifright(){
    //     if(activity 2== 3 temp){
    //         activity = 0;
    //     }
    //     else if {
    //     }
    // }
    timer();
    function timer(){
        setInterval(() => {
            cycle-=1;
            console.log(cycle);

            imDead();
            updateview()
        }, 1000);
    }

    imGood();
    function imGood() {
        if (activity == 0) {
            view = '<img class="emotions" src="img/happyYoshi.png">' + '<br>' + 'Im good and happy!';
            updateview();
        }
    }
    function imDead() {
        if (cycle == 0 || cycle < 0) {
            view = '<img class="emotions" src="img/deadYoshi.png">' + '<br>' +'Im dead!!' + '<br>' + 'Refresh page to try again';
            updateview();
        }
    }
        
