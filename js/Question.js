class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here....");
   //Create a input box to enter the number
   this.input = createInput("").attribute("placeholder","Enter Your Answer Here....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.title1 = createElement('h3')
    this.title3 = createElement('h3')
    this.title2 = createElement('h3')
    this.title4 = createElement('h3')
    this.title5 = createElement('h3')


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    


    //Create html() and position() for each question, input and answers.
 this.input.position(350, 230);
 this.title1.html("Question:- What starts and ends with letter 'E;, but has only one letter? ")
 this.title1.position(150,50);
 this.title2.html("1: Everyone")
 this.title2.position(150,80);
 this.title3.html("2: Envelope")
 this.title3.position(150,100);
 this.title4.html("3: Estimate")
 this.title4.position(150,120);
 this.title5.html("5: Example")
 this.title5.position(150,140);




    this.input1.position(150, 230);
    this.button.position(290, 300);


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted")
      this.message.position(150,300);
    })


  }
}
