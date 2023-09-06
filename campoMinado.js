let jogarNovamente = prompt('Vamos jogar uma partidinha? (S ou N)')

do{
    let matriz = [[0,0,0],[0,0,0],[0,0,0]]     // geração de matriz
    let max = 2
    let min = 0

    let pontos = 0                             // controle do jogo
    let bombas  = 0

    let palpiteL                               //palpites do jogador
    let palpiteC
    let pontosJogador = 0                       //controle de pontuação do jogador
    let contaPontosFaltantes = 1

    let matrizJogador = [["?", "?", "?"],["?","?","?"],["?","?","?"]]  // matriz com os valores que vão ser exibidos

    // matrizDisplay Não é uma matriz realmente kk, mas sim uma string que simula a matrizJogador para o prompt
    // Mas e se fosse uma matriz enorme ?? pois é, fica a melhoria pra fazer.
    let matrizDisplay = `${matrizJogador[0][0]} ${matrizJogador[0][1]} ${matrizJogador[0][2]} \n${matrizJogador[1][0]} ${matrizJogador[1][1]} ${matrizJogador[1][2]} \n${matrizJogador[2][0]} ${matrizJogador[2][1]} ${matrizJogador[2][2]} \n`


    // GERANDO A MATRIZ COM VALORES ALEATORIOS ENTRE MIN E MAX-1
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            matriz[i][j] = ((Math.floor(Math.random() * (max - min) + min)))
            if(matriz[i][j] == 1){
                bombas += 1
            } else {
                pontos += 1
            }
        }
    }

    // APRESENTANDO O JOGO (MATRIZ/PONTOS/BOMBAS)

    alert(`Neste tabuleiro temos ${bombas} bomba(s).\nA quantidade de pontos necessarios para vencer é de ${pontos} ponto(s).\n Boa Sorte!`)


    // COMPUTANDO PALPITES E ALTERANDO A MATRIZ VISTA PELO JOGADOR
    for(i=0; i<pontos; i++){
        palpiteL = Number(prompt(`${matrizDisplay} \nDigite o index para linha`))    
        palpiteC = Number(prompt(`${matrizDisplay} \nDigite o index para coluna`))
    
        if(matriz[palpiteL][palpiteC] == 0){    
            alert(`Ufa, não tem bomba.\nFaltam ${(pontos-contaPontosFaltantes)} pontos para vencer`)
            pontosJogador += 1                    
            contaPontosFaltantes += 1
            matrizJogador[palpiteL][palpiteC] = 0 //altera o valor ? do elemento na matriz vista pelo jogador
           
            if(pontosJogador == pontos){            
                alert('Você Venceu!!!')
                break
            }
            
        } else {                                    
            alert('Bomba! Você Perdeu!')
            break
        }
        matrizDisplay = `${matrizJogador[0][0]} ${matrizJogador[0][1]} ${matrizJogador[0][2]} \n${matrizJogador[1][0]} ${matrizJogador[1][1]} ${matrizJogador[1][2]} \n${matrizJogador[2][0]} ${matrizJogador[2][1]} ${matrizJogador[2][2]} \n` 
        //atualiza a matriz pro usuario
    }

jogarNovamente = prompt('Vamos jogar uma partidinha? (S ou N)')   //Opção para quebrar a condição do loop

} while(jogarNovamente == 's' || jogarNovamente == 'S')

alert('Isso ai, você tem uma vida la fora ! :*')  


