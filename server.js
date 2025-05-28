const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const port = 8080;

const server = http.createServer(async (req, res) => {
    try {
        const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
        const file = await fs.readFile(filePath);
        res.writeHead(200);
        res.end(file);
    } catch (error) {
        res.writeHead(404);
        res.end('File not found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
