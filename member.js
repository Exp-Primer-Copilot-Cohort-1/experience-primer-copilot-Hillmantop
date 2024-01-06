function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/skills-member.html',
    scope: {
      member: '=',
      skills: '='
    },
    controller: function($scope) {
      $scope.getSkill = function(skillId) {
        return _.find($scope.skills, {id: skillId});
      };
    }
  };
}