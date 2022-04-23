import './app-button.styles.css';

const AppButton = ({value, handleClick}) => {
    return (
        <div className='app-button'>
            <input type='button' value={value} onClick={handleClick} />
        </div>
    )
}

export default AppButton;