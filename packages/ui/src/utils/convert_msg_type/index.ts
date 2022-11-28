/**
 * Helper Function to convert msg raw type data to human readable msg title
 * @param type The raw type you wish to convert
 */
export const convertMsgType = (type: string[]) => {
  const typeTitle = type?.map((eachType) => {
    const wordIndex = eachType.indexOf('Msg');
    const msgStringLength = 'Msg'.length;
    const msgTitle = eachType.substring(wordIndex + msgStringLength);
    const msgTitleSeperatedByUpperCase = msgTitle.match(/[A-Z][a-z]+|[0-9]+/g)?.join(' ');
    return msgTitleSeperatedByUpperCase ?? '';
  });

  return typeTitle;
};
