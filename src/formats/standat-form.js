import getDiff from '../function/gendiff-src - Copy.js';

const genDiff = (keys, files) => {
  const result = [];

  getDiff(keys, files, 1, result);

  return result;
};

export default genDiff;