'use strict';

module.exports = (options, app) => {
    return async function oauth(ctx,next){
        // 将全部路由拦截下来，判断是否有access_token
        console.log(ctx)
        await next();
    }
};