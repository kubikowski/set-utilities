export function map<T, R>(set: Set<T>, mappingFunction: (element: T) => R): Set<R>;
export function map<T, R>(set: ReadonlySet<T>, mappingFunction: (element: T) => R): ReadonlySet<R>;

export function map<T, R>(set: ReadonlySet<T>, mappingFunction: (element: T) => R): ReadonlySet<R> {
	const resultSet = new Set<R>();

	for (const element of set) {
		resultSet.add(mappingFunction(element));
	}

	return resultSet;
}
