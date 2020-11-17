'use strict';

const BbPromise = require('bluebird');
const fse = require('fs-extra');

module.exports = {
  cleanupTempDir() {
    if (this.serverless.config.servicePath) {
      const serverlessTmpDirPath = this.serverless.getTmpDir();

      if (this.serverless.utils.dirExistsSync(serverlessTmpDirPath)) {
        fse.removeSync(serverlessTmpDirPath);
      }
    }

    return BbPromise.resolve();
  },
};
