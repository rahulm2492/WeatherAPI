var babel = require('babel-core/register');
function noop() {
    return null;
}
require.extensions['.png'] = noop;
require.extensions['.gif'] = noop;