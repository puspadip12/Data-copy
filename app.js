const fs = require('fs');
console.log('File Reading from orginal.txt ...');
fs.readFile('text1.txt', 'utf8', readingFile);
function readingFile(error, data) {
	if (error) {
		console.log(error);
	} else {
		console.log(data);
		fs.writeFile('copy.txt', data, 'utf8', writeFile);
	}
}
function writeFile(error) {
	if (error) {
		console.log(error)
	} else {
		console.log('Content has been pasted to copy.txt file');
	}
}
fs.unlink('text.txt', (err) => {
	if (err) {
		console.error(`Error deleting file: ${err}`);
	} else {
		console.log(`Old data has been cleared.`);
	}
});