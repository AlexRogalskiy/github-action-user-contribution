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
'use strict'

const VFile = require('vfile')
const unified = require('unified')
const markdown = require('remark-parse')
const frontmatter = require('remark-frontmatter')
const mdx = require('remark-mdx')
const html = require('rehype-parse')
const english = require('retext-english')
const equality = require('retext-equality')
const profanities = require('retext-profanities')
const remark2retext = require('remark-retext')
const rehype2retext = require('rehype-retext')
const sort = require('vfile-sort')
const filter = require('./filter')

const makeText = (config) => {
    return unified()
    .use(english)
    .use(equality, {
        noBinary: config && config.noBinary,
    })
    .use(profanities, {
        sureness: config && config.profanitySureness,
    })
}

// Alex’s core.
const core = (value, config, processor) => {
    let allow
    let deny

    if (Array.isArray(config)) {
        allow = config
    } else if (config) {
        allow = config.allow
        deny = config.deny
    }

    const file = new VFile(value)
    const tree = processor.use(filter, {allow, deny}).parse(file)

    processor.runSync(tree, file)

    sort(file)

    return file
}

// Alex.
const alex = (value, config) => {
    return core(
        value,
        config,
        unified().use(markdown).use(frontmatter, ['yaml', 'toml']).use(remark2retext,
            makeText(config))
    )
}

// Alex, for MDX.
const mdxParse = (value, config) => {
    return core(value, config,
        unified().use(markdown).use(mdx).use(remark2retext, makeText(config)))
}

// Alex, for HTML.
const htmlParse = (value, config) => {
    return core(value, config, unified().use(html).use(rehype2retext, makeText(config)))
}

// Alex, without the markdown.
const noMarkdown = (value, config) => {
    return core(value, config, makeText(config))
}

module.exports = {
    alex,
    noMarkdown,
    mdxParse,
    htmlParse
}
