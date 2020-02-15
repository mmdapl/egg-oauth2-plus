'use strict';

const mock = require('egg-mock');

describe('test/oauth2-plus.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/oauth2-plus-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, oauth2Plus')
      .expect(200);
  });
});
