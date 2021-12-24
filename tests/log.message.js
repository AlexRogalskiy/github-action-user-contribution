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
(function () {
    'use strict'

    const _ = require('lodash');

    const logOnRoutes = function () {
        //if (process.env.NODE_ENV !== 'test') {
        if (arguments.length === 2) {
            console.log("Log " + getLogDate(), arguments[0], filterObject(arguments[1]));
        } else {
            console.log("Log " + getLogDate(), filterObject(arguments[0]));
        }
        //}
    }

    const error = function () {
        if (arguments.length === 2) {
            console.error("Error " + getLogDate(), arguments[0], arguments[1]);
        } else {
            console.error("Error " + getLogDate(), arguments[0]);
        }
    }

    function filterObject(object) {
        if (_.isArray(object)) {
            let result = "Total Items " + object.length + ",  \n";
            let names = '';
            object.forEach(doc => {
                names += "  * " + _.get(doc, 'name', '') + " \n"
            });
            result += names;
            return result;
        }
        return object;
    }

    function getLogDate() {
        let date = new Date();
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    module.exports = {logOnRoutes, error};
})();
