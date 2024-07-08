function Footer() {

    const objA = {
        a: 1,
        b: 2
    };

    return (
        <header>
            <h1>footer</h1>
            <h2>{objA.a}</h2>
            <h2>{objA.b}</h2>
        </header>
    );
}

export default Footer