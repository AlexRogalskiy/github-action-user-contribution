import path from 'path'
import {
    accessSync,
    closeSync,
    constants,
    createWriteStream,
    existsSync,
    MakeDirectoryOptions,
    mkdirSync,
    openSync,
    promises,
    statSync,
    writeFile,
    WriteStream,
} from 'fs'

import { coreInfo } from './loggers'

// eslint-disable-next-line unicorn/no-object-as-default-parameter
export const ensureDirExists = (dir: string, options: MakeDirectoryOptions = { recursive: true }): void => {
    existsSync(dir) || mkdirSync(dir, options)
}

export const getFilesizeInBytes = (filename: string): number =>
    // return await fs.promises.stat(file)).size
    statSync(filename).size

export const storeData = (filePath: string, fileName: string, data: any): string => {
    ensureDirExists(filePath)

    const targetPath = path.join(filePath, fileName)

    coreInfo(`Storing data to target file: ${targetPath}`)

    writeFile(targetPath, data, err => {
        if (err) {
            throw err
        }
    })

    return targetPath
}

export const isFileExists = (fileName: string, mode = constants.F_OK | constants.R_OK): boolean => {
    try {
        accessSync(fileName, mode)

        return true
    } catch {
        return false
    }
}

export const getSizeInBytesAsync = async (filename: string): Promise<number> =>
    (await promises.stat(filename)).size

export const getSizeInBytes = (filename: string): number => statSync(filename).size

export const createWritableStream = (filename: string): WriteStream => {
    closeSync(openSync(filename, 'w'))

    return createWriteStream(filename, { flags: 'w' })
}
