import { GeneralError } from './general.error'
import { ErrorType } from '../../typings/enum-types'

/**
 * ResponseError
 * @desc Class representing request error
 */
export class ResponseError extends GeneralError {
    /**
     * Response error constructor by input parameters
     * @param message initial input {@link string} message
     * @param args initial input {@link Array} of arguments
     */
    constructor(readonly message: string, ...args: any[]) {
        super(ErrorType.response_error, message, args)
    }
}
