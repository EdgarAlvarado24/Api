const response = (res, { status = 200, data = {} }) => {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
};

module.exports = response; 