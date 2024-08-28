import React from 'react';
const LandingPage = () => {
    return (
        <>
            <div className="">
                <div className="titulo">
                <h1 >Módulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
                <h1>CON REACTJS</h1>
                </div>
                <div className="general">
                <h2>Bienvenido</h2>
                <hr/>
                <p>Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks,
                    y el uso de Redux.</p>
                <h3>Temas Cubiertos</h3>
                <hr/>
                <ul>
                    <li>Componentes funcionales y de clase</li>
                    <li>Uso de react Hooks como useState y useEffect</li>
                    <li>Creación de custom hooks como useForm</li>
                    <li>Gestion de Variables de estado con useState</li>
                    <li>Gestion de estado global con Redux</li>
                    <li>Integración de Redux con React</li>
                    <li>Manejo de formularios en React</li>
                    <li>Publicanod nuestra pagina en gitHub pages</li>
                </ul>
                <h3>Recursos Adicionales</h3>
                <hr/>
                <p>Para profundizar en los temas cubiertos, consulta los siguientes recursos</p>
                </div>
                <footer className="ft">
                    <p>&copy; 2024 Módulo 7. USIP</p>
                </footer>
            </div>
        </>
    );
};

export default LandingPage;