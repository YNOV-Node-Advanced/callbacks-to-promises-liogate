function resizeImages(source, dest, width, height, callback) {
    const function readFiles(resolve, reject) {
        fs.readdir(source, (err, files) => {
            if(err) {
                reject(err);
            }
            let promises = new Array();
        files.forEach((filename, fileIndex) => {
            promises.push(new Promise(resizeImage));
    })
    }
    }

    const function resizeImage(resolve, reject) {
        gm(source + filename)
            .resize(width, height)
            .write(dest + "w" + width + "_" + filename,
                (err, values) => {
            if (err) {
                reject(err);
            } else if (fileIndex == files.length - 1) {
            resolve(values);
        }
    });
    }
    new Promise(readFiles).then(files => callback(files));
}