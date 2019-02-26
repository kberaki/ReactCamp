import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App/>, document.getElementById('root'));
class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  speak(){
    console.log('I am ', this.name, 'and I am', this.age, 'years old');
  }
}
const animal1 = new Animal('Simba', 3);
animal1.speak();
class Lion extends Animal{
constructor(name, age, furColor, speed){
  super(name,age);
  this.furColor = furColor;
  this.speed = speed;
}
roar(){
  console.log('My fur is', this.furColor, 'I can run', this.speed, 'miles per hour');
}
}
const lion1 = new Lion('Jigna', 23, 'golden', 15);
lion1.speak();
lion1.roar();
console.log(lion1)