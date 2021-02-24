let path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src')
            },
        },
    },
    
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/scss/index.scss";'
            }
        }
    },
}
