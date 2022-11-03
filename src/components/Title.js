
function Title({month}) {


    return (
        <div className="title-container">
            <div id="back-arrow"><img onClick={() => console.log('go back')} src="back-arrow.png" alt="arrow pointing to the left" /></div>
            <h1 className="title-header">{month} Progress</h1>
        </div>
    )
}

export default Title;