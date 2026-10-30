/* Armazenar todas as constantes vindo do html */
const campoSenha = document.getElementById("senha");
const textoMinuscula = document.getElementById("minuscula")
const textoMaiuscula = document.getElementById("maiuscula")
const textoCaracteres = document.getElementById("caracteres")
const textoNumeros = document.getElementById("numeros")
const textoEspeciais = document.getElementById("especiais")
const linkBotao = document.getElementById("link");
/* Iniciar e guardar depois do input */
campoSenha.addEventListener('input', ()=>{
    const textoSenha = campoSenha.value;
    const minuscula = /[a-z]/.test(textoSenha);
    const maiuscula = /[A-Z]/.test(textoSenha);
    const caracteres = textoSenha.length > 8;
    const numeros = /\d/.test(textoSenha);
    const especiais = /[!@#$%¨&*]/.test (textoSenha);

    /* Fazer dinamico aq */
    if(minuscula){
        textoMinuscula.textContent = "✅ Letra minúscula"
    }
    else {
    textoMinuscula.textContent = "❌ Letra minúscula" 
    }

        if(maiuscula){
        textoMaiuscula.textContent = "✅ Letra maiúscula"
    }
    else {
    textoMaiuscula.textContent = "❌ Letra maiúscula" 
    }

        if(caracteres){
        textoCaracteres.textContent = "✅ Mais que 8 caracteres"
    }
    else {
    textoCaracteres.textContent = "❌ Mais que 8 caracteres" 
    }

        if(numeros){
        textoNumeros.textContent = "✅ Números"
    }
    else {
    textoNumeros.textContent = "❌ Números" 
    }

        if(especiais){
        textoEspeciais.textContent = "✅ Caracteres especiais"
    }
    else {
    textoEspeciais.textContent = "❌ Caracteres especiais" 
    }

    if (minuscula && maiuscula && caracteres && numeros && especiais){
        linkBotao.style.display = "block"
    }
    else {
        linkBotao.style.display = "none"
    }
})
 /* Só alerta de sucesso dps que clicar no enviar */
linkBotao.addEventListener('click', () =>{
    alert("Você conseguiu! Parabéns ")
})