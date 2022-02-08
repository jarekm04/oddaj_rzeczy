import React from 'react';

const ThreeColumns = () => {
    return (
        <section className="threeColumns">
            <article className="stats">
                <h2 className="stats__num">10</h2>
                <p className="stats__title">ODDANYCH WORKÓW</p>
                <p className="stats__desc">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
            <article className="stats">
                <h2 className="stats__num">5</h2>
                <p className="stats__title">WSPARTYCH ORGANIZACJI</p>
                <p className="stats__desc">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
            <article className="stats">
                <h2 className="stats__num">7</h2>
                <p className="stats__title">ZORGANIZOWANY ZBIÓREK</p>
                <p className="stats__desc">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </article>
        </section>
    );
};

export default ThreeColumns;