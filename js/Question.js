class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Digite Seu Nome Aqui....");
    this.input2 = createInput("Digite o Nº da Opção Correta...");
    this.button = createButton('Enviar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("Meu Questionário");
    this.title.position(350, 0);

    this.question.html("Pergunta:- Quem é mais viado? " );

    this.question.position(150, 80);
    this.option1.html("1: Cury, O Viadão Mais Bonito" );
    this.option1.position(150, 100);
    this.option2.html("2: Gabriel Cu" );
    this.option2.position(150, 120);
    this.option3.html("3: Gabriel Cury, O Cu Mais Largo" );
    this.option3.position(150, 140);
    this.option4.html("4: Cu, Parente Distante Do Rapper RY" );
    this.option4.position(150, 160);
    // this.option5.html("(Todas as respostas são corretas visto que todas as variantes do Cury são igualmente viadas)")
    // this.option5.position(150, 180)

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      
      this.message.html("Sussy baka");
      this.message.position(350, 350);


    });
  }
}
