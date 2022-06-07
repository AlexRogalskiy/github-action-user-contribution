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
const log = require('./log.message');

const getDayValue = function (weekDay) {

    let dayValue = {
        "Sunday": 0, "Monday": 1, "Tuesday": 2, "Wednesday": 3,
        "Thursday": 4, "Friday": 5, "Saturday": 6
    };

    if (!weekDay) {
        return -1;
        //show first, if you want to show latest need to be bigger then 7 of the list
    }
    return dayValue[weekDay];
}

const sortList = function (recipes) {
    const that = this;
    //console.log("t*** ", recipes)

    //sort by week day
    return recipes.sort(function (a, b) {

        if (that.getDayValue(a.weekDay) < that.getDayValue(b.weekDay)) {
            return -1
        }

        if (that.getDayValue(a.weekDay) > that.getDayValue(b.weekDay)) {
            return 1
        }
        return 0;
    });
}

const handleResponse = (res, doc, status) => {
    log.logOnRoutes("Response status code=", status);
    res
    .status(status)
    .json(doc)
    .end();
}

const wmHandleError = function (res, reason) {
    log.error("handle error", reason.message);
    var errorResponse = {
        message: reason.message,
        name: reason.name,
        errors: reason.errors
    };

    res
    .status(400) //bad format
    .send(errorResponse)
    .end();
}

const removeItem = function (list, pos) {

    return list.splice(pos, 1)
}

const getValue = function (value) {

    return value['_id'] !== undefined ? value._id.toString() : value.toString();
}

const findIndex = function (list, id) {

    return list.findIndex(item => getValue(item) === getValue(id));
}

const findAny = function (list, id) {

    return list.find(item => getValue(item) === getValue(id));
}

const addItem = function (list, item) {

    let tempItem = list.find(itemIn => {
        return getValue(itemIn) === getValue(item);
    });

    if (!tempItem) {
        list.push(item);
        return true;
    }
    return false;
}

module.exports = {
    getDayValue,
    sortList,
    handleResponse,
    wmHandleError,
    removeItem,
    findIndex,
    findAny,
    addItem
};
