export function hasViewTakeOrderPermission(permissions) {
	return permissions.find(p => p === 'view-take-order');
}

export function hasViewOrdersPermission(permissions) {
	return permissions.find(p => p === 'view-orders');
}

export function hasViewShowcasePermission(permissions) {
	return permissions.find(p => p === 'view-showcase');
}

export function hasViewTransactionsPermission(permissions) {
	return permissions.find(p => p === 'view-transactions');
}

export function hasViewCafeteriaInventoryPermission(permissions) {
	return permissions.find(p => p === 'view-cafeteria-inventory');
}

export function hasViewCafeteriaVendorsPermission(permissions) {
	return permissions.find(p => p === 'view-cafeteria-vendors');
}

export function hasViewCafeteriaRequisitionsPermission(permissions) {
	return permissions.find(p => p === 'view-cafeteria-requisitions');
}
