import ImgDisplay from '../img-display/img-display.component';
import RandomFact from '../random-fact/random-fact.component';
import AppButton from '../app-button/app-button.component';

import './fact-card.styles.css';

const FactCard = ({catUrl, fact, handleClick}) => {
    return (
        <div className='fact-card'>
            <ImgDisplay title={'cute cat'} catUrl={catUrl} />
            <RandomFact fact={fact} />
            <AppButton value={'Generate'} handleClick={handleClick}/>
        </div>
    )
}

export default FactCard;