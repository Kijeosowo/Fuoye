'use strict';

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
