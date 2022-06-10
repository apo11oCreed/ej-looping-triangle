import './style.css';

const jq = $.noConflict(),
title='Eloquent Javascript Exercises - Chapter 2',
tBase=7,
cBase=100,
descLoopingTriangle='<p class="tw-mb-[1rem]">Write a loop that makes seven calls to console.log to output the following triangle</p>',
descFizzBuzz='<p class="tw-mb-[1rem]">Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.</p>' +
'<p class="tw-mb-[1rem]">When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).</p>',
descChessboard='<p class="tw-mb-[1rem]">Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.</p>' +
'<p class="tw-mb-[1rem]">When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.</p>';;

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
exerciseArray=[loopingTriangle,fizzBuzz,chessBoard],
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
