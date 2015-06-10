var describeMetadata = require('cfn-metadata');
var assign = require('object-assign');

module.exports = cfnEnv;

function cfnEnv(key, callback) {
  describeMetadata(function(err, metadata) {
    if (err) {
      return callback(err);
    }

    var obj = metadata[key];
    if (typeof obj !== 'object') {
      return callback(new Error('metadata["' + key + '"] is not an object'));
    }

    assign(process.env, obj);

    callback(null, obj);
  });
}
