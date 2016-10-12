export default class DemoService {
	//@ngInject
	constructor($timeout) {
		this.$timeout = $timeout;

		this.demoList = [
			{
				id: 1,
				name: 'Demo Name 1',
				text: 'Demo Text 1'
			},
			{
				id: 2,
				name: 'Demo Name 2',
				text: 'Demo Text 2'
			},
			{
				id: 3,
				name: 'Demo Name 3',
				text: 'Demo Text 3'
			}
		];
	}
	_findDemoById(demoId) {
		var id = parseInt(demoId, 10);
		var result = this.demoList.filter(demo => {
			return demo.id === id;
		});
		return result[0];
	}
	getDemoList() {
		return this.$timeout(() => this.demoList, 200);
	}
	getDemoById(demoId) {
		var demo = this._findDemoById(demoId);
		return this.$timeout(() => demo, 200);
	}
}
