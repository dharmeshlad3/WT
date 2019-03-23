function search() 
{
	var medicine_name = (document.getElementById('med_name').value).toUpperCase();
	var query = firebase.database().ref("medicines").orderByKey();
	query.once("value").then(function(snapshot){
		snapshot.forEach(function(childSnapshot)
		{
			var  key = childSnapshot.key;
			var name=childSnapshot.child("name").val();
			var name1=childSnapshot.child("name").val();
			name = name.split(" ");
			name = name[0];
			if(name==medicine_name && name1.includes(name))
			{
				var id=childSnapshot.child("medicine_id").val();
				var query1 = firebase.database().ref("medicines/"+id).orderByKey();
				query1.once("value").then(function(snapshot)
				{
					snapshot.forEach(function(childSnapshot)
					{
						var  key = childSnapshot.key;
						var childData = childSnapshot.val();
						if(key!="constituents" && key!="schedule" && key!="price")document.write(key+": "+childData+"<br>");
						if(key=="standardUnits")document.write("<br>");
						if(key=="price")document.write(key+": "+"Rs."+childData+"<br>");
						if(key=="constituents")
						{
							query1 = firebase.database().ref("medicines/"+id+"/constituents/0").orderByKey();
							query1.once("value").then(function(snapshot)
							{
								snapshot.forEach(function(childSnapshot)
								{
									var  key1 = childSnapshot.key;
									var childData = childSnapshot.val();
									var constituents0 = JSON.stringify(childData);
									query2 = firebase.database().ref("medicines/"+id+"/constituents/1").orderByKey();
									query2.once("value").then(function(snapshot)
									{
										snapshot.forEach(function(childSnapshot)
										{
											var  key1 = childSnapshot.key;
											var childData = childSnapshot.val();
											var constituents0_1 = JSON.stringify(childData);
											document.write(constituents0_1);
											//constituents0_1=constituents0_1.split("\"\"");
											//constituents0_1=constituents0_1[0];
											//document.write(constituents0_1);
											//alternate(constituents0_1);
											
										});
									});

								});
							});							
						}
						/*if(key=="constituents")
						{
							query1 = firebase.database().ref("medicines/"+id+"/constituents/0").orderByKey();
							query1.once("value").then(function(snapshot)
							{
								snapshot.forEach(function(childSnapshot)
								{
									var  key1 = childSnapshot.key;
									var childData = childSnapshot.val();
									//document.write(key1+": "+childData+"<br>");
									alternate(childData);
								});
							});

							//document.write(key+": "+childData+"<br>");
						}*/

					});
				});
			}
		});
	});
}	

/*function alternate(temp)
{
	document.write(temp);
	var i=1;
	var query = firebase.database().ref("medicines").orderByKey();
	query.once("value").then(function(snapshot){
		snapshot.forEach(function(childSnapshot)
		{
			var  key = childSnapshot.key;
			document.write(key+" "+i+"<br>");i++;
			query1 = firebase.database().ref("medicines/"+key).orderByKey();
							query1.once("value").then(function(snapshot)
							{
								snapshot.forEach(function(childSnapshot)
								{
									
									//var id=childSnapshot.child("medicine_id").val();
									
									/*query2 = firebase.database().ref("medicines/"+"/"+"constituents/0").orderByKey();
										query2.once("value").then(function(snapshot)
										{
											snapshot.forEach(function(childSnapshot)
											{
												var childData = childSnapshot.val();
												//document.write(childData);
												if(temp.includes(childData))
												{
													document.write("yes");
												}
												else
												{
													document.write("No");
												}
											});
										});	
								});
							});
			
		});
	});
}*/	


/*var query1 = firebase.database().ref("medicines/"+id).orderByKey();
				query1.once("value").then(function(snapshot)
				{
					snapshot.forEach(function(childSnapshot)
					{
						var  key = childSnapshot.key;
						var childData = childSnapshot.val();
						//console.log(childData); 
					
						//console.log(name_val); 
						//$("#name").append(name_val);
					});
				});*/