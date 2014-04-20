app.service('ProfileService', ['CalculateService',
	function(CalculateService) {
		var self = this;
		this.list = [];
		this.temp = {};
		this.total = 0;
		this.save = function() {
			function check(data) {
				return data.name && data.owner;
			}
			if (check(self.temp)) {
				self.list.push(self.temp);
				self.temp = {};
			} else {
				throw "Not input all data";
			}
		};
		this.check = function() {
			var sum = 0;
			angular.forEach(self.list, function(data, index) {
				var result = CalculateService.calculate(data);
				self.list[index].result = result;
				sum += result;
			});
			self.total = sum;
		};
	}
]);