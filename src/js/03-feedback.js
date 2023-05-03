import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const LOCAL_KEY ='feedback-form-state'
// зберігає значення в локал сторедж
const saveLocal=(e)=>{
    const obj={
      email: e.currentTarget.elements.email.value ,
      message:  form.elements.message.value 
    }
    const newObj=JSON.stringify(obj)
localStorage.setItem(LOCAL_KEY, newObj)
}
form.addEventListener('input', throttle(saveLocal), 500)

// заповнює поля при завантаженні

const getLocalData=()=>{
const objLocal=localStorage.getItem(LOCAL_KEY )
if(objLocal){
const {email, message}=JSON.parse(objLocal)
form.elements.message.value=message,
form.elements.email.value=email
}
return objLocal
}
getLocalData()

const resetForm = (e)=>{
    e.preventDefault()
    const obj=getLocalData()
    console.log(obj);
    form.reset()
    localStorage.removeItem(LOCAL_KEY)
}
form.addEventListener('submit',resetForm)
