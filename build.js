/*
 * File: /Users/origami/Desktop/timvels/timvel-nginx/build.js
 * Project: /Users/origami/Desktop/timvels/timvel-nginx
 * Created Date: Tuesday July 2nd 2019
 * Author: Rick yang tongxue(🍔🍔) (origami@timvel.com)
 * -----
 * Last Modified: Tuesday July 2nd 2019 12:15:20 pm
 * Modified By: Rick yang tongxue(🍔🍔) (origami@timvel.com)
 * -----
 */
const fs = require('fs');
const path = require('path');
const nginxFile = fs.readFileSync('./nginx.conf', 'utf-8');

const FIND_ALL_IP = /\b\d{1,3}\.\d{1,3}\.\d{1,3}.\d{1,3}:\d{4}\b/g;

const fixed = nginxFile.replace(FIND_ALL_IP, 'xxx.xxx.xxx:xxxx');
fs.writeFileSync('nginx_fixed.conf', fixed);
console.log('nginx file generated!');
