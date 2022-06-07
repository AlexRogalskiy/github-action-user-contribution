const fs = require("fs");
const path = require("path");
const url = require("url");
const unified = require("unified");
const headings = require("rehype-autolink-headings");

const dictionary = fs.readFileSync(url.pathToFileURL(path.join("./dictionary.txt")));

const plugins = [
    ["remark-frontmatter", "yaml"],
    "remark-github",
    "remark-toc",
    "remark-gfm",
    "remark-preset-wooorm",
    ["remark-lint-no-html", false],
    "remark-preset-davidtheclark",
    "remark-comment-config",
    "remark-validate-links",
    "remark-preset-lint-recommended",
    "remark-preset-lint-markdown-style-guide",
    ["lint-rule-style", false],
    ["remark-lint-maximum-line-length", false],
    ["remark-lint-maximum-heading-length", false],
    ["remark-lint-list-item-indent", false],
    ["lint-no-multiple-toplevel-headings", false],
    ["remark-lint-no-emphasis-as-heading", false],
    ["remark-lint-no-duplicate-headings", true],
    [
        "remark-retext",
        unified()
        .use(require("retext-english"))
        .use(require("retext-syntax-urls"))
        .use(require("retext-syntax-mentions"))
        .use(require("retext-emoji"))
        .use(require("retext-spell"), {
            dictionary: require("dictionary-en"),
            personal: dictionary,
        })
        .use(require("retext-diacritics"))
        .use(require("retext-indefinite-article"))
        .use(require("retext-redundant-acronyms"))
        .use(require("retext-sentence-spacing"), {
            preferred: 1
        })
    ]
];

if (process.env.NODE_ENV === "production") {
    plugins.push([
        "@theowenyoung/remark-lint-no-dead-urls",
        {
            checkIsOnline: false,
            skipUrlPatterns: [
                "http://localhost",
            ],
        },
    ]);
}

const settings = {
    "emphasis": "*",
    "strong": "*"
}

module.exports = {
    plugins,
    settings
};
