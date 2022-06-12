const askToUser = (type: string, message: string) => {
  return [
    {
      type: type,
      name: "option",
      message: message,
    },
  ];
};

export default askToUser;
