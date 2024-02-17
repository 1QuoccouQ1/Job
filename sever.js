// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Cấu hình CORS middleware
const corsOptions = {
    origin: 'http://localhost:8080', // Thay đổi thành địa chỉ trang web của bạn
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Các tuyến đường và xử lý khác ở đây
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
