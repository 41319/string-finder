import fs from 'fs'

export const searchFileContent = (filepath, regexp) => {
    const contents = fs.readFileSync(filepath)
    return regexp.test(contents)
}