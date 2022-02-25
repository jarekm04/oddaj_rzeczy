import React, {useState} from 'react';


const Panel = () => {
    const [info , setInfo] = useState([]);

    return (
        <section className="panel">
            <h1 className="panel__title">ADMIN PANEL</h1>
            <main className="main">
                <div className="users">
                    <h2 className="users__title">Użytkownicy</h2>
                    <hr/>
                </div>
                <div className="organizations">
                    <h2 className="organizations__title">Organizacje</h2>
                    <hr/>
                </div>
            </main>
        </section>
    );
};

export default Panel;