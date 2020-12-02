import React from 'react';

import './Login-Container.css';

function LoginContainer(){
    return(
        <section className="background"/** */>
            <section /**AC Image */>
                <img src="https://www.flaticon.com/svg/static/icons/svg/2935/2935054.svg" alt="Logo AC Login Page" className="image-ac-login"></img>
            </section>
            <section /**Text Monitoring AC Lab Indi */>
                <h1 className="text-login-header-1"> AC Monitoring System</h1>
                <h1 className="text-login-header-2"> Laboratorium Instumentasi Industri ITB</h1>
            </section>
            <section>
                <h2 className="header-form">Username</h2>
            </section>
            <section /**Kolom isian username */>
                <form>
                    <input type="text" id="username" name="admin" placeholder="admin" className="form-username"></input>
                </form>
            </section>
            <section>
                <h2 className="header-form">Password</h2>
            </section>
            <section /**Kolom isian password */>
                <form>
                    <input type="password" id="password" name="password" className="form-username"></input>
                </form>
            </section>
            <br/>
            <br/>
            <section /**Tombol Submit */>
                <form>
                    <input type="submit" value="Submit" className="form-submit"></input>
                </form>
            </section>
            <br/>
            <br/>
        </section>
    )
}


export default LoginContainer;