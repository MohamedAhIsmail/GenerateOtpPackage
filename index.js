export const generateOtp = function (length = 6, options = { chars: false }) {
  let otp = "";
  const digits = "0123456789";
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const chars = options.chars ? letters + digits : digits;

  for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
  }

  return otp;
};

// to test chars letters otp
// console.log(generateOtp(5, { chars: true }));

// to test digits otp
// console.log(generateOtp(5));
