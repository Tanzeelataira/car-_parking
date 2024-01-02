console.log("js is working")
// Your web app's Firebase configuration
//https://github.com/nithin4599/js

var
    firebaseConfig = {
        apiKey: "AIzaSyB-YVlMEGGXR04SLoXud7F1cA3sulQPFqY",
        authDomain: "trial-f44d4.firebaseapp.com",
        databaseURL: "https://trial-f44d4-default-rtdb.firebaseio.com",
        projectId: "trial-f44d4",
        storageBucket: "trial-f44d4.appspot.com",
        messagingSenderId: "636617745535",
        appId: "1:636617745535:web:24e1dd121561e025734b4a",
        measurementId: "G-2BSGL3ECLE"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
    var email = document.getElementById('available').value
    var password = document.getElementById('notavailable').value
    var username = document.getElementById('available1').value
    var say_something = document.getElementById('notavailable1').value
    var favourite_food = document.getElementById('available2').value
    var favourite_food1 = document.getElementById('notavailable2').value
    var favourite_food2 = document.getElementById('available3').value
    var favourite_food3 = document.getElementById('notavailable3').value
    var favourite_food4 = document.getElementById('notavailable4').value
    var favourite_food5 = document.getElementById('notavailable5').value
    var favourite_food6 = document.getElementById('notavailable6').value
    var favourite_food7 = document.getElementById('notavailable7').value
    var favourite_food8 = document.getElementById('notavailable8').value

    database.ref('slot/' + username).set({
        email: email,
        password: password,
        username: username,
        say_something: say_something,
        favourite_food: favourite_food,
        favourite_food1: favourite_food1,
        favourite_food2: favourite_food2,
        favourite_food3: favourite_food3,
        favourite_food4: favourite_food4,
        favourite_food5: favourite_food5,
        favourite_food6: favourite_food6,
        favourite_food7: favourite_food7,
        favourite_food8: favourite_food8,
    })
    
}
   


function get() {
    var username =('available')
 

    var user_ref = database.ref('slot/' + username)
    user_ref.on('value', function (snapshot) {
        var data = snapshot.val()
       
        //alert(data.email)
       // alert(data.username)
        document.getElementById("p1").innerHTML = data.email;
        document.getElementById("p2").innerHTML = data.password;
        document.getElementById("p3").innerHTML = data.favourite_food;
        document.getElementById("p4").innerHTML = data.say_something;
        document.getElementById("p5").innerHTML = data.username;
        document.getElementById("p6").innerHTML = data.slot1;
        document.getElementById("p7").innerHTML = data.slo2;
        document.getElementById("p8").innerHTML = data.slot3;
        document.getElementById("p9").innerHTML = data.slot4;
        document.getElementById("p10").innerHTML = data.slot5;
        document.getElementById("p11").innerHTML = data.slot6;
        document.getElementById("p12").innerHTML = data.slot7;
        document.getElementById("p13").innerHTML = data.slot8;
        console.log(data.email)
        console.log(Number(data.email) * Number(data.say_something) * Number(data.password));
        console.log(data.favourite_food);

    })    
   
}
function save() {
    var email = document.getElementById('available').value
    var password = document.getElementById('notavailable').value
    var username = document.getElementById('available1').value
    var say_something = document.getElementById('notavailable1').value
    var favourite_food = document.getElementById('available2').value
    var favourite_food1 = document.getElementById('notavailable2').value
    var favourite_food2 = document.getElementById('available3').value
    var favourite_food3 = document.getElementById('notavailable3').value
    var favourite_food4 = document.getElementById('notavailable4').value
    var favourite_food5 = document.getElementById('notavailable5').value
    var favourite_food6 = document.getElementById('notavailable6').value
    var favourite_food7 = document.getElementById('notavailable7').value
    var favourite_food8 = document.getElementById('notavailable8').value

    var updates = {
        email: email,
        password: password,
        username: username,
        say_something: say_something,
        favourite_food: favourite_food,
        favourite_food1: favourite_food1,
        favourite_food2: favourite_food2,
        favourite_food3: favourite_food3,
        favourite_food4: favourite_food4,
        favourite_food5: favourite_food5,
        favourite_food6: favourite_food6,
        favourite_food7: favourite_food7,
        favourite_food8: favourite_food8,

    }

    database.ref('user/' + username).update(updates)
   
    

function remove() {
    var username = document.getElementById('name').value

    database.ref('user/' + username).remove()   
}

     window.location.href = "./payment.html";
}