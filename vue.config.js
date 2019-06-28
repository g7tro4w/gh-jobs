module.exports = {
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 8080,
        // public: '0.0.0.0',
        watchOptions: {
            poll: true
        },
        // headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET"
        // }
    }
}