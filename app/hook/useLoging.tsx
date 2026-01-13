import ServerLog from "./Logging.app"

export async function LoginAccount(e,isLoaded,signIn,setActive,setError,router,setBusy,setStep,setEmail) {
    e.preventDefault()
    if (!isLoaded) return

    // Try Catch untuk mencegah Crash
    try {
        setBusy(true)
        const res = await signIn.create({
            identifier : e.target.identifier.value,
            password : e.target.password.value
            
        })
        ServerLog("Mencoba Login","Loginhandler")
        if(res.status === "complete"){
            setActive({session : res.createdSessionId})
            setEmail(e.target.identifier.value)
            setStep("completed")
            router.replace('/')
            router.refresh()
        }
    }catch{
        setError('Gagal Mendaptkan Akun Terkait, coba Periksa Kembali');
        ServerLog("Gagal Mencoba Login","LoginHandler")
    }finally{
        setBusy(false)
    }
  
}