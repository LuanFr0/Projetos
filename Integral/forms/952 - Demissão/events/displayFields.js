function displayFields(form, customHTML) {
	
	form.setShowDisabledFields(true);
	form.setHidePrintLink(true);
	
	/* Funcoes anexadas ao formulario no momento da redenrizacao da ficha*/
	customHTML.append("<script>function getWKNumState(){ return " + getValue("WKNumState") + "; }</script>");
	customHTML.append("<script>function getTodayDate(){ return " + new java.util.Date().getTime() + "; }</script>");
	customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
	customHTML.append("<script>function getUser(){ return '" + getValue("WKUser") + "'; }</script>");
	customHTML.append("<script>function getCompany(){ return " + getValue("WKCompany") + "; }</script>");
	
	var atividade = parseInt(getValue("WKNumState"));
	var solicitacao = getValue("WKNumProces");
	// Obtendo o usuario - data e numero da solicitacao
	if ((form.getFormMode() != "VIEW") && (atividade == 0 || atividade == 1)) {
		filter = new java.util.HashMap();
		filter.put("colleaguePK.colleagueId", getValue("WKUser"));
		var colaborador = getDatasetValues('colleague', filter);
		form.setValue('txtNomeSol', colaborador.get(0).get("colleagueName"));
		form.setValue('cpMatriculaSolicitante', getValue("WKUser"));
		form.setValue('cpLoginFluig', colaborador.get(0).get("login"));
		form.setValue('txtEmailSol', colaborador.get(0).get("mail"));
		
		var today = new Date();
		var todayd = today.getDate();
		var todaym = today.getMonth() + 1;
		var todayy = today.getFullYear();
		var DataAtual = todayd + "/" + todaym + "/" + todayy;
		form.setValue('txtDtAbertura', DataAtual);
	}
	
	if(atividade==4){
		filter = new java.util.HashMap();
		filter.put("colleaguePK.colleagueId", getValue("WKUser"));
		var colaborador = getDatasetValues('colleague', filter);
		form.setValue('txtAprovadoJur', colaborador.get(0).get("colleagueName"));
	} 
	
	if(atividade==8){
		filter = new java.util.HashMap();
		filter.put("colleaguePK.colleagueId", getValue("WKUser"));
		var colaborador = getDatasetValues('colleague', filter);
		form.setValue('txtDiretor', colaborador.get(0).get("colleagueName"));
	}
	     
	if(atividade==10){
		filter = new java.util.HashMap();
		filter.put("colleaguePK.colleagueId", getValue("WKUser"));
		var colaborador = getDatasetValues('colleague', filter);
		form.setValue('txtGestorContrato', colaborador.get(0).get("colleagueName"));
	}
	
	if(atividade==68){
		filter = new java.util.HashMap();
		filter.put("colleaguePK.colleagueId", getValue("WKUser"));
		var colaborador = getDatasetValues('colleague', filter);
		form.setValue('txtGestor', colaborador.get(0).get("colleagueName"));
	}  
	
	if(atividade==30){
		filter = new java.util.HashMap();
		filter.put("colleaguePK.colleagueId", getValue("WKUser"));
		var colaborador = getDatasetValues('colleague', filter);
		form.setValue('txtParecerAnalista', colaborador.get(0).get("colleagueName"));
	}
	if(atividade==45){
		filter = new java.util.HashMap();
		filter.put("colleaguePK.colleagueId", getValue("WKUser"));
		var colaborador = getDatasetValues('colleague', filter);
		form.setValue('txtAprovadorDocum', colaborador.get(0).get("colleagueName"));
	}
	
	


} 