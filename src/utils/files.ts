/*
 * Copyright (C) 2021 The SensibleMetrics team (http://sensiblemetrics.io/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *         http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * Copyright (C) 2021 The SensibleMetrics team (http://github.com/AlexRogalskiy)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *         http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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

export const getFilesizeInBytes = (filename: string): number => {
    //return await fs.promises.stat(file)).size
    return statSync(filename).size
}

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

export const getSizeInBytesAsync = async (filename: string): Promise<number> => {
    return (await promises.stat(filename)).size
}

export const getSizeInBytes = (filename: string): number => {
    return statSync(filename).size
}

export const createWritableStream = (filename: string): WriteStream => {
    closeSync(openSync(filename, 'w'))

    return createWriteStream(filename, { flags: 'w' })
}
