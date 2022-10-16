/**
 * Helper function to help generate ellpsis in the middle of text
*/
export const getMiddleEllipsis = (str:string, options?: {
  beginning?: number,
  ending?: number,
}) => {
  const oneThird = Math.floor(str.length / 3);
  const {
    beginning = oneThird + oneThird,
    ending = oneThird,
  } = options ?? {
  };

  const startEndTotal = beginning + ending;

  if (startEndTotal && startEndTotal < str.length) {
    return `${str.substr(0, beginning)}...${str.substr(str.length - ending, str.length)}`;
  }

  return str;
};
