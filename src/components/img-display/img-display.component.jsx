import './img-display.styles.css';

const ImgDisplay = ({title, catUrl}) => {
    return (
        <div className='img-display'>
            <img
                alt={title}
                src={catUrl}
            />
        </div>
    )
}

export default ImgDisplay;