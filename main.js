import './style.css';

const jq = $.noConflict();
(function ($) {

  document.querySelector('#app').innerHTML = `<h1>Hello Vite!</h1>`;
  const triangleBase=7;
  let triangleSymbol='';
  for(let i=triangleBase;i>0;i--){
    console.log(triangleSymbol+='#');
  }

})(jq);
