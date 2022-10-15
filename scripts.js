//Professor, intrepetei o exercicios assim, espero que esteja certo :).





var botao = document.querySelector("#botao");

botao.addEventListener('click', () =>{
    inicio();
} )

function inicio (){
    var escolha = parseInt(prompt("Escolha a opção: \n 1.)Vida do pet \n 2.) Quanta fome a gente tem? \n 3.) Circulo \n 4.) Temperaturas "))
    switch (escolha) {
        case 1:
            animal();
            break;
        
        case 2:
            fome();
            break;

        case 3:
            circulo();
            break;

        case 4:
            temperatura();
            break;

        default:
            erro();
    }
}

function pet (relacao, especie, name , idade,){
    idade = parseInt(prompt("digite a idade do pet"));
    name = prompt("qual o nome do pet?");
    alert(`${name} tem ${idade*relacao} anos em anos de verdade! Um(a) ${especie} tem uma relação de ${relacao} anos de ${especie} para cada 1 ano humano.`)

}

function animal() {
    let escolha = parseInt(prompt("Qual animal quer verificar? \n 1 - Peixe palhaço \n 2 - Cachorros \n 3 - Gatos"))
    if (escolha == 1) {
        pet(7.5, "peixe-palhaco")
        inicio();
    } else if (escolha == 2) {
        pet(5, "cocker")
        inicio();
    } else if (escolha == 3){
        pet(3.75, "gato") 
        inicio();
    }
    else {
        alert("Opss, opção invalida :<")
        inicio();
    }  
}

function fome (idade, lanches){
    for(let i = 0; i < 3; i++){
    idade = parseInt(prompt("digite a idade que quer calcular"));
    lanches = prompt("Quantos lanches consome por dia?");
    alert(`Você precisará de ${lanches*(idade*365)} lanches para durar até a idade ${idade} anos.`)}
    inicio();
}

function calcularCircunferencia(raio){
    raio = parseInt(prompt("qual o raio do circulo"))
    alert(`A circunferência é ${2*3.14*raio}`)
}

function calcularArea(raio){
    raio = parseInt(prompt("qual o raio do circulo"))
    alert(`A área é ${3.14*(raio**2)}`)
}

function circulo(){
    let escolha = parseInt(prompt("escolha as segintes opções: \n 1.) para circunferência \n ou \n 2.) para área"));
    if (escolha == 1) {
        for(let i = 0; i < 3; i++){
        calcularCircunferencia();}
        inicio();
    } else if(escolha == 2) {
        for(let i = 0; i < 3; i++){
        calcularArea();}
        inicio();
    }
    else{
        alert("erro! opção invalida")
        circulo();
    }
}

function celsius(temperatura){
    temperatura = parseInt(prompt("digite a temperatura em celcius"))
    alert(`${temperatura} º em celsius equivalem À ${temperatura * 1.8 + 32} em Fahrenheit`)
}

function Fahrenheit(temperatura){
    temperatura = parseInt(prompt("digite a temperatura em Fahrenheit"))
    alert(`${temperatura} º em Fahrenheit equivalem À ${(temperatura - 32) * (5/9)} em celsius`)
}

function temperatura(){
    let escolha = parseInt(prompt("escolha as segintes opções: \n 1.) c ———> F  \n ou \n 2.) f ———> c "));
    if (escolha == 1) {
        celsius();
        inicio();
    } else if(escolha == 2) {
        Fahrenheit();
        inicio();
    }
    else{
        alert("erro! opção invalida")
        circulo();
    }
}

function erro(){
    alert("Opss! opção invalida :<")
    inicio();
}

