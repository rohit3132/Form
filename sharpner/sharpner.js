//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('my-form'));

//console.log(document.querySelectorAll('.item'))
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

//items.forEach((item) => console.log(item));

// const ul= document.querySelector('.items');

// //ul.remove();
// //ul.lastElementChild.remove();
//  ul.firstElementChild.textContent='Hello';
//  ul.firstElementChild.style.background='green'
//  ul.children[1].innerText='Item 2';
//  ul.children[1].style.background='yellow';
//  ul.lastElementChild.innerHTML='<h1>Hello</h1>';

// const btn= document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log('click');
//     console.log(e.target);
//      document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
// }); 

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault()
//     console.log('click');
//     console.log(e.target);
//      document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
// }); 

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault()
//     console.log('click');
//     console.log(e.target);
//      document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
// }); 

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList= document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML= 'Please enter all fields';

        setTimeout(() => msg.remove(),3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        let myObj = {
            name: nameInput.value,        
            email: emailInput.value
        }; 

       

        let existing= localStorage.getItem('userDetail');
        let data= existing ? JSON.parse(existing) : [];
        data.push(myObj);

        localStorage.setItem(nameInput.value,JSON.stringify(data));
        
        //creating delete button
         let del= document.createElement('button');
         del.className= 'btn-default btn-sm float- right btn-outline-secondary';
         del.appendChild(document.createTextNode('Delete'));
         del.onclick = () => {
            localStorage.removeItem(myObj.name)
            userList.removeChild(li);
         }
         li.appendChild(del);

         //Creating Edit Button
         let edit= document.createElement('button');
         edit.className= 'btn-default btn-sm float- right btn-outline-secondary';
         edit.appendChild(document.createTextNode('Edit'));
         edit.onclick = () => {
            localStorage.removeItem(myObj.name)
            userList.removeChild(li);
            nameInput.value= myObj.name;
            emailInput.value= myObj.email;
         }
         li.appendChild(edit);

 

        // localStorage.setItem('userName',nameInput.value);
        // localStorage.setItem('userEmail',emailInput.value);


        userList.appendChild(li);
        userList.appendChild(document.createElement('br'));
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
