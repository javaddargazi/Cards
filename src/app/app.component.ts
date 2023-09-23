import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //---------------------------------
 posts = [{
  title : 'Mouse',
  imageUrl :'assets/images/Mouse.jpg',
  userName : 'Mouse',
  content : 'i saw neat Mouse'
 },
 {
  title : 'Samoor',
  imageUrl :'assets/images/Samoor.jpg',
  userName : 'Samoor',
  content : 'i saw neat Samoor'
 },
 {
  title : 'tooti',
  imageUrl :'assets/images/tooti.jpg',
  userName : 'tooti',
  content : 'i saw neat tooti'
 },
]
//-------------------------------------

getPosts(){
  return this.posts;
}

//--------------------------------------
myInfo = [
  {
    name : 'javad',
    family : 'dargazi',
    age : 37,
    edu : 'arshad'
  },
  {
    name : 'hassan',
    family : 'abbasi',
    age : 40,
    edu : 'lisans'
  },
  {
    name : 'ali',
    family : 'yavari',
    age : 32,
    edu : 'doctora'
  }
]
//--------------------------------------



}


