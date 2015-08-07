/////////////////////////////////////////////////////NOVO ZOOM ////////////////////////////////////////////////////////////

function Zoom(){
	
	var Element =  this;
	
	this.Id = "Temp";
	this.Titulo = "";
	this.DataSet = "colleague";
	this.FieldsName = new Array();
	this.Colunas = new Array(
		{
			"sTitle" : "CHAPA",
			"sColumn" : "mail",
			"sWidth" : "15%"
		}, {
			"sTitle" : "NOME",
			"sColumn" : "colleagueName",
			"sWidth" : "35%"
		}, {
			"sTitle" : "FUNCAO",
			"sColumn" : "login",
			"sWidth" : "35%"
		}, {
			"sTitle" : "CODSECAO",
			"sColumn" : "active",
			"sWidth" : "15%"
		}
	);
	
	//utilizado para nÃ?????Ã????Ã???Ã??Ã?Â£o passar o mesmo retorno do dataset//
	this.Renderizado = false;
	
	this.DialogWidth = 660;
	
	this.Linhas = new Array();
	
	this.BuscarDados = function(){
		
		this.Renderizar();
		
		var fields = new Array();
		for(var FieldKey in Element.FieldsName){
			fields.push(document.getElementById(Element.FieldsName[FieldKey]).value);
		}

		try {
			
			this.Linhas = new Array();
			
			/* Ponto de AlteraÃ?????Ã????Ã???Ã??Ã?Â§Ã?????Ã????Ã???Ã??Ã?Â£o - incluir dataset desejado */
			var tabela = DatasetFactory.getDataset(Element.DataSet, fields, null, null);

			if (tabela == null) {
				throw "N&atilde;o Foram encontrados registros.";
			}

			else if (tabela.values.length == "0") {
				throw "N&atilde;o Foram encontrados registros.";
			}

			/* Ponto de AlteraÃ?????Ã????Ã???Ã??Ã?Â§Ã?????Ã????Ã???Ã??Ã?Â£o - incluir retorno do dataset */
			for ( var i = 0; i < tabela.values.length; i++) {
				
				var Temp = []; 
				for(var FieldKey in Element.Colunas){
					Temp.push(tabela.values[i][Element.Colunas[FieldKey]["sColumn"]].toString());
				}
				this.Linhas.push(Temp);
			}
			
			this.RenderizarDataTable();
			
			
		}
		catch (erro) {
			window.alert(erro);
		}

	}
	
	this.Renderizar = function(){
		
		var HtmlDialog = '<div id="dialog_'+Element.Id+'" title="'+Element.Titulo+'"><fieldset id="fieldZoom_'+Element.Id+'"><div id="dataset_'+Element.Id+'"></div></fieldset></div>';
		$("body").append(HtmlDialog);
		 		
		$( "#dialog_"+Element.Id ).dialog({autoResize:true,  autoOpen: false, resizable: true, width:Element.DialogWidth, modal: false, position: "top" });
	  	  
		$('#dataset_' + Element.Id).html('<table cellpadding="0" cellspacing="0" border="0" class="display" id="tb_'+Element.Id+'"><tr><td>Carregando...</td></tr></table>');
		
	}
	
	this.RenderizarDataTable = function(){
		$('#tb_'+ Element.Id).dataTable(
		{
			"fnRowCallback" : function(nRow, aData, iDisplayIndex,iDisplayIndexFull) {
				$(nRow).click(function() {
					Element.Retorno(aData);
					$( "#dialog_"+Element.Id ).dialog("close");
				});
				return nRow;
			},
			"aaData" : this.Linhas,
			"aoColumns" : this.Colunas,
			"bJQueryUI" : true,
			"sPaginationType" : "full_numbers",
			"oLanguage" : Element.getMessages()
		});
		
		Element.Renderizado = true;
	}
	
	this.Abrir = function(){
		if(!this.Renderizado)
			this.BuscarDados();
		 
		if(this.Linhas.length == 1){
			this.Retorno(this.Linhas[0]);
		}else{
			$("#dialog_"+Element.Id).dialog("open");
		}
		
	}
	
	this.Retorno = function(retorno){
		
	}
	 
	this.getMessages = function() {
		var messages = {
				"sProcessing" : "Aguarde...",
				"sLengthMenu" : "Mostrar _MENU_ registros",
				"sZeroRecords" : "N&atilde;o foram encontrados resultados",
				"sInfo" : "_START_ - _END_ / _TOTAL_ ",
				"sInfoEmpty" : "N&atilde;o foram encontrados registros",
				"sInfoFiltered" : "(filtrado de _MAX_ registros no total)",
				"sInfoPostFix" : "",
				"sSearch" : "Busca:",
				"sUrl" : "",
				"oPaginate" : {
					"sFirst" : "Primeiro",
					"sPrevious" : "<<",
					"sNext" : ">>",
					"sLast" : "&Uacute;ltimo"
				}
			};

			return messages;
		}
	var url = "/webdesk/zoom.jsp?";
	window.open(url, "zoom", "status, scrollbars=no, width=600, height=350, top=0, left=0");
}


/// NOVO ZOOM 
//ESTADO
function addMunicipio() {
	
	if($("#txtCODETD").val() == ""){
		alert("Informe primeiro o Estado!");
		return;
	}
	
	var sentenceId = 'WS00005';
	var companyId = '1';
	var applicationId = 'T';
	var parameters = ',CODESTADO,' + $("#txtCODETD").val() + ',CODMUNICIPIO,%,NOMEMUNICIPIO,%';
	var filterValues = 'codSentenca,' + sentenceId + ',codColigada,' + companyId + ',codAplicacao,' + applicationId + parameters;
	
	openZoomFluig("Municípios", "ds_generic_rm_sql", "CODMUNICIPIO,Código,NOMEMUNICIPIO,Nome", "CODMUNICIPIO,NOMEMUNICIPIO", "municipio", filterValues);
}

function addEstado() {
	var sentenceId = 'WS00004';
	var companyId = '1';
	var applicationId = 'T';
	var parameters = ',CODETD,%,NOME,%';
	var filterValues = 'codSentenca,' + sentenceId + ',codColigada,' + companyId + ',codAplicacao,' + applicationId + parameters;
	
	openZoomFluig("Estados", "ds_generic_rm_sql", "CODETD,Código,NOME,Nome", "CODETD,NOME", "estado", filterValues);
}
 
function openZoomFluig(title, datasetId, dataFields, resultFields, type, filterValues) {
	var url = "/webdesk/zoom.jsp?";
	url += 'title=' + title + '&';
	url += 'datasetId=' + datasetId + '&';
	url += 'dataFields=' + dataFields + '&';
	url += 'resultFields=' + resultFields + '&';
	url += 'type=' + type + '&';
	url += 'filterValues=' + filterValues;
	
	window.open(url, "zoom", "status, scrollbars=no, width=600, height=350, top=0, left=0");
}

function addTipoLogradouro() {
	var sentenceId = 'WS00001';
	var companyId = '1';
	var applicationId = 'T';
	var parameters = ',CODIGO,%,DESCRICAO,%';
	var filterValues = 'codSentenca,' + sentenceId + ',codColigada,' + companyId + ',codAplicacao,' + applicationId + parameters;
	
	openZoomFluig("Tipos de Logradouro", "ds_generic_rm_sql", "CODIGO,Código,DESCRICAO,Descrição", "CODIGO,DESCRICAO", "tipo_logradouro", filterValues);
}

function addTipoBairro() {
	var sentenceId = 'WS00002';
	var companyId = '1';
	var applicationId = 'T';
	var parameters = ',CODIGO,%,DESCRICAO,%';
	var filterValues = 'codSentenca,' + sentenceId + ',codColigada,' + companyId + ',codAplicacao,' + applicationId + parameters;
	
	openZoomFluig("Tipos de Bairro", "ds_generic_rm_sql", "CODIGO,Código,DESCRICAO,Descrição", "CODIGO,DESCRICAO", "tipo_bairro", filterValues);
}
function addPais() {
	var sentenceId = 'WS00003';
	var companyId = '1';
	var applicationId = 'T';
	var parameters = ',IDPAIS,%,CODPAIS,%,DESCRICAO,%';
	var filterValues = 'codSentenca,' + sentenceId + ',codColigada,' + companyId + ',codAplicacao,' + applicationId + parameters;
	
	openZoomFluig("Paises", "ds_generic_rm_sql", "IDPAIS,ID,CODPAIS,Código,DESCRICAO,Descrição", "IDPAIS,CODPAIS,DESCRICAO", "pais", filterValues);
}



function addAreaRequisitante() {
	openZoomFluig('Centro de Custo', 'ds_cost_center', 'groupPK.groupId,C\u00F3digo,groupDescription,Descri\u00E7\u00E3o', 'groupPK.groupId,groupDescription', 'area_requisitante', 'colleagueGroupPK.colleagueId,'+$('#cpMatriculaSolicitante').val());
}

function addAprovador() {
	var filterValues = 'colleagueGroupPK.groupId,'+$('#txtCodAreaReq').val()+',workflowColleagueRolePK.roleId,'+$('#txtCodAreaReq').val();
	
	openZoomFluig('Usu\u00E1rios', 'ds_approving', 'colleaguePK.colleagueId,Matr\u00EDcula,colleagueName,Nome', 'colleaguePK.colleagueId,colleagueName', 'aprovador', filterValues);
}

function addSecao() {
	var sentenceId = 'WS.020';
	var companyId = '0';
	var applicationId = 'P';
	var parameters =',CODSECAO,' + $("#txtCodAreaReq").val();
	var filterValues = 'codSentenca,' + sentenceId + ',codColigada,' + companyId + ',codAplicacao,' + applicationId + parameters;
	
	openZoomFluig("Seção", "ds_generic_rm_sql", "SECAO,Seção,CODSECAO,Codseção", "CODSECAO", "Secao", filterValues);
}


function setSelectedZoomItem(selectedItem) {
	switch(selectedItem.type) {
		case "tipo_logradouro":
			$("#txtCODTIPORUA").val(selectedItem["CODIGO"]);
			$("#txtNOMETIPORUA").val(selectedItem["DESCRICAO"]);
			break;
		case "tipo_bairro":
			$("#txtCODTIPOBAIRRO").val(selectedItem["CODIGO"]);
			$("#txtNOMETIPOBAIRRO").val(selectedItem["DESCRICAO"]);
			break;
		case "municipio":
			$("#txtCODMUNICIPIO").val(selectedItem["CODMUNICIPIO"]);
			$("#txtNOMEMUNICIPIO").val(selectedItem["NOMEMUNICIPIO"]);
			break;
		case "estado":
			$("#txtCODETD").val(selectedItem["CODETD"]);
			$("#txtNOMECODETD").val(selectedItem["NOME"]);
			$("#txtCODMUNICIPIO").val("");
			$("#txtNOMEMUNICIPIO").val("");
			break;
		case "pais":
			$("#txtCODPAIS").val(selectedItem["IDPAIS"]);
			$("#txtPAIS").val(selectedItem["DESCRICAO"]);
			break;
		case "receita":
			$("#txtCODRECEITA").val(selectedItem["CODRECEITA"]);
			$("#txtRECEITA").val(selectedItem["DESCRICAO"]);
			break;
		case "filial":
			$("#txtCODFILIAL").val(selectedItem["CODFILIAL"]);
			$("#txtFILIAL").val(selectedItem["NOME"]);
			break;
		case "banco":
			
			var index = wdkAddChild("tbDadosBancarios");
			$("#txtNumeroBanco___" + index).val(selectedItem["NumeroOficial"]);
			$("#txtDESCRICAO___" + index).val(selectedItem["Nome"]);
			$("#txtCODIGOAGENCIA___" + index).mask('000000000-0', {reverse: true});
			$("#txtDIGITOAGENCIA___" + index).mask('0');
			$("#txtCONTACORRENTE___" + index).mask('000000000-0', {reverse: true});
			$("#txtDIGITOCONTA___" + index).mask('0');
			$("#txtINFOFINCFPCNPJ___" + index).val($("#txtCGCCFO").val());
			
			if ($("#rdPESSOAFISOUJURFISICA").prop("checked")) {
				$('#txtINFOFINCFPCNPJ___'+index).mask('000.000.000-00');
			}else if ($("#rdPESSOAFISOUJURJURIDICA").prop("checked")) {
				$('#txtINFOFINCFPCNPJ___'+index).mask('00.000.000/0000-00');
			}
			
			$("#txtFAVORECIDO___" + index).val(findFavorecido());
			
			break;
		case "filial_filho":
			$("#txtCODFILIAL___" + index_filial_filho).val(selectedItem["CODFILIAL"]);
			$("#txtFILIAL___" + index_filial_filho).val(selectedItem["NOME"]);
			break;
		case "area_requisitante":
			$("#txtCodAreaReq").val(selectedItem["groupPK.groupId"]);
			$("#txtAreaReq").val(selectedItem["groupDescription"]);
			//verificaAprovador();
			break;
		case "aprovador":
			$("#txtCodAprovador").val(selectedItem["colleaguePK.colleagueId"]);
			$("#txtCodAprovadorFluig").val(selectedItem["colleaguePK.colleagueId"]);
			$("#txtAprovador").val(selectedItem["colleagueName"]);
			//buscaMatriculaAprovador(selectedItem["EMAIL"]);
			break;
		case "Secao":
			$("#txtUnidadeArea").val(selectedItem["SECAO"]);
			$("#txtCentroCusto").val(selectedItem["CODSECAO"]);
			//buscaMatriculaAprovador(selectedItem["EMAIL"]);
			break; 
		case "":
			break;
	}
}

