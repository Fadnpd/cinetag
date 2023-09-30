const { default: Cabecalho } = require("components/Cabecalho");
const { default: Container } = require("components/Container");
const { default: Rodape } = require("components/rodape");
const { default: Favoritosprovider } = require("contextos/Favoritos");
const { Outlet } = require("react-router-dom");

function PaginaBase () {
    return (
        <main>
            <Cabecalho/>
            <Favoritosprovider>
                <Container>
                    <Outlet/>
                </Container>
            </Favoritosprovider>
            <Rodape/>
            
        </main>
    )
}

export default PaginaBase;