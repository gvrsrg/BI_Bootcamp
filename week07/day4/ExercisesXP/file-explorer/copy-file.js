import fs from 'fs';


fs.readFile('source.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFile('destination.txt', data, 'utf-8', (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('File copied successfully.');
    });
});
