'use strict';








// // btn
const btnRemove = document.querySelector('.btn-clear');

function hideBtn () {
    let picture = document.querySelector('.phone-items');
    // let fon = document.querySelector('.remove-fon');
    //     fon.classList.add('show');
    picture.classList.remove('show');
}
btnRemove.addEventListener('click', hideBtn);

// const product = document.querySelector('[data-remove]'),
//     //   removebtn = document.querySelector('.remove-btn');
//        btn = document.querySelector('.');
       
    
       
   
//   function showRemoveBtn () {

//     product.addEventListener('click', () => {
    

        
//     });
// }

// showRemoveBtn();
    // product.forEach((item) => { 
    //     item.addEventListener('mouseover', () => {
    //          removeBtn.classList.add('show');



            
            // slider
        
  const click = document.querySelector('.slider');

   let left = 0;

  click.addEventListener('click', sliderMove);

 function sliderMove () {
       let line = document.querySelector('.line');
       left = left - 310;

       if (left < -1240) {
           left = 0;
       }
       line.style.left = left  + 'px';

}