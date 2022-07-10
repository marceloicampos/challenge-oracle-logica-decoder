var btnCripto = document.querySelector('#btn-cripto')
var btnDesCripto = document.querySelector('#btn-descripto')
var btnCopy = document.querySelector('#btn-copy')
var btnClear = document.querySelector('#btn-clear')
var inputText = document.querySelector('#input-text')
var outputText = document.querySelector('#output-text')

var codec = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

var decodec = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u'
}

btnCripto.addEventListener('click', function cripto(event) {
    event.preventDefault()

    encriptado = inputText.value.replace(/a|e|i|o|u/gi, function (i) {
        let itemListaCodec = codec[i].replace(/(?:^|\s)\S/g, function (elemento) {
            return elemento.toLowerCase()
        })
        return itemListaCodec
    })

    outputText.value = encriptado

    var form = document.querySelector('#form-enter-text')
    form.reset()
})

btnDesCripto.addEventListener('click', function descripto(event) {
    event.preventDefault()

    desencriptado = inputText.value.replace(/ai|enter|imes|ober|ufat/gi, function (i) {
        let itemListaDecodec = decodec[i].replace(/(?:^|\s)\S/g, function (elemento) {
            return elemento.toLowerCase()
        })
        return itemListaDecodec
    })

    outputText.value = desencriptado

    var form = document.querySelector('#form-enter-text')
    form.reset()
})

btnCopy.addEventListener('click', function copy() {
    var copyOutText = document.querySelector('#output-text')
    copyOutText.select()
    document.execCommand('copy')
    alert('Mensagem Copiada')
    outputText.value = ''
})

btnClear.addEventListener('click', function apagar() {
    outputText.value = ''
})

/*

Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   

Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação

**Requisitos:**
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original. 

Por exemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`

- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
- O resultado deve ser exibido na tela.

**Extras:**
- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do `ctrl+C` ou da opção "copiar" do menu dos aplicativos.

** Mensagem da Alura**
"pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"
*/
