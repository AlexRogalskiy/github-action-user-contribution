import { DateRange } from '../../typings/domain-types'

export const formatParams = (dateRange: DateRange = {}): string => {
    const sp = new URLSearchParams()

    const o: any = { ...dateRange }

    if (dateRange['year']) {
        const from = new Date()
        from.setFullYear(dateRange['year'])
        from.setMonth(0)
        from.setDate(1)

        const to = new Date()
        to.setFullYear(dateRange['year'])
        to.setMonth(11)
        to.setDate(31)

        o.from = from
        o.to = to
    }

    for (const s of ['from', 'to'])
        if (o[s]) {
            const value = formatDate(o[s])

            if (value >= formatDate(new Date()))
                throw new Error('cannot get contribution for date in the future')

            sp.set(s, value)
        }

    return sp.toString()
}

export const formatDate = (input: Date | string): string => {
    const currentDate = new Date(input)

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const date = currentDate.getDate()

    return [year, month.toString().padStart(2, '0'), date.toString().padStart(2, '0')].join('-')
}
