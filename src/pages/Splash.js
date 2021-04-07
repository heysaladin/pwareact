import logo from '../logo.png';
function Splash() {
    return (
        <section>
            <div className="container mx-auto min-h-screen">
                <div className="flex">
                    <div className="w-full">
                        <img src={logo} />
                        <p className="mb-16 px-4">
                            Kami menyediakan furnitur berkelas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Splash;
