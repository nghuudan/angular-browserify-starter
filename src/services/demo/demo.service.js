/**
 * Service for the demo list
 */
export default class DemoService {
	/**
	 * @ngInject
	 * constructor - Injects the $timeout service from Angular
	 *
	 * @param  {Service} $timeout Angular service for timeouts
	 */
	constructor($timeout) {
		this._$timeout = $timeout;

		this._demoList = [
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

	/**
	 * Finds the demo by id in the demoList
	 *
	 * @param  {Number} demoId	id of the demo to find
	 * @return {Object}			demo with the matching id
	 */
	_findDemoById(demoId) {
		var id = parseInt(demoId, 10);
		var result = this._demoList.filter(demo => {
			return demo.id === id;
		});
		return result[0];
	}

	/**
	 * Gets the demoList and returns a promise
	 *
	 * @return {Promise}		promise with the demoList
	 */
	getDemoList() {
		return this._$timeout(() => this._demoList, 200);
	}

	/**
	 * Gets a demo by id and returns a promise
	 *
	 * @param  {Number} demoId	id of the demo to get
	 * @return {Promise}		promise with the demo
	 */
	getDemoById(demoId) {
		var demo = this._findDemoById(demoId);
		return this._$timeout(() => demo, 200);
	}
}
