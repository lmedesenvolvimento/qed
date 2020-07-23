// validação de campos de texto
		jQuery.fn.validarArray = function(resposta) { 
			if (resposta.indexOf('#'+$(this).val()+'#') >=0){
				$(this).removeClass("incorreto");
				$(this).addClass("correto");
				return true;
			} else {
				$(this).removeClass("correto");
				$(this).addClass("incorreto");
				return false;
			};
		};
		
		
		
	