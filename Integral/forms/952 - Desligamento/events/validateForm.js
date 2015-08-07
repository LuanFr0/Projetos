function validateForm(form){

	var atividade = parseInt(getValue("WKNumState"));
	var msg = "";
	var acaoUsuario = getValue("WKCompletTask");
	var colaboradores = form.getValue("cpColaboradores").split(",");
	var ErroColaborador = "";
	var colab = "";
	var Colaborador = colaboradores;

	
	if ((atividade==1 || atividade==0) && (acaoUsuario == "true")) {
		
		if ((form.getValue("txtNomeColaborador")).trim() =="")
				msg += "Colaborador." + "<br>";	
		if ((form.getValue("txtFuncao")).trim() =="")
			msg += "Fun&ccedil;&atilde;o." + "<br>";
		if ((form.getValue("txtCodsituacao")).trim() =="")
			msg += "Situa&ccedil;&atilde;o." + "<br>";
		if ((form.getValue("txtRegistro")).trim() =="")
			msg += "Registro do colaborador." + "<br>";
		if ((form.getValue("txtDpto")).trim() =="")
			msg += "Departamento." + "<br>";
		if ((form.getValue("dtDemissao")).trim() =="")
			msg += "Data de Demiss&atilde;o." + "<br>";
		if ((form.getValue("dtAdmissao")).trim() =="")
			msg += "Data de Admiss&atilde;o." + "<br>";
		if ((form.getValue("txtEstavel")).trim() =="")
			msg += "Estabilidade." + "<br>";
		if ((form.getValue("txtTipoDeslig")).trim() =="")
			msg += "Tipo desligamento." + "<br>";
		if ((form.getValue("txtMotDeslig")).trim() =="")
			msg += "Motivo desligamento." + "<br>";
		if ((form.getValue("cpTipoAviso")).trim() =="")
			msg += "Tipo de Aviso." + "<br>";
	
		if (form.getValue("txtAprovador").trim() =="")
			msg += "N&atilde;o existe gestor cadastrado para o departamento" +
					" , solicite que seja realizada a parametriza&ccedil;&atilde;o das hierarquias para este departamento." + "<br>";
	}
		
	if (atividade==4 && (acaoUsuario == "true")) {
		if (form.getValue("txtAprovacaoJur") =="0")
			msg += "Parecer do Jur&iacute;dico." + "<br>";
		  
		if (form.getValue("txtAprovacaoJur") =="2" && form.getValue("txtParecer").trim() =="")
			msg += "Parecer de Reprova&ccedil;&atilde;o." + "<br>";	
	}    
	if (atividade==8 && (acaoUsuario == "true")) {
		if (form.getValue("txtAprovDiretor") =="0")
			msg += "Aprova&ccedil;&atilde;o." + "<br>";
		  
		if (form.getValue("txtAprovDiretor") =="2" && form.getValue("txtParecerDiretor").trim() =="")
			msg += "Parecer de Reprova&ccedil;&atilde;o." + "<br>";	
	}  

	if (atividade==10 && (acaoUsuario == "true")) {
		if (form.getValue("txtAprovGestor") =="0")
			msg += "Aprova&ccedil;&atilde;o." + "<br>";
		  
		if (form.getValue("txtAprovGestor") =="2" && form.getValue("txtParecerGestor").trim() =="")
			msg += "Parecer de Reprova&ccedil;&atilde;o." + "<br>";	
	} 
	
	if (atividade==30 && (acaoUsuario == "true")) {
		if (form.getValue("txtAprovSesmt") =="0")
			msg += "ASO aprovado." + "<br>";
		  
		if (form.getValue("txtAprovSesmt") =="2" && form.getValue("txtParecerSesmt").trim() =="")
			msg += "Parecer de Reprova&ccedil;&atilde;o." + "<br>";	
	}
	
	if (atividade==45 && (acaoUsuario == "true")) {
		if (form.getValue("txtAprovDoc") =="0")
			msg += "Documenta&ccedil;&atilde;o Ok?." + "<br>";
		  
		if (form.getValue("txtAprovDoc") =="2" && form.getValue("txtParecerDoc").trim() =="")
			msg += "Parecer de Reprova&ccedil;&atilde;o." + "<br>";	
	}
	if (atividade==68 && (acaoUsuario == "true")) {
		if (form.getValue("txtAprovGestorContrato") =="0")
			msg += "Aprova&ccedil;&aatilde;o." + "<br>";
		  
		if (form.getValue("txtAprovGestorContrato") == "2" && form.getValue("txtParecerGestorContrato").trim() =="")
			msg += "Parecer de Reprova&ccedil;&atilde;o." + "<br>";	
	}
	if (atividade==86 && (acaoUsuario == "true")) {
		if (form.getValue("txtContratacao").trim() =="0")
			msg += "Apto para recontrata&ccedil;&atilde;o." + "<br>";
		if (form.getValue("txtProfissional").trim() =="0")
			msg += "Avalia&ccedil;&atilde;o Profissional." + "<br>";
		if (form.getValue("txtAssiduidade").trim() =="0")
			msg += "Avalia&ccedil;&atilde;o de Assiduidade." + "<br>";
		if (form.getValue("txtNormas").trim() =="0")
			msg += "Normas de Seguran&ccedil;a do trabalho." + "<br>";
		if (form.getValue("txtFuncionario").trim() =="0")
			msg += "Avalia&ccedil;&atilde;o Pessoal do funcion&aacute;rio." + "<br>";
		if (form.getValue("txtQualidade").trim() =="0")
			msg += "Atende as normas de qualidade." + "<br>";
		if (form.getValue("txtObs").trim() =="")
			msg += "Observa&ccedil;es." + "<br>";
		
	}
	
	if(atividade == 38){
		if(form.getValue("cpColaboradores") == ""){
			msg += "Preencher Comanda de Rescis&atilde;o <br />";
		}else{
			for(colab in colaboradores){
				
				Colaborador = colaboradores[colab];
				
				var Codigo = form.getValue("txtCodCustoReduz___"+Colaborador);
				var provento= form.getValue("txtRateio___"+Colaborador);
				var diasHoras = form.getValue("txtDiasHoras___"+Colaborador);
				var valor = form.getValue("txtValor___"+Colaborador);
			
				if(Codigo == "")
					ErroColaborador += "Codigo"+ "<br/>";
				
				if(provento == "")
					ErroColaborador += "Provento/Desconto"+"<br />";
				
				if(diasHoras == "")
					ErroColaborador += "Dias/Horas"+"<br />";
				
				if(valor == "")
					ErroColaborador += "Valor"+"<br />";
				
					break;
			}
			msg += ErroColaborador;
		}
	}
	
	if (msg != ""){
		
		throw "<br> ERRO! <br>Campo(s) n&atilde;o informado(s): <br>" + msg;
	}
}