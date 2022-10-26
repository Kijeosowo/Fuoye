'use strict';

var firebaseConfig = {
  apiKey: "AIzaSyCZ7LxWKpWG1V3igKPI9DCxK2L7TTYE3tg",
  authDomain: "fuoye-upload-file-database.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  // databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "fuoye-upload-file-database",
  storageBucket: "fuoye-upload-file-database.appspot.com",
  // messagingSenderId: "SENDER_ID",
  // appId: "APP_ID",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

var x =document.getElementById("Login");
var y =document.getElementById("Register");
var z =document.getElementById("btn");

function Register(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function Login(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}

document.getElementById('Register').addEventListener('click', function(events) {
  database(events)
});

  const database = async function(events) {
    events.preventDefault()
    const { data, error } = await supabase.auth.signUp(
      {
        email: 'example@email.com',
        password: 'example-password',
        options: {
          data: {
              Matric_No: 'CSC/2018/1168',
          //   first_name: 'John',
          //   age: 27,
          }
        }
      }
    )
    console.log(data, error);
  };

