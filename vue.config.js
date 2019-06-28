module.exports = {
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 8080,
        public: '192.168.140.12:8080',
        watchOptions: {
            poll: true
        }
    }
}