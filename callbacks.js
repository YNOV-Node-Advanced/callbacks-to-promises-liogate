function readFiles(resolve, reject) {
	fs.readdir(source, (err, files) => {
		if(err) {
			reject(err);
		}
		resolve(files);
	}
}

function resizeImage(resolve, reject) {
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

function resizeImages(source, dest, width, height) {
    new Promise(readFiles);
}