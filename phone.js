class Phone {
  constructor(model, networkProvider){
    this.model = model;
    this.networkProvider = networkProvider;
  }

  call(){
    console.log("Dail-up a number");
  }
  browse(){
    console.log("connect to the internet");
  }
  playMusic(){
    console.log("Play Songs on the memory");
  }
  chat(){
    console.log("send a message")
  }
}

class Blackberry extends Phone {
  ping(){
    super.chat();
    console.log("via Blackberry Messanger.");
  }
}

var bb = new Blackberry("Z10","Etisalat");
bb.ping();
