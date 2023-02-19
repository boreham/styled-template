import { Container } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global.styled";

export function App() {
    return(
        <>
        <GlobalStyles />
        <Container>
            <h2>Hello styled components.</h2>
        </Container>
        </>
    )
}