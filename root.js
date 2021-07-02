/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const fs = require('fs');
const url = require('url');

/**
 * @param {string} path
 * @param {ImportMeta} importMeta
 */
function importJson(path, importMeta) {
  const json = fs.readFileSync(url.fileURLToPath(new URL(path, importMeta.url)), 'utf-8');
  return JSON.parse(json);
}

module.exports = {
  LH_ROOT: __dirname,
  importJson,
};