// Type definitions for seamless-immutable
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: Toran Billups <https://github.com/toranb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'seamless-immutable' {
  interface MergeConfig {
    deep?: boolean;
    merger?: Function;
  }

  interface Options {
    prototype?: any;
  }

  interface AsMutableOptions {
    deep: boolean;
  }

  export interface ImmutableObject<T> {
    set(property: string, value: any): ImmutableObject<any>;
    setIn(propertyPath: Array<string>, value: any): ImmutableObject<any>;

    asMutable(): T;
    asMutable(opts: AsMutableOptions): T;

    merge(part: any, config?: MergeConfig): ImmutableObject<T> & T;

    update(property: string, updaterFunction: (value: any, ...additionalParamters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
    updateIn(propertyPath: Array<string>, updaterFunction: (value: any, ...additionalParamters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;

    without(property: string): ImmutableObject<any>;
    without(...properties: string[]): ImmutableObject<any>;
    without(filter: (value: any, key: string) => boolean): ImmutableObject<any>;
  }

  export interface ImmutableArray<T> {
    asMutable(): Array<T>;
    asMutable(opts: AsMutableOptions): Array<T>;
    asObject(toKeyValue: (item: T) => Array<any>): ImmutableObject<T>;
    flatMap(mapFunction: (item: T) => Array<any>): ImmutableArray<any>;
  }

  // an immutable object is both of Type T (i.e., looks like a normal T) and of type Immutable<T>
  export type Immutable<T> = T & (ImmutableObject<T> | ImmutableArray<T>);
  export default function Immutable<T>(obj: any): Immutable<T>;

  export function from<T>(obj: Array<T>, options?: Options): Array<T> & ImmutableArray<T>;
  export function from<T>(obj: T, options?: Options): T & ImmutableObject<T>;

  export function isImmutable(target: any): boolean;
  export function ImmutableError(message: string): Error;
}
