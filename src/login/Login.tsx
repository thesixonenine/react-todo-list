function Login() {
    return (
        <div className="h-dvh flex justify-center items-center bg-[url('https://ys.mihoyo.com/main/_nuxt/img/poster.47f71d4.jpg')] bg-no-repeat bg-center bg-cover">
            <link rel="stylesheet" href="https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
            <section className="flex justify-center items-center flex-col bg-[255,255,255,0.1] w-[35%] py-[50px] px-[10px] rounded-[10px]
            border-solid border border-[255,255,255,0.3] backdrop-blur-[10px] shadow-[0,0,0,0.13]">
                {/* Title */}
                <h1 className="text-[2.5rem] text-white mx-0 mt-0 mb-[50px]">Welcome</h1>
                {/* 帐号 */}
                <div className="login-form-input-wrap">
                    <input className="login-form-input" type="text" placeholder="Your email" spellCheck="false" required/>
                    <i className={"fa-solid fa-user"}></i>
                </div>
                {/* 密码 */}
                <div className="login-form-input-wrap">
                    <input className="login-form-input" type="password" placeholder="Your password" spellCheck="false" required/>
                    <i className={"fa-solid fa-lock"}></i>
                </div>
                {/* 记住我 */}
                <div className="flex justify-between items-center w-[90%] mb-[40px]">
                    <p className="text-[1.2rem] text-white">
                        <input type="checkbox"/>
                        Remember me
                    </p>
                    <a className="text-[1.2rem] text-white" href="#">Forgot password?</a>
                </div>
                {/* 登录 */}
                <button className="text-[1.2rem] h-[60px] w-[90%] rounded-[50px] font-semibold tracking-[1px]  mb-[25px] bg-white cursor-pointer">
                    Login
                </button>
                {/* 注册 */}
                <p className="text-[1.2rem] text-white mt-[40px]">
                    Don't have an account?
                    <a className="font-medium cursor-pointer" href="#">Register</a>
                </p>
            </section>
        </div>
    );
}

export default Login;
