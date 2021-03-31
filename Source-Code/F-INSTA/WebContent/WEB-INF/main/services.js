app
		.factory(
				"mainService",
				function($http, $log, toaster, $location) {
					var isDisabled = "";

					return {
						setDisableButtonsOnRowClick : function(data) {
							isDisabled = data;
						},
						getDisableButtonsOnRowClick : function() {
							return isDisabled;
						},
						fetchRoleList : function(data) {

							/*console.log("-------In role Service-------",data);*/
							var promise = $http({
								url : "role/getChildRole",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								/*console.log("-------In role Service Reponce-------",response);*/
								return response.data;
							})
							return promise;
						},
						loggedInUserData : function(data) {

							console
									.log(
											"@@@@@@@@@@@@@ In Logged In User Service@@@@@@@@@",
											data);
							var promise = $http({
								url : "login/getLoggedInUserData",
								method : "POST",
								data : JSON.stringify(data)
							})
									.success(
											function(data, status, header,
													config, statusText) {
											})
									.error(
											function(data, status, header,
													config, statusText) {
												if (!status === 901)
													toaster.pop('error',
															status, statusText);
											})
									.then(
											function(response) {
												console
														.log(
																"@@@@@@@@@@@@@ In Logged In User Service Reponce@@@@@@@@@",
																response);
											
												return response.data;
											})
							return promise;

						},
						/*getAllTerritories : function(data)
						    {
						console.log("-------In role Service-------",data);
						var promise = $http({
						url : "role/getChildRole",
						method : "POST",
						data : JSON.stringify(data)
						}).success(function(data, status, header, config, statusText)
						{
						}).error(function(data, status, header, config, statusText)
						{
						if(!status === 901)
						toaster.pop('error', status, statusText);
						}).then(function(response)
						{
						console.log("-------In role Service Reponce-------",response);
						return response.data;
						})
						return promise;
						    },getFilterLoginUser : function(data)
						    {
						console.log("-------In filter login Service-------",data);
						var promise = $http({
						url : "user/getFilterLoginUserList",
						method : "POST",
						data : JSON.stringify(data)
						}).success(function(data, status, header, config, statusText)
						{
						}).error(function(data, status, header, config, statusText)
						{
						if(!status === 901)
						toaster.pop('error', status, statusText);
						}).then(function(response)
						{
						/*console.log("-------In role Service Reponce-------",response);
						return response.data;
						})
						return promise;
						    },*/
						saveIncidentTicketData : function(data) {
							var promise = $http({
								url : "saveIncidentTicket.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},

						searchUser : function(data) {

							var promise = $http({
								/*url : "web/user/search",*/
								url : "loadusers.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						getAllTerritories : function() {
							var promise = $http({
								url : "allTeritoryList.htm",
								method : "GET"
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},getTerritories : function() {
							var promise = $http({
								url : "TerritoriesList.htm",
								method : "GET"
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						getTerritoryCode : function(data) {
							var promise = $http({
								url : "getTerritoryCode.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(
									function(response) {
										console.log('response for code',
												response.data);
										return response.data;
									})
							return promise;
						},
						savePOP : function(data) {
							console.log("Filter--->", data);
							var promise = $http({
								url : "pop.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						updatePOP : function(data) {
							console.log("Filter--->", data);
							var promise = $http({
								url : "modifyPop.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},

						getAllPop : function(data) {
							var promise = $http({
								url : "web/pop/getAllPop",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},

						popFilter : function(data) {
							var promise = $http({
								url : "getPop",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},

						exportForPop : function(data) {
							var promise = $http({
								url : "popFile.htm",
								method : "POST",
								data : JSON.stringify(data),
								responseType: 'arraybuffer',
								headers: {
								'Content-type': 'application/json',
								'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								}
							}).success(
									function(data, status, header, config,
											statusText) {
										var byteArray = new Uint8Array(data);
					                    if(byteArray.length > 0)
					                 	{ 
				                    	
											var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
										    var link=document.createElement('a');
										    link.href=window.URL.createObjectURL(blob);
										    link.download="SiteDataExport.xls";
										    link.click();
											toaster.pop("Success", "Success", "File downloaded Successfully");
										 }
				                    	else
				                    	{
				                    	  	toaster.pop('error', status, "There is some problem in downloading file");
				                    	}
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},

						fetchPop : function(data) {
							var promise = $http({
								url : "web/pop/fetchPop",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},

						addUserData : function(data) {
							var promise = $http({

								url : "addUser.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						getTerritoriesByRole : function(data) {

							var promise = $http({
								/*url : "web/user/search",*/
								url : "getTerritoriesByRole.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						checkAvailabilityOfLogin : function(data) {

							var promise = $http({
								url : "checkAvailabilityOfLogin.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						saveTerritory : function(data) {
							var promise = $http({
								url : "territory.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						changePassword : function(changePasswordRequestEntity) {
							var promise = $http(
									{
										url : "changePassword.htm",
										method : "POST",
										data : JSON
												.stringify(changePasswordRequestEntity)
									}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						modifyUserData : function(data) {

							var promise = $http({
								url : "modifyUserData.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						getSiteList : function(data) {

							var promise = $http({
								url : "getSiteList.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						getAssignToList : function(data) {

							var promise = $http({
								url : "getAssignToList.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						getTicketId : function(data) {

							var promise = $http({
								url : "getTicketId.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						resetUserPassword : function(data) {

							var promise = $http({
								url : "resetPassword.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						getRoleTerritoryList : function(id) {
							console.log("id = " + id)
							var promise = $http({
								url : "role/getTerritoryList/" + id,
								method : "GET"

							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						getmdmReport : function(data) {

							var promise = $http({
								url : "searchmdm.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						getLocationData : function(data) {
							console
									.info("In Location Controller getLocationData Service");
							var promise = $http({
								url : "location/getLocationData",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						getAllRoleTerritoryListById : function(id,userId) {
							console.log("id = " + id)
							console.log("userid ="+userId)
							var promise = $http({
								url : "role/getTerritoryListByRoleId/" + id+"/"+userId,
								method : "GET"

							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						checkAvailabilityOfCode : function(data) {

							var promise = $http({
								url : "checkAvailabilityOfCode.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						checkAvailabilityOfTerritoryCode : function(data) {

							var promise = $http({
								url : "checkAvailabilityOfTerritoryCode.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						checkAvailabilityOfPopCode : function(data) {

							var promise = $http({
								url : "checkAvailabilityOfSiteCode.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						checkAvailabilityOfIMEI : function(data) {

							var promise = $http({
								url : "checkAvailabilityOfIMEI.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						searchLocationData : function(data) {

							var promise = $http({
								url : "searchLocationData.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},

						territoryFilter : function(data) {
							console.log("inside territory filter of service",
									data);

							var promise = $http({
								url : "territory/getCircleTerritory",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},

						zoneFilter : function(data) {
							console.log("inside zone filter of service", data);

							var promise = $http({
								url : "territory/getCircleTerritory",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},

						manFilter : function(data) {
							console.log("inside man filter of service", data);

							var promise = $http({
								url : "territory/getCircleTerritory",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},

						searchTickets : function(data) {
							//console.log("inside searchTickets of service",data);

							var promise = $http({
								url : "searchTickets/getTickets",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						getTicketId : function(data) {
							//console.log("inside searchTickets of service",data);

							var promise = $http({
								url : "getTicketId.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						showSLA : function(data) {
							//console.log("inside searchTickets of service",data);

							var promise = $http({
								url : "showSLA.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						updateRoleTerritoryMapping : function(data) {
							//console.log("inside searchTickets of service",data);

							var promise = $http({
								url : "role/updateTerritoryMapping",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;

						},

						deleteUser : function(data) {
							var promise = $http({
								url : "deleteUser.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},
						getActivityProfileList : function(data) {
							var promise = $http({
								url : "profile/activityList",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						updateProfileActivityMapping : function(data) {
							var promise = $http({
								url : "profile/addProfileActivityMapping",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {		
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;

						},

						getAllActivityList : function(data) {
							var promise = $http({
								url : "profile/allActivityList",
								method : "POST",
								data:data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						getImage : function() {
							/*	console.log("id = "+id)*/
							var promise = $http({
								url : "web/profile/image",
								method : "GET"

							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								console.log("in service", response);
								return response;
							})
							return promise;
						},
						getImageList : function(id,imageNo,ticketType) {
							console.log("id = " + id)
							console.log("imageno = " + imageNo)
							console.log("tickettype = " + ticketType)
							var promise = $http({
								url : "tickets/image/" + id+"/"+ imageNo+"/"+ ticketType,
								method : "GET"
								}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
									return response;
							})
							return promise;
						},
						searchLoginDetails : function(data) {

							var promise = $http({

								url : "logindetailsreport/search",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								console.log(response)
								return response.data;
							})
							return promise;

						},
						getAllUserList : function() {

							var promise = $http({
								url : "logindetailsreport/usera",
								method : "GET"
						
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						searchDistanceDetails : function(data) {
							var result = $http({

								url : "distanceTravelledReport/search",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return result;
						},
						exportForDistanceTravelled : function(data) {
							console
									.log("inside main service exportForDistanceTravelled");
							var promise = $http({
								url : "distanceTravelledReport/export",
								method : "POST",
								data : JSON.stringify(data),
								responseType: 'arraybuffer',
								 headers: {
								        'Content-type': 'application/json',
								        'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								    }
							}).success(
									function(data, status, header, config,
											statusText) {
										 var byteArray = new Uint8Array(data);
					                   	if(byteArray.length > 0)
					                   	{ 
										 	var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
										    var link=document.createElement('a');
										    link.href=window.URL.createObjectURL(blob);
										    link.download="distanceTravelled.xls";
										    link.click();
										    toaster.pop("Success", "Success", "File downloaded Successfully");
										}
				                    	else
				                    	{
				                    	  	toaster.pop('error', status, "There is some problem in downloading file");
				                    	 } 						
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return promise;
						},
						exportFile : function() {
							var promise = $http({
								url : "exportFile.htm",
								method : "GET",
								responseType: 'arraybuffer',
								headers: {
								'Content-type': 'application/json',
								'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								}
							}).success(
									function(data, status, header, config,
											statusText) {
										//                    	console.log("result is",data);
										 var byteArray = new Uint8Array(data);
					                    if(byteArray.length > 0)
					                 	{ 
											var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
										    var link=document.createElement('a');
										    link.href=window.URL.createObjectURL(blob);
										    link.download="TerritoryExport.xls";
										    link.click();
										    toaster.pop("Success", "Success", "File downloaded Successfully");
										 }
				                      else
				                     {
				                      	toaster.pop('error', status, "There is some problem in downloading file");
				                     }
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						exportUserFile : function() {
							var promise = $http({
								url : "exportUserFile.htm",
								method : "GET",
								responseType: 'arraybuffer',
								headers: {
								'Content-type': 'application/json',
								'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								}
							}).success(
									function(data, status, header, config,
											statusText) {
										//                    	console.log("result is",data);
										 var byteArray = new Uint8Array(data);
										 if(byteArray.length > 0)
										 { 
											var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
										    var link=document.createElement('a');
										    link.href=window.URL.createObjectURL(blob);
										    link.download="UserExport.xls";
										    link.click();
										    toaster.pop("Success", "Success", "File downloaded Successfully");
										 }
				                      else
				                     {
				                      		toaster.pop('error', status, "There is some problem in downloading file");
				                     }
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						exportLoginDeatailsFile : function(data) {
							var promise = $http({
								url : "exportLoginDetailsFile.htm",
								method : "POST",
								data : JSON.stringify(data),
								responseType: 'arraybuffer',
								headers: {
								'Content-type': 'application/json',
								'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								}
							}).success(
									function(data, status, header, config,
											statusText) {
										//alert(data);
										 var byteArray = new Uint8Array(data);
					                   	if(byteArray.length > 0)
					                 	{ 
											var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
										    var link=document.createElement('a');
										    link.href=window.URL.createObjectURL(blob);
										    link.download="LoginDetailsExport.xls";
										    link.click();
										    toaster.pop("Success", "Success", "File downloaded Successfully");
										 }
				                   	  else
				                   	  {
				                   	  		toaster.pop('error', status, "There is some problem in downloading file");
				                   	  }
									}).error(
									function(data, status, headers, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						getTicketIdForPM : function() {
							console.log("inside PM getTicket");
							var promise = $http({
								url : "getTicketIdPM.htm",
								method : "GET"
							}).success(
									function(data, status, header, config,
											statusText) {

									}).error(
									function(data, status, header, config,
											statusText) {

										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						savePMTicket : function(data) {
							console.log("inside PM getTicket");
							var promise = $http({
								url : "savePMTicket.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {

									}).error(
									function(data, status, header, config,
											statusText) {

										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						saveSrsTicket : function(data) {
							console.log("inside main");
							var promise = $http({
								url : "saveSRSTicket.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {

									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						getTicketIdForSRS : function(data) {
							console.log("inside main");
							var promise = $http({
								url : "SRSTicketID.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {

									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						searchPMTicket : function(data) {
							var result = $http({
								url : "viewPMTicket.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return result;
						},
						searchSrsTicket : function(data) {
							var result = $http({
								url : "viewSrsTicket.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return result;
						},
						exportSrs : function(data) {
							var result = $http({
								url : "exportSrsTicket.htm",
								method : "POST",
								data : data,
								responseType: 'arraybuffer',
								headers: {
								'Content-type': 'application/json',
								'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								}
							}).success(
									function(data, status, header, config,
											statusText) {
										 var byteArray = new Uint8Array(data);
					                    if(byteArray.length > 0)
					                 	{ 
											var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
										    var link=document.createElement('a');
										    link.href=window.URL.createObjectURL(blob);
										    link.download="SRS_Export.xls";
										    link.click();
										    toaster.pop("Success", "Success", "File downloaded Successfully");
										 }
				                   	  else
				                      {
				                    	  	toaster.pop('error', status, "There is some problem in downloading file");
				                      }
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return result;
						},
						ohsDataRetrivalService : function(data) {
							var result = $http({
								url : "retriveOhsList.htm",
								method : "POST",
								data : data
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return result;
						},
						exportforTicketData : function(data) {
							console.log("inside exportforTicketData main");
							var result = $http({
								url : "exportTicketData.htm",
								method : "POST",
								data : JSON.stringify(data),
								responseType: 'arraybuffer',
								headers: {
								'Content-type': 'application/json',
								'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								}
							}).success(
									function(data, status, header, config,
											statusText) {
										var byteArray = new Uint8Array(data);
					                    if(byteArray.length > 0)
					                   	{ 
											var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
										    var link=document.createElement('a');
										    link.href=window.URL.createObjectURL(blob);
										    link.download="CorrectiveMaintainance.xls";
										    link.click();
										    toaster.pop("Success", "Success", "File downloaded Successfully");
								 }
					           else
					           	 {
					            	toaster.pop('error', status, "There is some problem in downloading file");
					           	  }
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return result;
						},
						getLoginUserdetails : function(id) {
							console.log("inside getLoginUserdetails");
							var promise = $http({
								url : "getLoginDetails/" + id,
								method : "GET"
							}).success(
									function(data, status, header, config,
											statusText) {

									}).error(
									function(data, status, header, config,
											statusText) {

										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response;
							})
							return promise;
						},
						searchOhsDetails : function(data) {
							console.log("inside searchOhsDetails main");
							var result = $http({
								url : "searchOhsFormData.htm",
								method : "POST",
								data : JSON.stringify(data)
							}).success(
									function(data, status, header, config,
											statusText) {
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return result;
						},
						exportforOhstData : function(data){
							console.log("inside exportforOhstData main");
							var result = $http({
								url : "exportOhsFormData.htm",
								method : "POST",
								data : JSON.stringify(data),
								responseType: 'arraybuffer',
								headers: {
								'Content-type': 'application/json',
								'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
								}
							}).success(
									function(data, status, header, config,
											statusText) {
										 var byteArray = new Uint8Array(data);
					                    if(byteArray.length > 0)
					                 	{ 
												var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
											    var link=document.createElement('a');
											    link.href=window.URL.createObjectURL(blob);
											    link.download="ohsDataExport.xls";
											    link.click();
											    toaster.pop("Success", "Success", "File downloaded Successfully");
										 }
				                    	  else
				                    		  {
				                    		  	toaster.pop('error', status, "There is some problem in downloading file");
				                    		  }
																			
									}).error(
									function(data, status, header, config,
											statusText) {
										if (!status === 901)
											toaster.pop('error', status,
													statusText);
									}).then(function(response) {
								return response.data;
							})
							return result;
						}
						
					,
                deviationReport: function(data)
        		{
        			var result = $http({
        				url : "deviationReport/search",
        				method : "POST",
        				data : data
        			}).success(function(data, status, header, config, statusText)
        			{
        				
        			}).error(function(data, status, header, config, statusText)
        			{
        				if(!status === 901)
        					toaster.pop('error', status, statusText);
        			}).then(function(response)
        			{
        				console.log("result is "+response);
        				return response;
        			})
        			return result;
        		},
        		deviationReportExport: function(data)
        		{
        			var result = $http({
        				url : "exportDeviation.htm",
        				method : "POST",
        				data : data,
        				responseType: 'arraybuffer',
        				headers: {
        				'Content-type': 'application/json',
        				'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        				}
        			}).success(function(data, status, header, config, statusText)	
        			{
        				 var byteArray = new Uint8Array(data);
	                    if(byteArray.length > 0)
	                 	{ 
	        				var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
						    var link=document.createElement('a');
						    link.href=window.URL.createObjectURL(blob);
						    link.download="deviationReportExport.xls";
						    link.click();
						    toaster.pop("Success", "Success", "File downloaded Successfully");
        				}
        				else
        				{
        					toaster.pop('error', status, "There is some problem in downloading file");
        				}
        				
        			}).error(function(data, status, header, config, statusText)
        			{
        				if(!status === 901)
        					toaster.pop('error', status, statusText);
        			}).then(function(response)
        			{
        				console.log("result is "+response);
        				return response;
        			})
        			return result;
        		},
        		
        		exportPM:function(data)
        		{
        			var result = $http({
        				url : "exportPM.htm",
        				method : "POST",
        				data : data,
        				responseType: 'arraybuffer',
        				headers: {
        				'Content-type': 'application/json',
        				'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        				}
        			}).success(function(data, status, header, config, statusText)
        			{
        			
        				 var byteArray = new Uint8Array(data);
	                    if(byteArray.length > 0)
	                 	{ 
		        				var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
							    var link=document.createElement('a');
							    link.href=window.URL.createObjectURL(blob);
							    link.download="pmExport.xls";
							    link.click();
							    toaster.pop("Success", "Success", "File downloaded Successfully");s
                    	}
                    	else
              		  	{
              		  			toaster.pop('error', status, "There is some problem in downloading file");
              		  	}
        			}).error(function(data, status, header, config, statusText)
        			{
        				if(!status === 901)
        					toaster.pop('error', status, statusText);
        			}).then(function(response)
        			{
        				console.log("result is "+response);
        				return response;
        			})
        			return result;
        		},deviationReport: function(data)
		        		{
		        			var result = $http({
		        				url : "deviationReport/search",
		        				method : "POST",
		        				data : data
		        			}).success(function(data, status, header, config, statusText)
		        				
		        			{
		        				
		        			}).error(function(data, status, header, config, statusText)
		        			{
		        				if(!status === 901)
		        					toaster.pop('error', status, statusText);
		        			}).then(function(response)
		        			{
		        				console.log("result is "+response);
		        				return response;
		        			})
		        			return result;
		        		},
		        		/*deviationReportExport: function(data)
		        		{
		        			var result = $http({
		        				url : "exportDeviation.htm",
		        				method : "POST",
		        				data : data
		        			}).success(function(data, status, header, config, statusText)
		        			{
		        				
		        			}).error(function(data, status, header, config, statusText)
		        			{
		        				if(!status === 901)
		        					toaster.pop('error', status, statusText);
		        			}).then(function(response)
		        			{
		        				console.log("result is "+response);
		        				return response;
		        			})
		        			return result;
		        		},*/
		        		   getexportMDMReport : function(data)
		        		   {
		        			var promise = $http({
		        			url : "exportmdm.htm",
		        			method : "POST",
                            data : JSON.stringify(data),
                            responseType: 'arraybuffer',
                            headers: {
                            'Content-type': 'application/json',
                            'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                            }
                    }).success(function(data, status, header, config, statusText)
                    {
                    	 var byteArray = new Uint8Array(data);
		                    	if(byteArray.length > 0)
		                 	  	{  
			                    		var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
			                    		var link=document.createElement('a');
									    link.href=window.URL.createObjectURL(blob);
									    link.download="exportMdm.xls";
									    link.click();	
									    toaster.pop("Success", "Success", "File downloaded Successfully");
			                    	}
			                    	else
			                    	{
			                    	 	toaster.pop('error', status, "There is some problem in downloading file");
			                    	}
                    		  
                    }).error(function(data, status, headers, config, statusText)
                    {
                        if(!status === 901)
                         toaster.pop('error', status, statusText);
                    }).then(function(response)
                    {
                        return response;
                    })
                    return promise;
                },
               
                 
                getexportLocationReport : function(data)
                {
                   
                    var promise = $http({
                        url : "exportLocation.htm",
                        method : "POST",
                        data : JSON.stringify(data),
                       responseType: 'arraybuffer'
                      }).success(function(data, status, header, config, statusText)
                    {	
                    	  var byteArray = new Uint8Array(data);
	                    	if(byteArray.length > 0)
	                 	  	{  
                    	  var blob = new Blob([data], {type: "octet/stream"});
                    	  saveAs(blob, "location.zip");
                    	  toaster.pop("Success", "Success", "File downloaded Successfully");
	                 		}
	                    	else
	                    	{
	                    	 	toaster.pop('error', status, "There is some problem in downloading file");
	                    	}
            		  
                          
                    }).error(function(data, status, headers, config, statusText)
                    {
                        if(!status === 901)
                                                toaster.pop('error', status, statusText);
                    }).then(function(response)
                    {
                        return response;
                    })
                    return promise;
                },
                exportForGetLoginDetailsExport: function(id) {
					var promise = $http({
						url : "getLoginDetailsExport/"+id,
						method : "GET",
						responseType: 'arraybuffer',
						headers: {
						'Content-type': 'application/json',
						'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
						}
					}).success(
							function(data, status, header, config,
									statusText) {
								var byteArray = new Uint8Array(data);
			                    if(byteArray.length > 0)
			                 	{ 
									var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
								    var link=document.createElement('a');
								    link.href=window.URL.createObjectURL(blob);
								    link.download="LoginDetailsExport.xls";
								    link.click();
									toaster.pop("Success", "Success", "File downloaded Successfully");
								 }
		                    	else
		                    	{
		                    	  	toaster.pop('error', status, "There is some problem in downloading file");
		                    	}
							}).error(
							function(data, status, headers, config,
									statusText) {
								if (!status === 901)
									toaster.pop('error', status,
											statusText);
							}).then(function(response) {
						return response.data;
					})
					return promise;
				},
		        		
                addTechnology :	function(data) {
					var result = $http({
						url : "addTechnology.htm",
						method : "POST",
						data : data
					}).success(
							function(data, status, header, config,
									statusText) {
							}).error(
							function(data, status, header, config,
									statusText) {
								if (!status === 901)
									toaster.pop('error', status,
											statusText);
							}).then(function(response) {
						return response;
					})
					return result;
				
		        		
				},	
		        	
				getPopCode : function(data) {
					console.log("inside getPopCode service", data);

					var promise = $http({
						url : "getPopByTerritoryCode.htm",
						method : "POST",
						data : JSON.stringify(data)
					}).success(
							function(data, status, header, config,
									statusText) {
							}).error(
							function(data, status, header, config,
									statusText) {
								if (!status === 901)
									toaster.pop('error', status,
											statusText);
							}).then(function(response) {
						return response.data;
					})
					return promise;

				},
				
				getUserByPop : function(data) {
					console.log("inside getUserByPop service", data);

					var promise = $http({
						url : "getUserByPop.htm",
						method : "POST",
						data : JSON.stringify(data)
					}).success(
							function(data, status, header, config,
									statusText) {
							}).error(
							function(data, status, header, config,
									statusText) {
								if (!status === 901)
									toaster.pop('error', status,
											statusText);
							}).then(function(response) {
						return response.data;
					})
					return promise;

				}
		        		
					}
				});

				
app.factory("sharedProperties", function($http, $log, toaster, $location) {
	var property = null;

	return {
		getProperty : function() {
			return property;
		},
		setProperty : function(value) {
			property = value;
		}
	};
});