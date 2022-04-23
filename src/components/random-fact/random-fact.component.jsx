import './random-fact.styles.css';

const RandomFact = ({ fact }) => {
    return (
        <div className='random-fact'>
            {fact}
        </div>
    )
}

export default RandomFact;