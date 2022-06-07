export const serialize = (
    obj: any,
    space = 4,
    callback?: (this: any, key: string, value: any) => any
): string => JSON.stringify(obj, callback, space)

export const deserialize = (obj: string, callback?: (this: any, key: string, value: any) => any): any =>
    JSON.parse(obj, callback)
