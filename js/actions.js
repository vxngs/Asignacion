this.registrado=false;

$("#Entrar").click(function(){
	if ($("#Usuario").val() == "vangs" && $("#Contraseña").val() == "admin" ){

		registrado=true;

		if (registrado == true) {
			window.location="./pages/menu.html";
		}	
	}else{
		swal.fire("error");

	}
});

$("#pdf").click(function(){
	window.location = "./pages/pdf.html";
	$(".embed").src = "./pdf/jQuery.pdf";
});

$("#inicio").click(function(){
	window.location="./index.html"
});



window.addEventListener("load",function(){
	$(".container").fadeIn(1000);
});
