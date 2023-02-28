import { EventEmitter } from 'events';
import c from './c';
export const event = new EventEmitter();

let b: string = "b";

export const d = c;

/**
 * 2つの数値を加算する関数
 *
 * @example
 * ```js
 * add(1, 2);
 * 
 * // -> 3
 * ```
 * @param {number} a 加算される数値
 * @param {number} b 加算する数値
 * @returns {number} 加算結果の数値
 */
export function add(a: number, b: number): number {
  return a + b;
}