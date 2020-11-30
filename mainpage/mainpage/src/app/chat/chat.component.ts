import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import * as $ from 'jquery';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  togglePlayersS;
  toggleranklistS;
  togglePlayerCount=0;
  toggleRanklistCount=0;
  message:string;
  socket = io.connect('http://localhost:3000');


  constructor() { }
  togglePlayersF(){
    if(this.togglePlayerCount==0){
      this.togglePlayersS={'width':'150px'};
      this.togglePlayerCount=1;
    }
    else{
      this.togglePlayersS={'width':'0px'};
      this.togglePlayerCount=0;
    }
  }
  rankListToggleF(){
    if(this.toggleRanklistCount==0){
      this.toggleranklistS={'width':'150px'};
      this.toggleRanklistCount=1;
    }
    else{
      this.toggleranklistS={'width':'0px'};  
      this.toggleRanklistCount=0;
    }
  }
  ngOnInit(): void {
    var uname=prompt("What's your name?");
    this.setupSocketConnection();
      // call the server-side function 'adduser' and send one parameter (value of prompt)
      this.socket.emit('adduser',uname ,'484848');
    // listener, whenever the server emits 'updatechat', this updates the chat body
    this.socket.on('updatechat', function (username, data) {
      if(uname==username){
      //  $('.userMsg').append('<b>'+username + ':</b> ' + data + '<br>');
        const element = document.createElement('li');
        element.innerHTML = username+": "+data;
        element.style.background = 'white';
        // element.style.float = 'left';
        element.style.padding =  '5px 10px';
        element.style.margin = '10px';
        element.style.borderRadius = '10px';
        element.style.listStyleType = 'none';
        element.style.textAlign = 'right';
        document.getElementById('convo').appendChild(element);
        this.message = ''; 
      }
      else{
        // $('.playersMsg').append('<b>'+username + ':</b> ' + data + '<br>');
          const element = document.createElement('li');
          element.innerHTML = username+": "+data;
          // element.style.float = 'right';
          element.style.background = 'white';
          element.style.padding =  '7px 10px';
          element.style.borderRadius = '10px';
          element.style.listStyleType = 'none';
          // element.style.listStyleType = 'absolute';
          // element.style.right = '1px';
          element.style.margin = '10px';
          document.getElementById('convo').appendChild(element);
      }
    });
  }

    // listener, whenever the server emits 'updaterooms', this updates the room the client is in
    setupSocketConnection(){
      this.socket.on('updaterooms', function(rooms, current_room) {
        $('#rooms').empty();
        $.each(rooms, function(key, value) {
          if(value == current_room){
            $('#rooms').append('<div>' + value + '</div>');
          }
          else {
            $('#rooms').append('<div><a href="#" onclick="switchRoom(\''+value+'\')">' + value + '</a></div>');
          }
        });
      });
    }

      // when the client clicks SEND
      datasendfun(){
        var message = $('#data').val();
        $('#data').val('');
        // tell server to execute 'sendchat' and send along one parameter
        this.socket.emit('sendchat', message);
      };

}
