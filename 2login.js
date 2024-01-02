console.log("js is working")

// Your web app's Firebase configuration

const firebaseConfig = {
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
  console.log(save)
  var email = document.getElementById('name').value
  var password = document.getElementById('name2').value
  var username = document.getElementById('age').value
  var say_something = document.getElementById('username').value
  var say_something1 = document.getElementById('address').value
  var favourite_food = document.getElementById('address2').value
  var favourite_food1 = document.getElementById('address3').value
  var favourite_food2 = document.getElementById('car_number').value
  var favourite_food3 = document.getElementById('phone_number').value




  database.ref('users/' + username).set(
    {
      email: email,
      password: password,
      username: username,
      say_something: say_something,
      say_something1: say_something1,
      favourite_food: favourite_food,
      favourite_food1: favourite_food1,
      favourite_food2: favourite_food2,
      favourite_food3: favourite_food3,

    })

  alert('Saved')
  window.location.href = "./slot.html";

}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function (snapshot) {
    var data = snapshot.val()

    alert(data.email)
    alert(data.username)
    console.log(data.email)
    console.log(Number(data.email) * Number(data.say_something) * Number(data.password));
    console.log(data.favourite_food);
    if (data.email == "nk") {
      alert("This is nk")
    }

  })
  alert(data.email)



}

function update() {
  console.log(update)
  var username = document.getElementById('name').value
  var email = document.getElementById('name2').value
  var password = document.getElementById('age').value
  var username = document.getElementById('username').value
  var say_something = document.getElementById('address').value
  var say_something1 = document.getElementById('address2').value
  var favourite_food1 = document.getElementById('address3').value
  var favourite_food2 = document.getElementById('car_number').value
  var favourite_food = document.getElementById('phone_number').value


  var updates = {
    email: email,
    password: password,
    username: username,
    say_something: say_something,
    say_something1: say_something1,
    favourite_food: favourite_food,
    favourite_food1: favourite_food1,
    favourite_food2: favourite_food2,
    favourite_food3: favourite_food3,

  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('name').value

  database.ref('users/' + username).remove()

  alert('deleted')
  alert('Saved')


}