function enableFields(form){ 
	

	var atividade = getValue("WKNumState");

	form.setEnabled("cpDataAbertura", 		false);
	form.setEnabled("cpNUmeroSolicitacao", 		false);
	form.setEnabled("cpSolicitante", 		false);
	
	if ( form.getFormMode()  == "VIEW") {
		setEnabled(form, false);
	}

	if (atividade == "0" ||  atividade == "1"  ) { //Criacao do Formulario

			form.setEnabled("txtObservacao", true);
			form.setEnabled("txtNomeColaborador", true);
			form.setEnabled("cpTipoAviso", true); 
			
	}
	
	if (atividade != "0" &&  atividade != "1"  ) { //Criacao do Formulario

		form.setEnabled("txtObservacao", false);
		form.setEnabled("txtNomeColaborador", false);
		form.setEnabled("cpTipoAviso", false); 
	}
	
	if ((atividade == "4")) {
		form.setEnabled("txtAprovacaoJur",true);
		form.setEnabled("txtParecer",true);
		 
			
	}
	if ((atividade != "4")) {
		form.setEnabled("txtAprovacaoJur",false);
		form.setEnabled("txtParecer",false);
				
	}
	
	if ((atividade == "8")) {
		form.setEnabled("txtAprovDiretor",true);
		form.setEnabled("txtParecerDiretor",true);
		
		 
	}
	if ((atividade != "8")) {
		form.setEnabled("txtAprovDiretor",false);
		form.setEnabled("txtParecerDiretor",false);
				
	}
	
	if ((atividade == "68")) {
		form.setEnabled("txtAprovGestorContrato",true);
		form.setEnabled("txtParecerGestorContrato",true);
		 
		 
	}
	if ((atividade != "68")) {
		form.setEnabled("txtAprovGestorContrato",false);
		form.setEnabled("txtParecerGestorContrato",false);
				
	}
	  
	if ((atividade == "10")) {
		form.setEnabled("txtAprovGestor",true);
		form.setEnabled("txtParecerGestor",true);
		 
			
	}
	if ((atividade != "10")) {
		form.setEnabled("txtAprovGestor",false);
		form.setEnabled("txtParecerGestor",false);
				
	}
	
	if ((atividade == "30")) {
		form.setEnabled("txtAprovSesmt",true);
		form.setEnabled("txtParecerSesmt",true);
		 
			
	}
	if ((atividade != "30")) {
		form.setEnabled("txtAprovSesmt",false);
		form.setEnabled("txtParecerSesmt",false);
				
	}
	
	
	if ((atividade == "45")) {
		form.setEnabled("txtAprovDoc",true);
		form.setEnabled("txtParecerDoc",true);
		 
	}
	if ((atividade != "45")) {
		form.setEnabled("txtAprovDoc",false);
		form.setEnabled("txtParecerDoc",false);
						
	}
	
	if ((atividade == "86")) {
		form.setEnabled("txtContratacao",true);
		form.setEnabled("txtProfissional",true);
		form.setEnabled("txtAssiduidade",true);
		form.setEnabled("txtNormas",true);
		form.setEnabled("txtFuncionario",true);
		form.setEnabled("txtQualidade",true);
		form.setEnabled("txtFuncionario",true);
		form.setEnabled("txtObs",true);
		
		 
	}
	if ((atividade != "86")) {
		form.setEnabled("txtContratacao",false);
		form.setEnabled("txtProfissional",false);
		form.setEnabled("txtAssiduidade",false);
		form.setEnabled("txtNormas",false);
		form.setEnabled("txtFuncionario",false);
		form.setEnabled("txtQualidade",false);
		form.setEnabled("txtObs",false);
						
	}
	
	       
	
	 
	
	
}



