app.config(function($routeProvider, $locationProvider)
{
	/*alert("config called");*/
	$routeProvider.when('/', {
		templateUrl : 'views/modules/territory/territory.html',
		controller : 'territoryController'
	})
	$routeProvider.when('/role.htm', {
		templateUrl : 'views/modules/role/role.html',
		controller : 'roleController'
	})
	.when('/roleTerritoryList.htm', {
		templateUrl : 'views/modules/role/territory-list.html',
	controller : 'editRoleTerritoryController'
	})
	.when('/territory.htm', {
		templateUrl : 'views/modules/territory/territory.html',
		controller : 'territoryController'
	})
	.when('/incidentTicket.htm', {
		templateUrl : 'views/modules/ticket/incidentTicket.html',
		controller : 'incidentTicketController'
	}).when('/profile.htm', {
		templateUrl : 'views/modules/profile/profile.html',
		controller : 'profileListController'
	}).when('/activity.htm', {
		templateUrl : 'views/modules/activity/activity.html',
		controller : 'activityController'
	})
	.when('/user.htm', {
		templateUrl : 'views/modules/user/user.html',
		controller : 'userController'
	})
	.when('/addUser.htm', {
		templateUrl : 'views/modules/user/addUser.html',
		controller : 'userController'
	})
	.when('/pop.htm', {
		templateUrl : 'views/modules/pop/pop.html',
		controller : 'popController'
	})
	
	.when('/detailsPOP.htm', {
		templateUrl : 'views/modules/pop/details/detailsPOP.html',
		controller : 'POPModifyController'
	})
	
	.when('/addpop.htm', {
		templateUrl : 'views/modules/pop/add/addPop.html',
		controller : 'addPOPController'
	})
	.when('/changePassword.htm', {
		templateUrl : 'views/modules/user/change-password.html',
		controller : 'changePasswordController'
	})
	.when('/addTerritory.htm', {
		templateUrl : 'views/modules/territory/add/addTerritory.html',
		controller : 'addTerritoryController'
	})
	.when('/locationTracker.htm', {
		templateUrl : 'views/modules/location/location.jsp',
		controller : 'locationController'
	})
	.when('/modifyUser.htm', {
		templateUrl : 'views/modules/user/modifyUser.html',
		controller : 'userModifyController'
	})
	
	.when('/detailsTerritory.htm', {
		templateUrl : 'views/modules/territory/details/detailsTerritory.html',
		controller : 'territoryModifyController'
	})	
		.when('/detailsUser.htm', {
		templateUrl : 'views/modules/user/details/detailsUser.html',
		controller : 'userModifyController'
	})
	.when('/resetPassword.htm', {
		controller : 'userResetPassword'
	})
	.when('/locationTrackerReport.htm', {
		templateUrl : 'views/modules/reports/locationTrackerReport.html',
		controller : 'locationTrackerReportController'
	})
	
	.when('/mdmReport.htm', {
		templateUrl : 'views/modules/mdm/mdmreport.html',
		controller : 'mdmReportController'
	})
	
	.when('/dummyDivFile.htm', {
		templateUrl : 'views/mainPage/DummyDivFile.html',
		controller : 'circleTerritoryController'
	})
	
	.when('/ticket.htm', {
		templateUrl : 'views/modules/Ticket.html',
		controller : 'incidentTicketController'
	})
	
	.when('/details.htm', {
		templateUrl : 'views/modules/Details.html',
		controller : 'ticketDetailsController'
	}).when('/activityprofilemapping.htm', {
		templateUrl : 'views/modules/profile/profile-activity-mapping.html',
		controller : 'editProfileActivityController'
	})
	.when('/loginReport.htm', {
		templateUrl : 'views/modules/loginreport/loginuserdetails.html',
		controller : 'loginReportController'
	})
	.when('/newReport2.htm', {
		templateUrl : 'views/modules/profile/profile-activity-mapping.html',
		controller : 'editProfileActivityController'
	})
	.when('/distanceTravelled.htm', {
		templateUrl : 'views/modules/user/distance-travelled.html',
		controller : 'distanceTravelledController'
	})
	.when('/workOrder.htm', {
		templateUrl : 'views/modules/ticket/workOrder.html',
		controller : 'preventiveMaintenanceController'
	})
	.when('/srs.htm', {
		templateUrl : 'views/modules/ticket/srs.html',
		controller : 'srsController'
	})
	.when('/workOrderTicket.htm', {
		templateUrl : 'views/modules/workOrderTicket.html',
		controller : 'preventiveMaintenanceController'
	})
	.when('/srsTicket.htm', {
		templateUrl : 'views/modules/srsTicket.html',
		controller : 'srsController'
	}).when('/loginUserDetails.htm', {
		templateUrl : 'views/modules/loginreport/logindetails.html',
		controller : 'loginDetailsController'
	})
	.when('/ohsList.htm', {
		templateUrl : 'views/modules/ohs/ohsList.html',
		controller : 'ohsListController'
	})
	.when('/pmTicketDetails.htm', {
		templateUrl : 'views/modules/pmTicketDetails.html',
		controller : 'pmTicketDetailsController'
	})
	.when('/srsDetails.htm', {
		templateUrl : 'views/modules/srsDetails.html',
		controller : 'srsTicketDetailsController'
	})
	.when('/ohsFormData.htm',{
		templateUrl : 'views/modules/ohs/ohsForm.html',
		controller : 'ohsReportController'
	})
	.when('/deviationReport.htm', {
		templateUrl : 'views/modules/deviationreport/deviation-report.html',
		controller : 'deviationReportController'
	})
	.when('/fileUpload.htm', {
		templateUrl : 'views/modules/uploadMaster/fileUpload.jsp',
		controller : 'uploadMasterController'
	})
	.when('/masterUploadSummary.htm', {
		templateUrl : 'views/modules/uploadMaster/masterUploadSummary.jsp',
		controller : 'uploadMasterController'
	})
	.when('/masterUploadError.htm', {
		templateUrl : 'views/modules/uploadMaster/masterUploadError.jsp',
		controller : 'uploadMasterController'
	})
});

