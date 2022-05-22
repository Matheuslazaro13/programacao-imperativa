function microondas(comida, tempo) {
    let opcao = "";
    let tempoDefault = "";


    switch (comida) {
        case 1:
            opcao = "Pipoca";
            tempoDefault = 10;
        break;
        case 2:
            opcao = "Macarrão";
            tempoDefault = 8;
        break;
        case 3:
            opcao = "Carne";
            tempoDefault = 15;
        break;
        case 4:
            opcao = "Feijão";
            tempoDefault = 12;
        break;
        case 5:
            opcao = "Brigadeiro";
            tempoDefault = 8;
        break;
        default:
            console.log("Opção inválida: " + comida);
        break;
    }

    if (opcao != "" && tempoDefault != "") {
     
        if (tempo < tempoDefault) {
            console.log(opcao + ": Tempo insuficiente.");
        } 
    
        else if (tempo >= tempoDefault && tempo < tempoDefault * 2 - 1) {
            console.log(opcao + ": Prato pronto, bom apetite!");
        } 
    
        else if (tempo >= tempoDefault * 2 && tempo < tempoDefault * 3 - 1) {
            console.log(opcao + ": O prato queimou.");
        } 
        
        else {
            console.log(opcao + ": Kabuuuum!");
        }
    }
}
