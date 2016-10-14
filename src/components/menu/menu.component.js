/** @type {Object} */
export const MenuComponent = {
	bindings: {
		list: '<'
	},
	template: `
		<ul>
			<li ng-repeat="item in $ctrl.list">
				<a ui-sref="{{item.name}}">{{item.text}}</a>
			</li>
		</ul>
	`
};

export default MenuComponent;
