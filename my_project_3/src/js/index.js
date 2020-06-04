import * as reciever from './reciever'
reciever.default.getData();


const signup = () => document.getElementById('_upload').addEventListener('click',()=>{
    signupHandler();
})
const signupHandler=()=>{
    document.querySelector('.modal').style.display="block";
    document.querySelector('.close').addEventListener('click',()=>{
        document.querySelector('.modal').style.display="none";  
    })
    document.querySelector('body').style.opacity=0.6;
    console.log('signup');
}

signup();








