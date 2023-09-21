# File Copy and Cleanup

This Node.js script reads the contents of a file named `text1.txt`, copies its contents to a new file named `copy.txt`, and then deletes the original file `text.txt`. This README file provides an overview of the code and how to use it.

## Getting Started

Before you can use this script, ensure you have Node.js installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Usage

1. Clone this repository or download the code to your local machine.

2. Open a terminal or command prompt and navigate to the directory where you have saved the code.

3. Run the following command to execute the script:

   ```bash
   node script.js
   ```

   Replace `script.js` with the actual name of your JavaScript file if it's different.

4. The script will perform the following actions:
   - Read the contents of `text1.txt`.
   - If successful, it will log the file's content to the console.
   - Copy the content to a new file named `copy.txt`.
   - If the copy operation is successful, it will log a success message.
   - Delete the original file `text.txt` and log a message indicating that old data has been cleared.

## File Structure

The code consists of the following main components:

- `fs` module: This module is used to interact with the file system.

- `readingFile` function: This function is called when the contents of `text1.txt` have been successfully read. It handles writing the content to `copy.txt` or reporting any errors that occur during the reading process.

- `writeFile` function: This function is called when the content has been successfully written to `copy.txt`. It reports any errors encountered during the write operation.

- `unlink` method: This method is used to delete the original `text.txt` file and report whether the deletion was successful or if any errors occurred.

## Implementation

   - Link of the file | [Click Here](https://github.com/puspadip12/Data-copy/blob/c3acf9b850fb0774f24d30a0fba1b8b20c5bccc2/Implementation.pdf)

## Error Handling

The script includes error handling to handle cases where file operations fail. If any errors occur during file reading, writing, or deletion, error messages will be displayed in the console to help identify and resolve any issues.

---


