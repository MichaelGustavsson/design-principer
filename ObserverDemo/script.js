////////////////////////////////////////////
// THE OBSERVER PATTERN
///////////////////////////////////////////

class Subject {
  constructor(){
    this.observers = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }

  unsubscribe(observer){
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data){
    this.observers.forEach((observer) => {
      observer.textContent = data;
    })
  }
}

const input = document.querySelector('#myInput');

//Wants to be notified
const myDiv = document.querySelector('.myDiv');
const myData = document.querySelector('.myData');
const mySpan = document.querySelector('.mySpan');


const myObserver = new Subject();
myObserver.subscribe(myData);
myObserver.subscribe(myDiv);
myObserver.subscribe(mySpan);

input.addEventListener('keyup', (e) => {
  myObserver.notify(e.target.value);
});
