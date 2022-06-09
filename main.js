import './style.css';

const jq = $.noConflict(),
tBase=7;

class Section {
  constructor(name,color){
    this.name = name;
    this.color = color;
    this.nameString=()=>{
      let stringArray=this.name.replace(/([A-Z])/g, ' $1').trim();
      return stringArray.substr(0, 1).toUpperCase() + stringArray.substr(1);
    }
  }
}

let loopingTriangle=new Section('loopingTriangle','red'),
fizzBuzz=new Section('fizzBuzz','blue'),
chessBoard=new Section('chessBoard','green'),
exerciseArray=[loopingTriangle,fizzBuzz,chessBoard],
exerciseSections,
tPattern='';

(function ($) {

  document.querySelector('#app').innerHTML = `<h1 class="tw-font-bold">Eloquent Javascript Exercises - Chapter 2</h1>`;
  
  // Sections setup

  execRenderSections(exerciseArray);

  // Triangle exercise

  execTriangleSymbol(loopingTriangle,tBase,tPattern);


})(jq);

function execRenderSections(array){
  exerciseSections=array.map(item=>{
    return `<section id='${item.name}' class='tw-py-[2rem] tw-border-b last-of-type:tw-border-b-0 first-of-type:tw-mt-[2rem]'>
    <h2>${item.nameString()}</h2>
    </section>`;
  }).join('');

  document.querySelector('#app').innerHTML+=exerciseSections;
}

function execTriangleSymbol(target,base,pattern){
  let patternBreak='';
  for(let i=base;i>0;i--){
    pattern+='#';
    patternBreak+='<span class="tw-block tw-text-green-700">' + pattern + '</span>';
  }
  document.querySelector('#' + target.name).innerHTML+=patternBreak;
}
