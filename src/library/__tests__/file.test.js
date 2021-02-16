import { tranverseDirectory } from '../file'

describe('test folder library', () => {
    test("test folder transverse", async () => {
        let targetDir = `${__dirname}/__fixture__/dir/somedir`;
        let filePaths = await tranverseDirectory(targetDir)
        expect(filePaths.length).toBe(2)

        targetDir = `${__dirname}/__fixture__/dir/somedir2`;
        filePaths = await tranverseDirectory(targetDir)
        expect(filePaths.length).toBe(3)

        targetDir = `${__dirname}/__fixture__/dir/somedir3`;
        filePaths = await tranverseDirectory(targetDir)
        expect(filePaths.length).toBe(1)
    })
    
})