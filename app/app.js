import angular from 'angular';
import skillsData from './data/skills'

let skillsWatcher = angular.module('skillsWatcher', []);

let skillsController = skillsWatcher.controller('skillsController', function skillsController($scope) {
	$scope.skills = skillsData;
	$scope.showSkill = function(skill) {
		$scope.activeSkill = skill;
		$scope.isActiveSkillSelected = true;
	};

	$scope.addSkill = function() {
		skillsData.push({
			name: $scope.newSkill,
			demandChart: 'http://www.itjobswatch.co.uk/charts/contract-demand-trend.aspx?s=' + $scope.newSkill + '&l=london'
		});
	}
});
