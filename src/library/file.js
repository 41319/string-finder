const { resolve } = require('path');
const { readdir } = require('fs').promises;

export const tranverseDirectory = async (dir) => {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? tranverseDirectory(res) : res;
  }));
  return Array.prototype.concat(...files);
}

// TODO add more function