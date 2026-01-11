export async function handleVerifyCode(e,signUp, setActive, router, setError, setBusy) {
    e.preventDefault();
    setBusy(true)
    try {
        console.log(e)
        const ComplateSignUp = await signUp.attemptEmailAddressVerification({ code:e.target.code.value });
        if(ComplateSignUp.status !== "complete") {
          console.log(JSON.stringify(ComplateSignUp, null, 2));
        }
        if(ComplateSignUp.status === "complete") {
          console.log(JSON.stringify(ComplateSignUp, null, 2));
          await setActive({ session: ComplateSignUp.createdSessionId });
          router.replace('/')
        }
    }catch (err) {
      console.log(JSON.stringify(err, null, 2));
      console.log("FULL SIGNUP OBJECT", JSON.parse(JSON.stringify(signUp)));

      setError("Gagal Menvalidasi Email")
      return
    }finally{
      setBusy(false)
    }
  }

  export async function HandlerSubmit(e, isLoaded, setError, setStep,setBusy, signUp, ) {
      e.preventDefault();
      if (!isLoaded) return;
  
      setError(null);
      setBusy(true);
  
  
      try {
        await signUp.create({
          emailAddress: e.target.email.value,
          username: e.target.username.value,
          password: e.target.password.value,
        });
        await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
        console.log("FULL SIGNUP OBJECT", JSON.parse(JSON.stringify(signUp)));
  
        console.log("Verification status:", signUp.verifications.emailAddress[0]);
        setStep("verifying");

  
      }catch (err) {
        console.log("SignUp Error",err);
        setError("Gagal Membuat Akun")
        return
      }finally {
        setBusy(false);
      }
    }