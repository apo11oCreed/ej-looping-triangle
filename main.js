import './style.css';

const jq = $.noConflict(),
title='Eloquent Javascript Exercises - Chapter 2',
tBase=7,
cBase=100,
bindingSize=10;

let descLoopingTriangle='<p class="tw-mb-[1rem]">Write a loop that makes seven calls to console.log to output the following triangle</p>',
descFizzBuzz='<p class="tw-mb-[1rem]">Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.</p>' +
'<p class="tw-mb-[1rem]">When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).</p>',
descChessboard='<p class="tw-mb-[1rem]">Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.</p>' +
'<p class="tw-mb-[1rem]">When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.</p>',
minform='<form id="miniForm">' + 
'<fieldset>' +
'<legend>Confirm the lowest number.</legend>' +
'<p class="tw-mb-[1rem]">Enter two numbers below. <span class="tw-text-sm tw-font-bold"><span style="color:red">*</span> Required</span></p>' +
'<p class="tw-mb-[1rem]">' + 
'<label for="numOne">Number 1<span style="color:red">*</span></label>' +
'<input class="tw-border-slate-200 tw-border-2 tw-rounded-sm" id="numOne" type="number" required />' + 
'</p>' + 
'<p class="tw-mb-[1rem]">' + 
'<label for="numOne">Number 2<span style="color:red">*</span></label>' +
'<input class="tw-border-slate-200 tw-border-2 tw-rounded-sm" id="numTwo" type="number" required />' + 
'</p>' + 
'<p class="tw-mb-[1rem]">' + 
'<label for="lowestNumber" class="tw-block">Lowest Number</label>' +
'<input class="tw-border-slate-200 tw-border-2 tw-rounded-sm" id="lowestNumber" type="text" />' + 
'</p>' + 
'<p class="tw-mb-[1rem]">' + 
'<input class="tw-border-slate-200 tw-bg-slate-200 tw-p-2 tw-leading-none" type="submit" value="Submit" />' +
'</p>' + 
'</fieldset>' +
'</form>';

class Section {
  constructor(name,color,desc){
    this.name = name;
    this.color = color;
    this.desc = desc;
    this.nameString=()=>{
      let stringArray=this.name.replace(/([A-Z])/g, ' $1').trim();
      return stringArray.substr(0, 1).toUpperCase() + stringArray.substr(1);
    }
  }
}

let loopingTriangle=new Section('loopingTriangle','red',descLoopingTriangle),
fizzBuzz=new Section('fizzBuzz','blue',descFizzBuzz),
chessBoard=new Section('chessBoard','green',descChessboard),
miniMum=new Section('minExercise','green',minform),
exerciseArray=[loopingTriangle,fizzBuzz,chessBoard,miniMum],
exerciseSections,
tPattern='';

(function ($) {

  document.querySelector('#app').innerHTML = `<h1 class="tw-font-bold tw-text-[2rem]">${title}</h1>`;
  
  // Sections setup

  execRenderSections(exerciseArray);

  // Triangle exercise

  execTriangleSymbol(loopingTriangle,tBase,tPattern);

  // FizzBuzz exercise

  execFizzBuzz(fizzBuzz,cBase);

  // Chessboard exercise

  execChessboard(chessBoard,bindingSize);

  // Minimum
  const form=document.getElementById('miniForm');
  minimum(form);

})(jq);

function execRenderSections(array){
  exerciseSections=array.map(item=>{
    return `<section id='${item.name}' class='tw-py-[2rem] tw-border-b last-of-type:tw-border-b-0'>
    <h2 class="tw-font-bold tw-uppercase tw-mb-[1rem]">${item.nameString()}</h2>
    ${item.desc}
    </section>`;
  }).join('');

  document.querySelector('#app').innerHTML+=exerciseSections;
}

function execTriangleSymbol(target,base,pattern){
  const section=document.querySelector('#' + target.name);
  let patternBreak='';
  for(let i=base;i>0;i--){
    pattern+='#';
    patternBreak+='<span class="tw-block tw-text-green-700">' + pattern + '</span>';
  }
  section.innerHTML+=patternBreak;
}

function execFizzBuzz(target,base){
  const section=document.querySelector('#' + target.name);
  let patternBreak='';

  for(let i=base;i>0;i--){
    let number=base - (i - 1),
    content='',
    comma=number==100?'':', ';

    if(number%3==0 && number%5==0){
      content='FizzBuzz <span class="tw-text-xs">(' + number + '%3, ' + number + '%5)</span>';
    } else if (number%3==0){
      content='Fizz <span class="tw-text-xs">(' + number + '%3)</span>';
    } else if (number%5==0) {
      content='Buzz <span class="tw-text-xs">(' + number + '%5)</span>';
    } else {
      content=number;
    }
    patternBreak+=`<span class=" tw-text-green-700">${content}${comma}</span> `;
  }
  section.innerHTML+=patternBreak;
}

function execChessboard(target,size){
  const section=document.querySelector('#' + target.name);
  let rows='';

  for(let i=0;i<size;i++){
    let cols='',
    even=i%2==0?true:false;

    for(let j=0;j<size;j++){
      let cell=evenOdd(even,j);

      cols+='<span class="tw-p-[1rem]">' + cell + '</span>';
    }

    rows+='<span class="tw-block">' + cols + '</span>';

  }

  section.innerHTML+='<div class="tw-mx-auto tw-w-fit tw-my-[2rem] tw-border-2 tw-p-[1rem]">' + rows + '</div>';

} 

function evenOdd(status,number){
  let pattern='';
  if(status===true){
    pattern=number%2==0?'#':' ';
  } else {
    pattern=number%2==0?' ':'#';
  }
  return pattern;
}

function minimum(form){
  let inputs,
  numbers,
  lowestNumber=form.querySelector('#lowestNumber');

  form.addEventListener('submit',e=>{
    e.preventDefault();
    inputs=Array.from(form.querySelectorAll('input[type="number"]'));
    numbers=inputs.map(input=>{
      return Number(input.value);
    });

    lowestNumber.setAttribute('value',Math.min(...numbers));
  });
}