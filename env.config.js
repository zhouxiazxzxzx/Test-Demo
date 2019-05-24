'use strict';
const merge = require('webpack-merge');

/**
 * development env config
 * 账号密码：
 *    18958049341  123qwe
 *    18857177119 lin123
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const dev_env = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  // BASE_API: '"http://192.168.1.210/api"',
  BASE_API: '"http://192.168.1.75/api"',
  // BASE_API: '"http://192.168.1.78/api"',
  // BASE_API: '"http://saas.zjlcwg.com/api"',
};
/**
 * mock env config
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const mock_env = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"mockdata"',
  BASE_API: '""',
};
/**
 * production env config
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const prod_env = {
  NODE_ENV: '"production"',
  ENV_CONFIG: '"prod"',
  BASE_API: '"/api"',
};
/**
 * test env config
 * @type {{NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}}
 */
const test_env = {
  NODE_ENV: '"testing"',
  ENV_CONFIG: '"test"',
  BASE_API: '"http://192.168.1.210/api"',
};


/**
 * push module
 * @type {{dev_env: *, mock_env: *, prod_env: {NODE_ENV: string, ENV_CONFIG: string, BASE_API: string}, test_env: *}}
 */
module.exports = {
  dev_env: merge(prod_env, dev_env),
  mock_env: merge(prod_env, mock_env),
  prod_env: prod_env,
  test_env: merge(dev_env, test_env),
};
