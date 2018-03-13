const describeMetadata = require('cfn-metadata');

module.exports = cfnEnv;

function cfnEnv(key, callback) {
  describeMetadata((err, metadata) => {
    if (err) {
      return callback(err);
    }

    const obj = metadata[key];
    if (typeof obj !== 'object') {
      return callback(new Error(`metadata.${key} is not an object`), null);
    }

    Object.assign(process.env, obj);

    callback(null, obj);
  });
}
