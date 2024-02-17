const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('',
        {
            target: 'https://provinces.open-api.vn/api/',
            changeOrigin:true
        })
    )
}