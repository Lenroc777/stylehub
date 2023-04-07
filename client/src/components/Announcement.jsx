import styled from "styled-components";


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Announcement = () => {
    return ( 
        <div>
            <Container>
                Super deal! Free Shipping on orders over $50!
            </Container>
        </div>
     );
}
 
export default Announcement;