function Interprete(props) {
    const { nombre, foto } = props;
    return (
        <>
            <div className="contenedor__margin">
                <img className="contenedor__image" src={foto} alt={nombre} />
                <div className="contenedor__texto">
                    <h6 className="contenedor__h6">{nombre}</h6>
                    <p>{props.children}</p>
                </div>
            </div>

        </>
    )
}

export default Interprete