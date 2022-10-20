export const decodeBase64 = (base64Str) => {
  const buff = Buffer.from(base64Str, 'base64');
  const str = buff.toString('utf-8');
  return str;
};
