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
import Joi from 'joi'

const extendedJoi = Joi.extend({
    type: 'stringList',
    base: Joi.array(),
    coerce: {
        from: 'string',
        method(value) {
            value = value.trim()
            if (value) {
                value = value
                    .split(',')
                    .map(item => item.trim())
                    .filter(Boolean)
            }

            return { value }
        },
    },
}).extend({
    type: 'processOnly',
    base: Joi.string(),
    coerce: {
        from: 'string',
        method(value) {
            value = value.trim()
            if (['issues', 'prs'].includes(value)) {
                value = value.slice(0, -1)
            }

            return { value }
        },
    },
})

const schema = Joi.object({
    githubToken: Joi.string().trim().max(100),

    issueLockInactiveDays: Joi.number().min(0).max(3650).precision(9).default(365),

    issueExcludeCreatedBefore: Joi.alternatives()
        .try(
            Joi.date()
                // .iso()
                .min('1970-01-01T00:00:00Z')
                .max('2970-12-31T23:59:59Z'),
            Joi.string().trim().valid('')
        )
        .default(''),

    issueExcludeLabels: Joi.alternatives()
        .try(
            extendedJoi.stringList().items(Joi.string().trim().max(50)).min(1).max(30).unique(),
            Joi.string().trim().valid('')
        )
        .default(''),

    issueLockLabels: Joi.alternatives()
        .try(
            extendedJoi.stringList().items(Joi.string().trim().max(50)).min(1).max(30).unique(),
            Joi.string().trim().valid('')
        )
        .default(''),

    issueLockComment: Joi.string().trim().max(10_000).allow('').default(''),

    issueLockReason: Joi.string()
        .valid('resolved', 'off-topic', 'too heated', 'spam', '')
        .default('resolved'),

    prLockInactiveDays: Joi.number().min(0).max(3650).precision(9).default(365),

    prExcludeCreatedBefore: Joi.alternatives()
        .try(
            Joi.date()
                // .iso()
                .min('1970-01-01T00:00:00Z')
                .max('2970-12-31T23:59:59Z'),
            Joi.string().trim().valid('')
        )
        .default(''),

    prExcludeLabels: Joi.alternatives()
        .try(
            extendedJoi.stringList().items(Joi.string().trim().max(50)).min(1).max(30).unique(),
            Joi.string().trim().valid('')
        )
        .default(''),

    prLockLabels: Joi.alternatives()
        .try(
            extendedJoi.stringList().items(Joi.string().trim().max(50)).min(1).max(30).unique(),
            Joi.string().trim().valid('')
        )
        .default(''),

    prLockComment: Joi.string().trim().max(10_000).allow('').default(''),

    prLockReason: Joi.string().valid('resolved', 'off-topic', 'too heated', 'spam', '').default('resolved'),

    processOnly: extendedJoi.processOnly().valid('issue', 'pr', '').default(''),
})

export default schema
