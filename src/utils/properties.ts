import * as core from '@actions/core'
import decamelize from 'decamelize'

import schema from '../configs/schema'

export const getRequiredProperty = (property: string): string => {
    return getProperty(property, { required: true })
}

export const getProperty = (property: string, options?: core.InputOptions): string => {
    return core.getInput(property, options)
}

export const getProperties = (): any => {
    const input = Object.fromEntries(
        Object.keys(schema.describe().keys).map(item => [
            item,
            getProperty(decamelize(item, { separator: '-' })),
        ])
    )

    const { error, value } = schema.validate(input, { abortEarly: false })
    if (error) {
        throw error
    }

    return value
}
