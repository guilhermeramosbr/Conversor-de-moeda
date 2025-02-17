

const select1 = document.querySelector('#input1')
const select2 =document.querySelector('#input2')
const moeda1 = document.querySelector('#moeda1')
const moeda2 = document.querySelector('#moeda2')
const dinheiro1 = document.querySelector('#dinheiro1')
const dinheiro2 = document.querySelector('#dinheiro2')
const valorConverter = document.querySelector('#valorConverter')
const imagem1 = document.querySelector('#bandeira1')
const imagem2 = document.querySelector('#bandeira2')


let convercao

function converterValor(){
    
    convercao = Number(valorConverter.value) * Number(select1.value) / (Number(select2.value))
    mudarImagem1()
    mudarImagem2()
    
}


function mudarImagem1(){
    if(select1.value == '1'){
        imagem1.src = 'imagens/imagem_br.png'
        moeda1.textContent = 'Real' 
        dinheiro1.textContent = `R$ ${valorConverter.value}`
    }
    if(select1.value == '5.78'){
        imagem1.src = 'imagens/imagem_eua.png'
        moeda1.textContent = 'Dolar'
        dinheiro1.textContent = `US$ ${valorConverter.value}`
    }
    if(select1.value == '5.97'){
        imagem1.src = 'imagens/imagem_euro.webp'
        moeda1.textContent = 'Euro'
        dinheiro1.textContent = `EUR ${valorConverter.value}`
    }
    if(select1.value == '7.43'){
        imagem1.src = 'imagens/imagem_libras.png'
        moeda1.textContent = 'Libras'
        dinheiro1.textContent = `GBP ${valorConverter.value}`
    }
    if(select1.value == '555688.33'){
        imagem1.src = 'imagens/Imagem_bitcoin.png'
        moeda1.textContent = 'Bitcoins'
        dinheiro1.textContent = `BIC ${valorConverter.value}`
    }

}
function mudarImagem2(){
    if(select2.value == '1'){
        imagem2.src = 'imagens/imagem_br.png'
        moeda2.textContent = 'Real'
        dinheiro2.textContent = `R$ ${convercao.toFixed(2)}`
    }
    if(select2.value == '5.78'){
        imagem2.src = 'imagens/imagem_eua.png'
        moeda2.textContent = 'Dolar'
        dinheiro2.textContent = `US$ ${convercao.toFixed(2)}`
    }
    if(select2.value == '5.97'){
        imagem2.src = 'imagens/imagem_euro.webp'
        moeda2.textContent = 'Euro'
        dinheiro2.textContent = `EUR ${convercao.toFixed(2)}`
    }
    if(select2.value == '7.43'){
        imagem2.src = 'imagens/imagem_libras.png'
        moeda2.textContent = 'Libras'
        dinheiro2.textContent = `GBP ${convercao.toFixed(2)}`
    }
    if(select2.value == '555688.33'){
        imagem2.src = 'imagens/Imagem_bitcoin.png'
        moeda2.textContent = 'Bitcoins'
        dinheiro2.textContent = `BIT ${convercao}`
    }
}
    

