const fs = require('fs');
const path = require('path');

export default function Handler(req, res) {
    const firuzkoyFolderPath = path.join(process.cwd(), 'assets', 'images', 'firuzkoy');
    const fileNames = fs.readdirSync(firuzkoyFolderPath);

    const imageUrls = fileNames.map((fileName) => {
        return `/assets/images/firuzkoy/${fileName}`;
    });

    res.status(200).json({
        status: true,
        images: imageUrls
    });
}