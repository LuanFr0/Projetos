function carregaJquery() {

	$( ".Delete" ).button({icons: {primary: "ui-icon-trash"},text: false});
	$( ".Calendario" ).button({icons: {primary: "fluigicon-calendar"},text: false});
	
	$("#accordion").accordion({
		collapsible : true,
		active : false,
		heightStyle : "content"
	});
	

	//comentario
	$(document).tooltip();
}

var LinhaAtual = 0;	
var ZoomResp;
function load(){
	var atividade = getWKNumState();
	carregaJquery();
	//aprovacao gestor
	if(atividade=="0"){
		dadossolicitante();
	}
	
if(atividade=="1"|| atividade=="0"){
	FormataData();
}
if(atividade!="38"){

	$(".codigo").attr("readonly","readonly");
	$(".evento").attr("readonly","readonly");
	$(".ProvDesc").attr("readonly","readonly");
	$(".diasHoras").attr("readonly","readonly");
	//$(".valor").attr("readonly","readonly");
	
}

if (atividade != "0" && atividade != "1"){
		
		document.getElementById("TpDemissao").style.display = "none";
		document.getElementById("Funcionarios").style.display = "none";
		document.getElementById("MotDemissao").style.display = "none";
		document.getElementById("btnAddAreaRequisitante").style.display = "none";
		document.getElementById("btnAddAprovador").style.display = "none";
	 
		document.getElementById("TpDemissao").disabled = true;
		document.getElementById("Funcionarios").disabled = true;	
		document.getElementById("MotDemissao").disabled = true;	
		document.getElementById("btnAddAreaRequisitante").disabled = true;	
		document.getElementById("btnAddAprovador").disabled = true;	
		$('.required').hide();
		
}

if (atividade != "38"){
	
	document.getElementById("btnAdd").style.display = "none";
	document.getElementById("btnAdd").disabled = true;
}

if(atividade == 4){
	$( "#accordion" ).accordion({ active: 0 });
}else if(atividade == 8){
	$( "#accordion" ).accordion({ active: 1 });
}else if(atividade == 68){
	$( "#accordion" ).accordion({ active: 2 });
}else if(atividade == 10){
	$( "#accordion" ).accordion({ active: 3 });
}else if(atividade == 30){
	$( "#accordion" ).accordion({ active: 4 });
}else if(atividade == 45){
	$( "#accordion" ).accordion({ active: 5 });
}

// ESCONDER REQUIRED'S
if(atividade != "4"){
	$('.required2').hide();
}
if(atividade != "8"){
	$('.required3').hide();
}
if(atividade != "10"){
	$('.required5').hide();
}
if(atividade != "30"){
	$('.required6').hide();
}
if(atividade != "45"){
	$('.required7').hide();
}
if(atividade != "68"){
	$('.required4').hide();
}
if(atividade != "86"){
	$('.required8').hide();
}

	    ZoomResp = new Zoom();
		ZoomResp.Id = "ZoomResp";
		ZoomResp.DataSet = "ds_Eventos";
		ZoomResp.FieldsName = new Array(
				"txtCodcoligada"
			);

		ZoomResp.Colunas = new Array( 
				  {"sTitle" : "CODEVENTO", "sColumn" : "CODEVENTO","sWidth" : "50%"},
				  { "sTitle" : "EVENTO", "sColumn" : "EVENTO", "sWidth" : "50%", "bVisible": false},
				  { "sTitle" : "PROV_DESC", "sColumn" : "PROV_DESC", "sWidth" : "50%", "bVisible": false}
		);
		ZoomResp.Titulo = "Selecione um candidato";
		ZoomResp.Retorno = function(retorno) {
			$(".linha_tabela").each(function(index){
				if(index == LinhaAtual){
					$(this).find(".codigo").val(retorno[0]);
					$(this).find(".evento").val(retorno[1]);
					$(this).find(".ProvDesc").val(retorno[2]);
				}
			});	
			
		};

		//zoom departamento da admissao
		
		var ZomTpDemissao = new Zoom();
		
		ZomTpDemissao.Id = "ZomTpDemissao";
		ZomTpDemissao.DataSet = "ds_tipo_demissao";
		ZomTpDemissao.Colunas = new Array(

		  { "sTitle" : "DESCRICAO", "sColumn" : "DESCRICAO","sWidth" : "100%"}
		  );
		
		ZomTpDemissao.Titulo = "Busca Tipo";

		ZomTpDemissao.Retorno = function(retorno){
			
			 $("#txtTipoDeslig").val(retorno[0]);
			    
		};

		$("#TpDemissao").click(function(){
			
			ZomTpDemissao.Abrir();

		});
		
	//zoom funcao da admissao
		
		var ZomMotDemissao = new Zoom();
		
		ZomMotDemissao.Id = "ZomMotDemissao";
		ZomMotDemissao.DataSet = "ds_motivo_demissao";
		ZomMotDemissao.Colunas = new Array(

		  { "sTitle" : "DESCRICAO", "sColumn" : "DESCRICAO","sWidth" : "100%"}
		  );
		
		ZomMotDemissao.Titulo = "Busca Motivo";

		ZomMotDemissao.Retorno = function(retorno){
			 $("#txtMotDeslig").val(retorno[0]);
		};

		$("#MotDemissao").click(function(){
			ZomMotDemissao.Abrir();
		});
		
//zoom tranferencia colaboradores
		
		var ZomDem = new Zoom();
		
		ZomDem.Id = "ZomDem";
		ZomDem.DataSet = "ds_dados_func_demisso";
		ZomDem.FieldsName = new Array("cpCheckCodigo", "txtCodAreaReq");
		ZomDem.Colunas = new Array(

		  {"sTitle" : "CHAPA", "sColumn" : "CHAPA","sWidth" : "10%"},
		  { "sTitle" : "NOME", "sColumn" : "NOME","sWidth" : "40%"},
		  { "sTitle" : "FUNCAO", "sColumn" : "FUNCAO","sWidth" : "40%"},
		  {"sTitle" : "SECAO", "sColumn" : "SECAO","bVisible": false},
		  {"sTitle" : "SALARIO", "sColumn" : "SALARIO","bVisible": false},
		  {"sTitle" : "ADMISSAO", "sColumn" : "ADMISSAO","bVisible": false},
		  {"sTitle" : "CODSECAO", "sColumn" : "CODSECAO","bVisible": false},
		  {"sTitle" : "SITUACAO", "sColumn" : "SITUACAO","bVisible": false},
		  {"sTitle" : "CODSITUACAO", "sColumn" : "CODSITUACAO","bVisible": false},
		  {"sTitle" : "TELEFONE1", "sColumn" : "TELEFONE1","bVisible": false},
		  {"sTitle" : "ESTABILIDADE", "sColumn" : "ESTABILIDADE","bVisible": false},
		  {"sTitle" : "CODCOLIGADA", "sColumn" : "CODCOLIGADA","bVisible": false},
		  { "sTitle" : "GESTOR", "sColumn" : "GESTOR","bVisible": false}
	  );
		
		ZomDem.Titulo = "Busca Colaboradores";

		ZomDem.Retorno = function(retorno){
			
			 $("#txtNomeColaborador").val(retorno[0]);
			 $("#txtRegistro").val(retorno[1]);
			 $("#txtFuncao").val(retorno[2]);
			 $("#txtDpto").val(retorno[3]);
			 $("#dtAdmissao").val(retorno[5]);
			 $("#txtCodSecao").val(retorno[6]);
			 $("#txtSituacao").val(retorno[7]);
			 $("#txtCodsituacao").val(retorno[8]);
			 $("#txtCodsituacaoValue").val(retorno[8]);
			 $("#txtTELEFONE").val(retorno[9]);
			 $("#txtEstavel").val(retorno[10]);
			 $("#txtCodcoligada").val(retorno[11]);
			 $("#txtGestordoGrupo").val(retorno[12]);
		};
		
		$("#Funcionarios").click(function(){
			if($("#txtNomeColaborador").val() != "")  {
				ZomDem.Renderizado = false;
			$("#dialog_"+ZomDem.Id).remove();
			ZomDem.Abrir();
			
			}
			else if($("#txtNomeColaborador").val()== "") {
				alert("Preencha o nome ou chapa, antes de buscar o colaborador");
			}
	});
}  // FIM DO LOAD

function addTabela(){
	var index = wdkAddChild("tbComanda");	
	
	$(".linha_tabela").last().find(".openZoomResp").click(function() {
   		ZoomResp.Renderizado = false;
   		$("#dialog_ZoomResp").remove();
   		ZoomResp.Abrir();
   		LinhaAtual = $(".tbComanda tbody tr").index( $(this).parents("tr"));
   		
   	});
	
}

function fnCustomDeleteRateio(oElement){
	
	fnWdkRemoveChild(oElement);
	
	var tableBody = document.getElementById("tbRateio");
	var trashButtons = tableBody.getElementsByTagName("tr");  
	
}

function ValFiltro(){
	var x = $("#txtNomeColaborador").val();
	$("#cpCheckCodigo").val(x);
}

function OpenZoomColaborador(index) {
	LINHA = index;
	$("#zoomColaborador").dialog("open");
}

function RemoverDependente(element, index){
	   RecontarDependente();
	   var ContarLinha = $(".linha_tabela").length;
	   if(ContarLinha > 1){
	       $(element).parents(".linha_tabela").remove();
	       LinhaRemove++;
	   }
	   else{
	       $(element).parents(".linha_tabela").find("input,select").val("");
	   }
	   
	   var Colaborador = $("#cpColaboradores").val().indexOf(",");
		if(Colaborador >= 0){
			var NovoValor = "";
			var Split = $("#cpColaboradores").val().split(",");
			for(var Colab in Split){
				if(Split[Colab] != index){
					if(NovoValor == "")
						NovoValor = Split[Colab];
					else
						NovoValor += ","+Split[Colab];
				}
			}
			
			$("#cpColaboradores").val(NovoValor);
		}
		else{
			$("#cpColaboradores").val("");
		}
}

function RecontarDependente(){
	$(".linha_tabela").each(function(index){
		$(this).attr("data-index", index);
	});
}

function FormataData(){
	
	$( ".cpDataOn" ).datepicker({
		inline: true,
		showOn: "button",
        buttonImage: "http://integralonlinetst.fluig.com/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yNjI3JnZlcj0xMDAwJmZpbGU9Y2FsZW5kYXJpby5wbmcmY3JjPTExMTM4MDIzMDYmc2l6ZT0xLjkxNjg5RS00.png",
        buttonImageOnly: true,
        buttonText: "Calendario",
		dateFormat: "dd/mm/yy",
	    dayNames: ['Domingo','Segunda','Terca','Quarta','Quinta','Sexta','Sábado'],
	    dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
	    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab','Dom'],
	    monthNames: ['Janeiro','Fevereiro','Marco','Abril','Maio','Junho','Julho','Agosto',
	    			 'Setembro','Outubro','Novembro','Dezembro'],
	    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
	    nextText: 'Proximo',
	    prevText: 'Anterior',
	    top:0,
		left:130,
		changeMonth:true,
		changeYear: true,
		minDate:0
});

}

//formatando o campo moeda 

function formatar_moeda(campo, separador_milhar, separador_decimal, tecla) {
	var sep = 0;
	var key = '';
	var i = j = 0;
	var len = len2 = 0;
	var strCheck = '0123456789';
	var aux = aux2 = '';
	var whichCode = (window.Event) ? tecla.which : tecla.keyCode;

	if (whichCode == 13) return true; // Tecla Enter
	if (whichCode == 8) return true; // Tecla Delete
	key = String.fromCharCode(whichCode); // Pegando o valor digitado
	if (strCheck.indexOf(key) == -1) return false; // Valor invÃ??????????Ã?????????Ã????????Ã???????Ã??????Ã?????Ã????Ã???Ã??Ã?Â¡lido (nÃ??????????Ã?????????Ã????????Ã???????Ã??????Ã?????Ã????Ã???Ã??Ã?Â£o inteiro)
	len = campo.value.length;
	for(i = 0; i < len; i++)
	if ((campo.value.charAt(i) != '0') && (campo.value.charAt(i) != separador_milhar)) break;
	aux = '';
	for(; i < len; i++)
	if (strCheck.indexOf(campo.value.charAt(i))!=-1) aux += campo.value.charAt(i);
	aux += key;
	len = aux.length;
	if (len == 0) campo.value = '';
	if (len == 1) campo.value = '0'+ separador_milhar + '0' + aux;
	if (len == 2) campo.value = '0'+ separador_milhar + aux;

	if (len > 2) {
		aux2 = '';

		for (j = 0, i = len - 3; i >= 0; i--) {
			if (j == 3) {
				aux2 += separador_decimal;
				j = 0;
			}
			aux2 += aux.charAt(i);
			j++;
		}

		campo.value = '';
		len2 = aux2.length;
		for (i = len2 - 1; i >= 0; i--)
		campo.value += aux2.charAt(i);
		campo.value += separador_milhar + aux.substr(len - 2, len);
	}

	return false;
}

function PegaSalarioAtual(){
	var Salario=$("#TxtSalarioAtual").val();
	$("#TxtSalarioAtualValue").val(Salario);
}

function PegaSalarioNovo(){
	var Salario=$("#txtNovoSalario").val();
	$("#txtNovoSalarioValue").val(Salario);
}

function PegaCampo(){
	var Teste=$("#txtParecerAprovGestorOrgigem").val();
	$("#txtParecerValue").val(Teste);
}

var valor=$("#TxtSalarioAtualValue").val();

function converteFloatMoeda(valor){
    var inteiro = null, decimal = null, c = null, j = null;
    var aux = new Array();
    valor = ""+valor;
    c = valor.indexOf(".",0);
    //encontrou o ponto na string
    if(c > 0){
       //separa as partes em inteiro e decimal
       inteiro = valor.substring(0,c);
       decimal = valor.substring(c+1,valor.length);
    }else{
       inteiro = valor;
    }
    
    //pega a parte inteiro de 3 em 3 partes
    for (j = inteiro.length, c = 0; j > 0; j-=3, c++){
       aux[c]=inteiro.substring(j-3,j);
    }
    
    //percorre a string acrescentando os pontos
    inteiro = "";
    for(c = aux.length-1; c >= 0; c--){
       inteiro += aux[c]+'.';
    }
    //retirando o ultimo ponto e finalizando a parte inteiro
    
    inteiro = inteiro.substring(0,inteiro.length-1);
    
    decimal = parseInt(decimal);
    if(isNaN(decimal)){
       decimal = "00";
    }else{
       decimal = ""+decimal;
       if(decimal.length === 1){
          decimal = decimal+"0";
       }
    }
    
    valor = "R$ "+inteiro+","+decimal;
    
    $("#TxtSalarioAtual").val(valor);

 }

function PrazoTransf(){
	
	var fields =null;
	
	//var aaData = new Array();
	var DIA = 0;
	var MES = 0;
	var ANO=0;
	var DATA=0;
	
	try 
	{
		
		var tabela = DatasetFactory.getDataset("ds_dt_de_transferencia", fields, null, null); 	

		if (tabela == null)
		{	
			throw "N&atilde;o Foram encontrados registros!";
		}

		else if (tabela.values.length == "0")
		{	
			throw "N&atilde;o Foram encontrados registros.";
		}
		
		for (var i = 0; i < tabela.values.length; i++) {
			DIA = tabela.values[i].DIA.toString();
			MES = tabela.values[i].MES.toString();
			ANO = tabela.values[i].ANO.toString();
			DATA = tabela.values[i].DATA.toString();
			
			document.getElementById("cpDiaTransf").value = DIA;
			document.getElementById("cpMesTransf").value = MES;
			document.getElementById("cpAnoTransf").value = ANO;
			document.getElementById("txtDataMud").value = DATA;
		}
	}

	catch(erro)
	{
		window.alert(erro);
	}
	
	//return DIAS;
	return 0; 
}

//prazo processamento

function PrazoTransfProcessamento(){
	
	var DATA = document.getElementById("txtDataMud").value;
	
	var fields = new Array(DATA);
	
	//var aaData = new Array();
	var DIA = 0;
	var MES = 0;
	var ANO=0;
	var DATA=0;
	
	try 
	{
		
		var tabela = DatasetFactory.getDataset("ds_prazo_proces_transferencia", fields, null, null); 	

		if (tabela == null)
		{	
			throw "N&atilde;o Foram encontrados registros!";
		}

		else if (tabela.values.length == "0")
		{	
			throw "N&atilde;o Foram encontrados registros.";
		}
	
		
		for (var i = 0; i < tabela.values.length; i++) {
			DIA = tabela.values[i].DIA.toString();
			MES = tabela.values[i].MES.toString();
			ANO = tabela.values[i].ANO.toString();
			DATA = tabela.values[i].DATA.toString();
			
			document.getElementById("cpDiaTransf").value = DIA;
			document.getElementById("cpMesTransf").value = MES;
			document.getElementById("cpAnoTransf").value = ANO;
			document.getElementById("txtDataMud").value = DATA;
		
		}
	}

	catch(erro)
	{
		window.alert(erro);
	}
	
	//return DIAS;
	return 0; 
}

function dadossolicitante() {
	
	var CODUSUARIOREDE = document.getElementById("cpMatriculaSolicitante").value;
	
	var fields = new Array(CODUSUARIOREDE);
	
	var FUNCAO = 0;
	var SECAO = 0;
	
	try 
	{
		
		var tabela = DatasetFactory.getDataset("ds_Solicitante", fields, null, null); 	

		if (tabela == null)
		{	
			throw "N&atilde;o Foram encontrados registros!";
		}

		else if (tabela.values.length == "0")
		{	
			throw "N&atilde;o Foram encontrados registros.";
		}
	
		
		for (var i = 0; i < tabela.values.length; i++) {
			FUNCAO = tabela.values[i].FUNCAO.toString();
			SECAO = tabela.values[i].SECAO.toString();
			
		
			document.getElementById("txtCargoSol").value = FUNCAO;
			document.getElementById("txtDeptoSol").value = SECAO;
		}
	}

	catch(erro)
	{
		window.alert(erro);
	}
	
	//return DIAS;
	return 0; 
}

function ApagaCampos(){
	var limpa="";
	
	document.getElementById("txtAprovador").value =limpa;
	document.getElementById("txtCodAprovadorFluig").value =limpa;
	document.getElementById("txtCodAprovador").value =limpa;
	document.getElementById("txtNomeColaborador").value =limpa;
	document.getElementById("txtFuncao").value =limpa;
	document.getElementById("txtCodsituacao").value =limpa;
	document.getElementById("txtTELEFONE").value =limpa;
	document.getElementById("txtRegistro").value =limpa;
	document.getElementById("txtCodSecao").value =limpa;
	document.getElementById("dtAdmissao").value =limpa;
	document.getElementById("txtEstavel").value =limpa;
	document.getElementById("txtTipoDeslig").value =limpa;
	document.getElementById("txtMotDeslig").value =limpa;
	document.getElementById("txtDpto").value =limpa;
}

function ApagaCamposFuncionario(){
var limpa="";
	
	document.getElementById("txtNomeColaborador").value =limpa;
	document.getElementById("txtFuncao").value =limpa;
	document.getElementById("txtCodsituacao").value =limpa;
	document.getElementById("txtTELEFONE").value =limpa;
	document.getElementById("txtRegistro").value =limpa;
	document.getElementById("txtDpto").value =limpa;
	document.getElementById("dtAdmissao").value =limpa;
	document.getElementById("txtEstavel").value =limpa;
    
}

function verificaDpto(){
	var Area= document.getElementById("txtCodAreaReq").value;
	
	if(Area=="01.001.02"){
	document.getElementById("DivAprovador").style.display = "none";
	}
	else if(Area!="01.001.02"){
	document.getElementById("DivAprovador").style.display = "block";
	}
	
}

function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which;   
    if((tecla>47 && tecla<58)) return true;
    else{
    	if (tecla==8 || tecla==0) return true;
	else  return false;
    }
}

function LimpaForm() {
	var limpa = "";
	
	$(".limpa").val(limpa);
}