var postGateSwitch = true;
var postActive = false;
var gateActive = false;

function dropdown(){
    event.preventDefault()
    if (postGateSwitch == false){
        document.getElementById('post_button').style.display = 'none'
        document.getElementById('gate_button').style.display = 'none'
        postGateSwitch = true;
    }
    else{
        document.getElementById('post_button').style.display = 'block'
        document.getElementById('gate_button').style.display = 'block'
        postGateSwitch = false;
    }
}

function post(){
    event.preventDefault()
    document.getElementById('dropdown-text').innerHTML = "Post";

    document.getElementById('post_button').style.display = 'none'
    document.getElementById('gate_button').style.display = 'none'
    postGateSwitch = true;
    postActive = true;
    gateActive = false;
}

function gate(){
    event.preventDefault()
    document.getElementById('dropdown-text').innerHTML = "Gate";

    document.getElementById('post_button').style.display = 'none'
    document.getElementById('gate_button').style.display = 'none'
    postGateSwitch = true;
    gateActive = true;
    postActive = false;
}


document.getElementById('input-gnss').addEventListener('keyup', (e) => {
    if (postActive || gateActive){
        if (e.keyCode === 13){
            document.getElementById('gnss-text').innerHTML += document.getElementById('input-gnss').value;
    
            switch (true){
                case postActive:
                    document.getElementById('gnss-text').innerHTML += ' (post)<br>';
                    break;
                case gateActive:
                    document.getElementById('gnss-text').innerHTML += ' (gate)<br>';
                    break;
            }
        }
    }
})