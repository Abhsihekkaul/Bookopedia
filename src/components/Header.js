const Header = () => {
    return (
        <>
        <div className="Navbar">
            <div className="Left">
            <h1>BookOPedia</h1>
            </div>

            <div className="Right">
            <ul>
                <li>HOME</li>
                <li>CATEGORIES</li>
                <li>ABOUT</li>
            </ul>
            <button className="SummaryAddition">Add Your Summary</button>
            </div>

        </div>
        </>
    )
}

export default Header;