calcular = $("#cal");


calcular.on("click", function(){

    event.preventDefault ();

  valor = $("#txt1").val();
  porcentagem = $("#txt2").val();
  repasse = (valor * porcentagem)/100;
  restante = valor - repasse;
  exibirValores();

  
});


function exibirValores(){
    exibirRepasse = $("#rep")
    exibirRestante = $("#meu")
    exibirRepasse.val(`Repasse R$ ${repasse}`);
    exibirRestante.val(`Fique com R$ ${restante}`);

}
