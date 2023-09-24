
import Button from "../components/Button";
import { GoBell, GoLink, GoDatabase } from 'react-icons/go';

function ButtonPage () {

    const handleClick = ()=>{
        console.log('click!!');
    };

    return (
        <div>
            App
            <div> <Button className="mb-5" success rounded onClick={handleClick}  >
                <GoBell  />
                Click me!</Button> </div>
            <div> <Button danger rounded  >
                <GoLink />
                Buy Now!</Button> </div>
            <div> <Button warning rounded >
                <GoDatabase  />
                See Deal!</Button> </div>
            <div> <Button rounded secondary >Hide Ads!</Button> </div>
            <div> <Button outline rounded>Something!</Button> </div>
            <div> <Button rounded outline >Order!</Button> </div>
            <div> <Button warning rounded  >Add to cart!</Button> </div>
            <div> <Button outline >New Deal!</Button> </div>
            <div> <Button primary rounded >Order now!</Button> </div>
        </div>
    );
}

export default ButtonPage ;