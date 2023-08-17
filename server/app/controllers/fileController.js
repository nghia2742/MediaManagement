const fs = require('fs');
const path = require('path');
const { isDir, formatDate, formatSize } = require('../../utils/subMethods');

class FileController {
    async index(req, res) {
        const basePath = path.join(__dirname, '../../uploads');
        const folderName = req.query.folder.split('/');
        const fullPath = folderName!==undefined?path.join(basePath, ...folderName):basePath;

        try {
            const files = await fs.promises.readdir(fullPath);

            const listFiles = files.map((file) => {
                const filePath = path.join(fullPath, file);
                const stats = fs.statSync(filePath);
                const birthtime = stats.birthtime;
                const formattedDate = formatDate(birthtime);
                const formattedSize = formatSize(
                    isDir(filePath) ? 0 : stats.size
                );

                return {
                    name: file,
                    directory: filePath,
                    type: isDir(filePath) ? 'Folder' : 'File',
                    dated: formattedDate,
                    size: formattedSize,
                };
            });

            return res.json({ data: listFiles });
        } catch (err) {
            console.error('Error reading directory:', err);
            return res.status(500).json({
                error: 'An error occurred while reading the directory.',
            });
        }
    }
}

module.exports = new FileController();
