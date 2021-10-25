function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);
    var res = document.getElementById('respuesta');
    var res2 = document.getElementById('respuesta2');
  
    var imc = (pesoEnKilos / (alturaEnMetros * alturaEnMetros)).toFixed(1);
  
    var nivelpeso;
    var descripcion;
    if (imc<18.5) {
      nivelpeso = 'está en la categoria Bajo Peso para adultos de su misma estatura.';
      descripcion = 'La delgadez puede deberse a diversos factores, tales como genéticos y dietéticos. Independiente de su causa, es importante para tu bienestar mantener un peso saludable.';
      
    } else if (imc>=18.5 && imc<=24.9) {
      nivelpeso = 'está en la categoría Normal para adultos de su misma estatura.';
      descripcion= 'El equilibrio del organismo -su homeostasis- se obtiene con mayor facilidad si el peso de una persona es normal. Una dieta balanceada y ejercicio ayudan a mantenerse en esta categoría.';
      
    } else if (imc>=25.0 && imc<=29.9) {
      nivelpeso = 'está en la categoría de Sobrepeso para adultos de su misma estatura.';
      descripcion= 'Una mala alimentación y hábitos sedentarios pueden contribuir a acumular grasa en tu cuerpo, lo que puede llevar a problemas médicos en el futuro.';
      
    } else {
      nivelpeso = 'está en la categoría de Obeso para adultos de su misma estatura.';
      descripcion = 'Cuidado, la obesidad genera complicaciones mayores en el organismo y acorta la vida. Es esencial abordar este estado con una dieta balanceada, ejercicio y, en determinadas ocasiones, con cirugía.';
      
    }

    var respuesta = 'Hola ' + nombre + ', su IMC es ' + imc + ', lo que indica que su peso ' + nivelpeso;
    var respuesta2= descripcion;

    res2.innerText=respuesta2;
    //alert(respuesta);
    res.innerText=respuesta;
  }

  function cardres(){
    var res=document.getElementById('cardres');
    res.innerHTML = '<div class="card mx-4 h-16 bg-white p-5">    <p class="mb-5 text-xl" id="respuesta"></p>    <p class="text-xl" id="respuesta2"></p></div>';
    calcularIMC();
  }