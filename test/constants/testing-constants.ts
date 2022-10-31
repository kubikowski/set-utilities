/**
 * Value Overlaps:
 *
 * - 0: shared by setA, setB, and setC
 * - 1: shared by setA, setB
 * - 2: shared by setA, setC
 * - 3: shared by setB, setC
 * - 4: unique to setA
 * - 5: unique to setB
 * - 6: unique to setC
 * - 7: unique to setD
 * - 8: unique to setE
 * - 9: unique to setF
 */

/* contains: 0 */
export const minimal = new Set<number>([ 0 ]);
/* contains: 0, 1, 2, 4 */
export const setA = new Set<number>([ 0, 1, 2, 4 ]);
/* contains: 0, 1, 3, 5 */
export const setB = new Set<number>([ 0, 1, 3, 5 ]);
/* contains: 0, 2, 3, 6 */
export const setC = new Set<number>([ 0, 2, 3, 6 ]);
/* contains: 7 */
export const setD = new Set<number>([ 7 ]);
/* contains: 7 */
export const setE = new Set<number>([ 8 ]);
/* contains: 7 */
export const setF = new Set<number>([ 9 ]);

/* the universal set: U, contains: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 */
export const universal = new Set<number>([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
/* the empty set: ∅, contains: none */
export const empty = new Set<never>();
