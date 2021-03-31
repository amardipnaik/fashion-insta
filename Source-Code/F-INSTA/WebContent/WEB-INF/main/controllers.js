app.controller("mainController", function($rootScope,$location, $window, $scope, $log, $http, $timeout, mainService, $location, toaster ,localStorageService,blockUI)
{
	$log.info('In Main controller');
	
	$scope.userList = {
			
		operation:'getUserDetails'
	}
	
	mainService.loggedInUserData(angular.copy($scope.userList)).then(function(result)
	{
	/*	$timeout(function()
				{
					$rootScope.$broadcast("unblockui")
				}, 200);*/
		
		$scope.userData=result;
		
		localStorageService.set('loggedInUser',$scope.userData)
		$rootScope.loggedInUserData = angular.copy($scope.userData);
		
		$log.info(' loggedInUserData Details main ',localStorageService.get('loggedInUser'));
		
		$rootScope.loggedInuserName=$scope.userData.userBean[0].login;
		$rootScope.loggedInuserId=$scope.userData.userBean[0].id;
				console.log("login user name::"+$rootScope.loggedInuserName);
		localStorageService.set('loggedInUserData',JSON.stringify($rootScope.loggedInUserData));
		/*$scope.userData=localStorageService.get("loggedInUserData");*/
		
		$scope.deviceUsers=localStorageService.get('loggedInUserData').deviceUserList;
	
		angular.forEach(localStorageService.get('loggedInUserData'),
				function(value, key) {

					if (key == "allUserList") {
						$scope.assignNameList = value;
						localStorageService.set('assignNameList',$scope.assignNameList)
						

					}
				});
		
	});

	
	
	$scope.showLocationTrackerReport=false;
	$scope.showMdmReport=false;
	$scope.viewTicketModule=false;
	$scope.viewLoginReport=false;
	$scope.viewDistanceTravelledReport=false;
	$scope.viewDeviationReport=false;
	$scope.viewOHSdata=false;
	$scope.showReports=false;
	$scope.showAddJob=false;
	
			
if((localStorageService.get('loggedInUserData'))!=null && (localStorageService.get('loggedInUserData'))!=undefined){

	$scope.activityList=(localStorageService.get('loggedInUserData')).userActivityList;
	
	angular.forEach($scope.activityList,function(value,index){
		if(value.code==="TCTS_ACCESS_LOCATION_TRACKER_REPORT")
			$scope.showLocationTrackerReport=true;
		if(value.code==="TCTS_ACCESS_MDM_REPORT")
			$scope.showMdmReport=true;
		if(value.code==="TCTS_ACCESS_MDM_REPORT")
			$scope.showMdmReport=true;
		if(value.code==="TCTS_ACCESS_VIEW_TICKET_MODULE")
			$scope.viewTicketModule=true;
		if(value.code==="TCTS_ACCESS_LOGIN_REPORT")
			$scope.viewLoginReport=true;
		if(value.code==="TCTS_ACCESS_OHS_REPORT")
			$scope.viewOHSdata=true;
		if(value.code==="TCTS_ACCESS_DISTANCE_TRAVELLED")
			$scope.viewDistanceTravelledReport=true;
		if(value.code==="TCTS_ACCESS_DEVIATION_REPORT")
			$scope.viewDeviationReport=true;
		if(value.code==="TCTS_ACCESS_REPORTS")
			$scope.showReports=true;
		if(value.code==="TCTS_ACCESS_ADD_JOB")
			$scope.showAddJob=true;

	})
}	
	
	
	$scope.userDivToggle = true; 
	$scope.masterDivToggle = false; 
	$scope.locationDivToggle=true
	$scope.accountactive = true;
	$scope.changePass=true;
	$scope.reportDivToggle=true;
	
	$scope.masterDiv = {"background-color" : "#1f1f1f"};
	$scope.masterTxt = {"color" : "white"};
	$scope.masterImg = {"background-image": "url('images/menu_over_master.png')"};
	
	console.log("Current URL-->"+$location.path());
	//Display tabs under user
	if($location.path()=='/user.htm' || $location.path()=='/addUser.htm' || $location.path()=='/detailsUser.htm' || $location.path()=='/modifyUser.htm'
		|| $location.path()=='/role.htm' || $location.path()=='/roleTerritoryList.htm' || $location.path()=='/profile.htm' || $location.path()=='/activityprofilemapping.htm'
		|| $location.path()=='/activity.htm'){
		$scope.userDivToggle = false;
		$scope.masterDivToggle = true;
		$scope.userDiv = {"background-color" : "#1f1f1f",};
		$scope.userTxt = {"color" : "white"};
		$scope.userImg = {"background-image": "url('images/menu_over_user.png')"};
		
		$scope.masterDiv = {"background-color" : "transparent"};
		$scope.masterTxt = {"color" : "#a3a3a3"};
		$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
	}
	else{//Display tabs under masters
		if($location.path()=='/territory.htm' || $location.path()=='/detailsTerritory.htm' || $location.path()=='/addTerritory.htm'
			|| $location.path()=='/pop.htm' || $location.path()=='/addpop.htm' || $location.path()=='/detailsPOP.htm'){
			$scope.masterDivToggle = false;
			
			$scope.masterDiv = {"background-color" : "#1f1f1f"};
			$scope.masterTxt = {"color" : "white"};
			$scope.masterImg = {"background-image": "url('images/menu_over_master.png')"};
		}
		else{//Display tabs under dash board
			if($location.path()=='/locationTracker.htm'){
				$scope.locationDivToggle = false;
				$scope.masterDivToggle = true;
				
				$scope.dashboardDiv = {"background-color" : "#1f1f1f"};
				$scope.dashboardTxt = {"color" : "white"};
				$scope.dashboardImg = {"background-image": "url('images/menu_over_dashboard.png')"};
				
				$scope.masterDiv = {"background-color" : "transparent"};
				$scope.masterTxt = {"color" : "#a3a3a3"};
				$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
				
			}else{//Display tabs under reports
				if($location.path()=='/locationTrackerReport.htm' || $location.path()=='/mdmReport.htm' || $location.path()=='/ticket.htm' 
					|| $location.path()=='/workOrderTicket.htm' || $location.path()=='/srsTicket.htm' || $location.path()=='/details.htm' 
					|| $location.path()=='/pmTicketDetails.htm' || $location.path()=='/srsDetails.htm' || $location.path()=='/ohsList.htm' 
					|| $location.path()=='/loginReport.htm'|| $location.path()=='/loginUserDetails.htm' || $location.path()=='/distanceTravelled.htm' 
					|| $location.path()=='/deviationReport.htm'|| $location.path()=='/ohsFormData.htm')
					{//Display tabs under reports
					$scope.reportDivToggle = false;
					$scope.masterDivToggle = true;
					
					$scope.reportsDiv = {"background-color" : "#1f1f1f"};
					$scope.reportsTxt = {"color" : "white"};
					$scope.reportsImg = {"background-image": "url('images/menu_over_report.png')"};
					
					$scope.masterDiv = {"background-color" : "transparent"};
					$scope.masterTxt = {"color" : "#a3a3a3"};
					$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
					
					}else{//Display tabs under my account
						if($location.path()=='/changePassword.htm')
							{
							$scope.accountactive = false;
							$scope.masterDivToggle = true;
							
							$scope.accountDiv = {"background-color" : "#1f1f1f"};
							$scope.accountTxt = {"color" : "white"};
							$scope.accountImg = {"background-image": "url('images/menu_over_myaccount.png')"};
							
							$scope.masterDiv = {"background-color" : "transparent"};
							$scope.masterTxt = {"color" : "#a3a3a3"};
							$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
							
							}else{//Display tabs under add job
								if($location.path()=='/incidentTicket.htm' || $location.path()=='/workOrder.htm' || $location.path()=='/srs.htm')
									{
										$scope.masterDivToggle = true;
										$scope.jobDiv = {"background-color" : "#1f1f1f"};
										$scope.jobTxt = {"color" : "white"};
										$scope.jobImg = {"background-image": "url('images/add_job.png')"};
										
										$scope.masterDiv = {"background-color" : "transparent"};
										$scope.masterTxt = {"color" : "#a3a3a3"};
										$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
									}
								}
						}
				}
			}
		}
	$scope.customRoute = function(val) {
		$log.info('value',val);
		
		

		
		
		if (val === 'user') 
		{
			$scope.userDiv = {"background-color" : "#1f1f1f",};
			$scope.userTxt = {"color" : "white"};
			$scope.userImg = {"background-image": "url('images/menu_over_user.png')"};
			
			$scope.masterDiv = {"background-color" : "transparent"};
			$scope.masterTxt = {"color" : "#a3a3a3"};
			$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
			
			$scope.jobDiv = {"background-color" : "transparent"};
			$scope.jobTxt = {"color" : "#a3a3a3"};
			$scope.jobImg = {"background-image": "url('images/over_add_job.png')"};
			
			$scope.dashboardDiv = {"background-color" : "transparent"};
			$scope.dashboardTxt = {"color" : "#a3a3a3"};
			$scope.dashboardImg = {"background-image": "url('images/menuDashboard.png')"};
			
			$scope.accountDiv = {"background-color" : "transparent"};
			$scope.accountTxt = {"color" : "#a3a3a3"};
			$scope.accountImg = {"background-image": "url('images/menuMyaccount.png')"};
			
			$scope.reportsDiv = {"background-color" : "transparent"};
			$scope.reportsTxt = {"color" : "#a3a3a3"};
			$scope.reportsImg = {"background-image": "url('images/menuReport.png')"};
			
			$scope.userDivToggle = false; 
			$scope.masterDivToggle = true; 
			$scope.locationDivToggle=true;
			$scope.changePass=true;
			$log.info(' In value ',val);
			$location.path("/user.htm");
			$scope.accountactive = true;
			$scope.reportDivToggle=true;
		} 
		else if(val === 'masters')
		{
			$scope.masterDiv = {"background-color" : "#1f1f1f"};
			$scope.masterTxt = {"color" : "white"};
			$scope.masterImg = {"background-image": "url('images/menu_over_master.png')"};
			
			$scope.userDiv = {"background-color" : "transparent"};
			$scope.userTxt = {"color" : "#a3a3a3"};
			$scope.userImg = {"background-image": "url('images/menuUser.png')"};
			
			$scope.jobDiv = {"background-color" : "transparent"};
			$scope.jobTxt = {"color" : "#a3a3a3"};
			$scope.jobImg = {"background-image": "url('images/over_add_job.png')"};
			
			$scope.dashboardDiv = {"background-color" : "transparent"};
			$scope.dashboardTxt = {"color" : "#a3a3a3"};
			$scope.dashboardImg = {"background-image": "url('images/menuDashboard.png')"};
			
			$scope.accountDiv = {"background-color" : "transparent"};
			$scope.accountTxt = {"color" : "#a3a3a3"};
			$scope.accountImg = {"background-image": "url('images/menuMyaccount.png')"};
			
			$scope.reportsDiv = {"background-color" : "transparent"};
			$scope.reportsTxt = {"color" : "#a3a3a3"};
			$scope.reportsImg = {"background-image": "url('images/menuReport.png')"};
			
			$log.info(' In value ',val);
			$location.path("/territory.htm");
			$scope.masterDivToggle = false; 
			$scope.locationDivToggle=true
			$scope.userDivToggle = true; 
			$scope.accountactive = true;
			$scope.reportDivToggle=true;
			$scope.changePass=true;
		    
		}else if(val === 'addJob')
		{
			$scope.jobDiv = {"background-color" : "#1f1f1f"};
			$scope.jobTxt = {"color" : "white"};
			$scope.jobImg = {"background-image": "url('images/add_job.png')"};
			
			$scope.userDiv = {"background-color" : "transparent"};
			$scope.userTxt = {"color" : "#a3a3a3"};
			$scope.userImg = {"background-image": "url('images/menuUser.png')"};
			
			$scope.masterDiv = {"background-color" : "transparent"};
			$scope.masterTxt = {"color" : "#a3a3a3"};
			$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
			
			$scope.dashboardDiv = {"background-color" : "transparent"};
			$scope.dashboardTxt = {"color" : "#a3a3a3"};
			$scope.dashboardImg = {"background-image": "url('images/menuDashboard.png')"};
			
			$scope.accountDiv = {"background-color" : "transparent"};
			$scope.accountTxt = {"color" : "#a3a3a3"};
			$scope.accountImg = {"background-image": "url('images/menuMyaccount.png')"};
			
			$scope.reportsDiv = {"background-color" : "transparent"};
			$scope.reportsTxt = {"color" : "#a3a3a3"};
			$scope.reportsImg = {"background-image": "url('images/menuReport.png')"};
			
			$log.info(' In value ',val);
			$location.path("/incidentTicket.htm");
			$scope.locationDivToggle=true
			$scope.masterDivToggle = true; 
			$scope.userDivToggle = true; 
			$scope.changePass=true;
			$scope.reportDivToggle=true;
			$scope.accountactive = true;
		}
		else if(val === 'location')
		{	
			$scope.dashboardDiv = {"background-color" : "#1f1f1f"};
			$scope.dashboardTxt = {"color" : "white"};
			$scope.dashboardImg = {"background-image": "url('images/menu_over_dashboard.png')"};
			
			$scope.userDiv = {"background-color" : "transparent"};
			$scope.userTxt = {"color" : "#a3a3a3"};
			$scope.userImg = {"background-image": "url('images/menuUser.png')"};
			
			$scope.masterDiv = {"background-color" : "transparent"};
			$scope.masterTxt = {"color" : "#a3a3a3"};
			$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
			
			$scope.jobDiv = {"background-color" : "transparent"};
			$scope.jobTxt = {"color" : "#a3a3a3"};
			$scope.jobImg = {"background-image": "url('images/over_add_job.png')"};
			
			$scope.accountDiv = {"background-color" : "transparent"};
			$scope.accountTxt = {"color" : "#a3a3a3"};
			$scope.accountImg = {"background-image": "url('images/menuMyaccount.png')"};
			
			$scope.reportsDiv = {"background-color" : "transparent"};
			$scope.reportsTxt = {"color" : "#a3a3a3"};
			$scope.reportsImg = {"background-image": "url('images/menuReport.png')"};
			
			$log.info(' In value ',val);
			$location.path("/locationTracker.htm");
			$scope.masterDivToggle = true; 
			$scope.userDivToggle = true; 
			$scope.locationDivToggle=false;
			$scope.changePass=true;
			$scope.accountactive = true;
			$scope.reportDivToggle=true;
		}
		else if (val === 'account') {
			
			$log.info(' In value ', val);
			// $location.path("/territory.htm");
			$scope.masterDivToggle = true;
			$scope.userDivToggle = true;
			$scope.accountactive = false;
			$scope.locationDivToggle=true;
			$scope.reportDivToggle=true;
		}
		
		else if(val === 'changePassword')
		{
			$scope.accountDiv = {"background-color" : "#1f1f1f"};
			$scope.accountTxt = {"color" : "white"};
			$scope.accountImg = {"background-image": "url('images/menu_over_myaccount.png')"};
			
			$scope.userDiv = {"background-color" : "transparent"};
			$scope.userTxt = {"color" : "#a3a3a3"};
			$scope.userImg = {"background-image": "url('images/menuUser.png')"};
			
			$scope.masterDiv = {"background-color" : "transparent"};
			$scope.masterTxt = {"color" : "#a3a3a3"};
			$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
			
			$scope.jobDiv = {"background-color" : "transparent"};
			$scope.jobTxt = {"color" : "#a3a3a3"};
			$scope.jobImg = {"background-image": "url('images/over_add_job.png')"};
			
			$scope.dashboardDiv = {"background-color" : "transparent"};
			$scope.dashboardTxt = {"color" : "#a3a3a3"};
			$scope.dashboardImg = {"background-image": "url('images/menuDashboard.png')"};
			
			$scope.reportsDiv = {"background-color" : "transparent"};
			$scope.reportsTxt = {"color" : "#a3a3a3"};
			$scope.reportsImg = {"background-image": "url('images/menuReport.png')"};
			
			$log.info(' In value ',val);
			$location.path("/changePassword.htm");
			$scope.masterDivToggle = true;
			$scope.userDivToggle = true;
			$scope.accountactive = false;
			$scope.locationDivToggle=true
			$scope.reportDivToggle=true;
		}
		else if (val === 'reports') {
			$scope.reportsDiv = {"background-color" : "#1f1f1f"};
			$scope.reportsTxt = {"color" : "white"};
			$scope.reportsImg = {"background-image": "url('images/menu_over_report.png')"};
			
			$scope.userDiv = {"background-color" : "transparent"};
			$scope.userTxt = {"color" : "#a3a3a3"};
			$scope.userImg = {"background-image": "url('images/menuUser.png')"};
			
			$scope.masterDiv = {"background-color" : "transparent"};
			$scope.masterTxt = {"color" : "#a3a3a3"};
			$scope.masterImg = {"background-image": "url('images/menuMaster.png')"};
			
			$scope.jobDiv = {"background-color" : "transparent"};
			$scope.jobTxt = {"color" : "#a3a3a3"};
			$scope.jobImg = {"background-image": "url('images/over_add_job.png')"};
			
			$scope.dashboardDiv = {"background-color" : "transparent"};
			$scope.dashboardTxt = {"color" : "#a3a3a3"};
			$scope.dashboardImg = {"background-image": "url('images/menuDashboard.png')"};
			
			$scope.accountDiv = {"background-color" : "transparent"};
			$scope.accountTxt = {"color" : "#a3a3a3"};
			$scope.accountImg = {"background-image": "url('images/menuMyaccount.png')"};
			
			$log.info(' In value ', val);
			$location.path("/locationTrackerReport.htm");
			$scope.masterDivToggle = true;
			$scope.userDivToggle = true;
			$scope.accountactive = true;
			$scope.locationDivToggle=true
			$scope.reportDivToggle=false;
		}
			
	}

$scope.route = function(val) {
	
	console.info("In Route request"+val);
	console.info("In Route request"+$scope.user);
	$location.path(val);
	
}

/*$scope.customroute =function()
{
$location.path('/getAllRole.htm');

}
$scope.routetoDash =function()
{
$location.path('/dashboard');

}*/

	
})
app.controller("resetpasswordController", function($rootScope, $scope, $log, $http, $timeout, $location, toaster ,localStorageService){
	
	$scope.resetPassword=function(oldPassword,newPassword){
		$scope.currentUser=localStorageService.get('loggedInUserData');
		console.log($scope.currentUser.userBean[0]);
//	loggedInUserData	if()
		
		
	};	

});