import ServerLog from "./Logging.app";

export async function handleVerifyCode(e,signUp, setActive, router, setError, setBusy,setStep) {
    e.preventDefault();
    setBusy(true)
    try {
        const ComplateSignUp = await signUp.attemptEmailAddressVerification({ code:e.target.code.value });
        if(ComplateSignUp.status !== "complete") {
          setError("Gagal Menvalidasi Code")
          ServerLog("Gagal Menvalidasi Code","VerifyCode")
        }
        if(ComplateSignUp.status === "complete") {
          setError("Berhasil Menvalidasi Code")
          ServerLog("Berhasil Menvalidasi Code","VerifyCode")
          await setActive({ session: ComplateSignUp.createdSessionId });
          setStep("completed")
          router.replace('/')
          router.refresh()
        }
    }catch {
      setError("Gagal Menvalidasi Email")
      ServerLog("Gagal Menvalidasi Email","ErrorHandler VerifyCode")
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
        setStep("verifying");
        ServerLog("Mencoba Verifikasi Email","SignUphandler")

  
      }catch  {
        setError("Gagal Membuat Akun")
        ServerLog("Gagal Mencoba Verfikasi Email","SignUpHandler")
        return
      }finally {
        setBusy(false);
      }
    }