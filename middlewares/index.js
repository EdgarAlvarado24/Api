const loggerMiddleware = (req, res) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
};

module.exports = {
    loggerMiddleware
}; 