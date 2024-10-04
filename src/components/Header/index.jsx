export const Header = () => {
    return (
        <>
            <header className="w-full">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><a>Perfil</a></li>
                                <li><a>Outro Assunto</a></li>
                                <li><a>Ajude-me</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl">SoS Service</a>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="btn btn-ghost btn-circle dropdown">
                            <div className="indicator " tabIndex={0} role="button" >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                                
                           
                            
                        
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content translate-x-[-13rem]  bg-base-200 rounded-box z-[1] mt-4 w-[100dvw] p-2 shadow">
                                <li><a>NOTIFICAÇÃO1</a></li>
                                <li><a>NOTIFICAÇÃO2</a></li>
                                <li><a>NOTIFICAÇÃO3</a></li>
                                <li><a>NOTIFICAÇÃO4</a></li>
                                <li><a>NOTIFICAÇÃO5</a></li>
                                
                            </ul>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}