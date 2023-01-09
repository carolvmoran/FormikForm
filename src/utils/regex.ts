const regex = {
  dataMask: [/[1-9]/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/],
  dataMaskValidation: /^([0-9]{2}) [0-9]{2} [0-9]{4}$/,
};

export { regex };
