'use strict';

/**
 * egg-oauth2-plus default config
 * @member Config#oauth2Plus
 * @property {String} SOME_KEY - some description
 */

module.exports=app=>{
    config.keys = app.name + '_19980115_19970118_520';
    const config = exports = {};
    // 中间件配置
    config.middleware = [ 'oauth'];
    config.oauth = {
      ignore: []
    };

    // 插件配置
    config.oauth2Plus={
        client_id:'',
        client_secret:'',
        authorizeUrl:'',
        
    }

    return {
       ...config 
    }
}

