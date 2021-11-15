/**
 * Optional
 * @description Type representing [`Optional`] in TypeScript: `T | null | undefined`
 */
export type Optional<T> = T | null | undefined
//--------------------------------------------------------------------------------------------------
/**
 * Keys
 * @description Type representing [`Keys`] in TypeScript: `T`
 */
export type Keys<T> = keyof T
//--------------------------------------------------------------------------------------------------
/**
 * Processor
 * @description Type representing processor function type in TypeScript
 * @example
 *   type Processor = (v) => return new String(v)
 */
export type Processor<T, V> = (v: T) => V
//--------------------------------------------------------------------------------------------------
