
function Footer() {

    function click(id) {
        console.log(`${id} clicked!`)
    }
    return (
        <div className="icon-container">
            <img onClick={() => click("home")} id="home" src='bx_home-alt.png' alt="house icon" />
            <img onClick={() => click("profile")} id="profile" src='person.png' alt="head and shoulders icon" />
            <img onClick={() => click("progress")} id="progress" src='ri_numbers-fill.png' alt="bar graph icon" />
            <img onClick={() => click("money")} id="money" src='dashicons_money-alt.png' alt="dollar sign icon" />
            <img onClick={() => click("settings")} id="settings" src='carbon_settings.png' alt="gear icon" />
        </div>
    )
}

export default Footer;