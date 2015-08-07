function verificaAprovador(){
		
	var fields = ['colleaguePK.colleagueId', 'colleagueName'];
	var constraints = [];
	var constraint = DatasetFactory.createConstraint('colleagueGroupPK.groupId', $('#txtCodAreaReq').val(), $('#txtCodAreaReq').val(), ConstraintType.MUST); 
	var dataset = null;
	var row = null;
	
	constraints.push(constraint);
	constraint = DatasetFactory.createConstraint('workflowColleagueRolePK.roleId', $('#txtCodAreaReq').val(), $('#txtCodAreaReq').val(), ConstraintType.MUST);
	constraints.push(constraint);
	dataset = DatasetFactory.getDataset('ds_approving', fields, constraints, null);
	
	if(dataset.values.length < 2){
		row = dataset.values[0];
		$('#btnAddAprovador').prop('disabled', true);
		$('#txtCodAprovador').val(row['colleaguePK.colleagueId']);
		$('#txtCodAprovadorFluig').val(row['colleaguePK.colleagueId']);
		$('#txtAprovador').val(row['colleagueName']);
	}
    else{
    	$("#txtCodAprovador").val('');
    	$("#txtAprovador").val('');
    	$('#btnAddAprovador').prop('disabled', true);
    }
}


function buscaAreaRequisitante() {
			
		var codigo = $("#txtCodRequisitante").val();
		var areas = null;
		
		try {
			var fields = new Array("groupPK.groupId","groupDescription");
			
			var c1 = DatasetFactory.createConstraint("colleagueGroupPK.colleagueId", codigo, codigo, ConstraintType.MUST);
			areas = DatasetFactory.getDataset("ds_cost_center", fields, new Array(c1), null);
									
			if (areas != null && areas.values.length == 1) {
				
				var row = areas.values[0];
				
				$("#txtCodAreaReq").val(row["groupPK.groupId"]);
				$("#txtAreaReq").val(row["groupDescription"]);
			}
			else {
				
				$("#txtCodAreaReq").val("");
				$("#txtAreaReq").val("");
				
				
			}
		}
		catch(e) {
			alert("ERRO: " + e);
		}
	
		
	
}





