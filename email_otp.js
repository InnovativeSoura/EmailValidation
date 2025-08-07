function SendOTP(){
    const email = document.getElementById('Email');
    const OTPverify = document.getElementsByClassName('otpverify')[0]
    
    let otp_val = Math.floor(Math.random() * 10000);
    
    let emailbody = `<h2>Your OTP is:</h2>${otp_val}`;
    Email.send({
    SecureToken : "e42576e1-9c3a-48cc-86cc-5bc6f0bc3593",
    To : email.value,
    From : "souradipta898sp@gmail.com",
    Subject : "Email OTP using The Javascript",
    Body : emailbody,
}).then(

    message => {
        if(message === "OK"){
            alert("OTP sent to your email " + email.value);
            
            OTPverify.style.display = "flex";
            const OTP_inp  = document.getElementById('otp_inp');
            const OTP_btn  = document.getElementById('otp_btn');
            
            OTP_btn.addEventListener('click', () => {
                if(OTP_inp.value == otp_val){
                    alert("Email address verified....");
                }else{
                    alert("Invalid OTP");
                }
            })
        }
    }
);
}
