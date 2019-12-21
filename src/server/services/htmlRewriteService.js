import fs from 'fs';
import { HTML_FILE_PATH } from '../constants';
let htmlFileContent;

export const getHtmlContent = () => {
    // if (!htmlFileContent) {
        console.log(HTML_FILE_PATH)
        htmlFileContent = fs.readFileSync(HTML_FILE_PATH);
    // }
    return htmlFileContent;
}