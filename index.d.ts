// FP
export function curry<Args extends any[], R>(fn: (...args: Args) => R): (...args: Partial<Args>) => any;
export function compose<T>(...fns: Array<(arg: T) => T>): (arg: T) => T;
export function mapAsync<T, R>(arr: T[], fn: (item: T) => Promise<R> | R): Promise<R[]>;
export function filterAsync<T>(arr: T[], fn: (item: T) => Promise<boolean> | boolean): Promise<T[]>;

// Geometry
export interface Point { x: number; y: number; }
export function distance(p1: Point, p2: Point): number;
export function rotatePoint(p: Point, angle: number): Point;
export function polygonArea(points: Point[]): number;

// Calculus
export type MathFunction = (x: number) => number;
export function derivative(f: MathFunction, x: number, h?: number): number;
export function integrate(f: MathFunction, a: number, b: number, n?: number): number;
