import { useEffect } from "react";
import "./footer.css";

export const Footer = () => {
    useEffect(() => {
        const listItems = document.querySelectorAll('.list');
        
        const activeLink = (event) => {
            listItems.forEach(item => item.classList.remove('active'));
            event.currentTarget.classList.add('active');
        };

        listItems.forEach(item => item.addEventListener('click', activeLink));

        return () => {
            listItems.forEach(item => item.removeEventListener('click', activeLink));
        };
    }, []);

    const menuItems = [
        { name: "Home", icon: "home-outline" },
        { name: "Busca", icon: "search-outline" },
        { name: "Pedido", icon: "ticket-outline" },
        { name: "Perfil", icon: "person-outline" },
        { name: "Alerta", icon: "notifications-outline" },
    ];

    return (
        <footer>
            <div className="navigation">
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index} className={`list ${index === 0 ? 'active' : ''}`}>
                            <a href="#">
                                <span className="icon"><ion-icon name={item.icon}></ion-icon></span>
                                <span className="text">{item.name}</span>
                                <span className="circle"></span>
                            </a>
                        </li>
                    ))}
                    <div className="indicator"></div>
                </ul>
            </div>
        </footer>
    );
};
