app.service('ProfileService', [

	function() {
		var self = this;
		this.list = [];
		this.temp = {};

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
	}
]);