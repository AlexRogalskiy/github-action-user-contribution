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

const fs = require("fs");
const path = require("path");

const typingsPackageName = process.argv[2];
const asOfVersion = process.argv[3];
const sourceRepoURL = process.argv[4];
const libraryName = process.argv[5] || typingsPackageName;

if (process.argv.length !== 5 && process.argv.length !== 6) {
    console.log("Usage: npm run not-needed -- typingsPackageName asOfVersion sourceRepoURL [libraryName]");
    process.exit(1);
}

rmdirRecursive(path.join("typings", typingsPackageName));
const notNeededPackages = JSON.parse(fs.readFileSync("notNeededPackages.json", "utf-8"));
notNeededPackages.packages.push({libraryName, typingsPackageName, sourceRepoURL, asOfVersion});
notNeededPackages.packages.sort((x, y) => x.typingsPackageName < y.typingsPackageName ? -1 : 1);
fs.writeFileSync("notNeededPackages.json", JSON.stringify(notNeededPackages, undefined, 4) + "\n", "utf-8");

function rmdirRecursive(dir) {
    for (let entry of fs.readdirSync(dir)) {
        entry = path.join(dir, entry)
        if (fs.statSync(entry).isDirectory())
            rmdirRecursive(entry);
        else
            fs.unlinkSync(entry);
    }
    fs.rmdirSync(dir);
}
