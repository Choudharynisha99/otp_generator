function generateOTP() {
    const otpInput = document.getElementById('otp');
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpInput.value = otp;
}
