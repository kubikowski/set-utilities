export function filter<T>(set: Set<T>, filterFunction: (element: T) => boolean): Set<T>;
export function filter<T>(set: ReadonlySet<T>, filterFunction: (element: T) => boolean): ReadonlySet<T>;

export function filter<T>(set: ReadonlySet<T>, filterFunction: (element: T) => boolean): ReadonlySet<T> {
	const resultSet = new Set<T>();

	for (const element of set) {
		if (filterFunction(element)) {
			resultSet.add(element);
		}
	}

	return resultSet;
}
