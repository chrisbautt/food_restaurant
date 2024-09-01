export default function Company() {
    return (
        <>
            <main>
                <section className="h-[75vh] w-full flex justify-center items-center">
                    <h1 className="text-6xl text-center max-w-[750px] mx-auto"><b>Our company focuses on <span className="text-blue">food and people.</span></b></h1>
                    <div></div>
                </section>
                <section className="flex flex-col lg:flex-row justify-between items-center py-[50px] px-[50px] lg:px-[100px] gap-[50px]">
                  <div className="w-full text-center lg:text-start">
                    <h2 className="text-5xl text-blue"><b>The home of fresh products</b></h2>
                    <p className="text-gray my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                    <button className="bg-blue text-white py-5 px-10 rounded-md hover:bg-blue-hover mx-auto lg:mx-0">Learn About us</button>
                  </div>
                  <div className="w-full">
                    <img src="/Team image.png" alt="" className="mx-auto" />
                  </div>
                </section>
                <section className="min-h-[75vh] bg-black text-white flex flex-wrap justify-around items-center py-[50px] px-[50px] lg:px-[100px] gap-[50px]">
                    {/* <div>
                        <img src="" alt="" />
                    </div> */}
                    <div className="max-w-[400px] text-center">
                        <h2 className="text-7xl"><b>62</b></h2>
                        <img src="wave blue.svg" alt="wave" className="my-[25px] mx-auto" />
                        <p className="text-lg">Fiesty Menu Items</p>
                    </div>
                    <div className="max-w-[400px] text-center">
                        <h2 className="text-7xl"><b>139</b></h2>
                        <img src="wave blue.svg" alt="wave" className="my-[25px] mx-auto" />
                        <p className="text-lg">Fiesty Menu Items</p>
                    </div>
                    <div className="max-w-[400px] text-center">
                        <h2 className="text-7xl"><b>34</b></h2>
                        <img src="wave blue.svg" alt="wave" className="my-[25px] mx-auto" />
                        <p className="text-lg">Fiesty Menu Items</p>
                    </div>
                    <div className="max-w-[400px] text-center">
                        <h2 className="text-7xl"><b>57</b></h2>
                        <img src="wave blue.svg" alt="wave" className="my-[25px] mx-auto" />
                        <p className="text-lg">Fiesty Menu Items</p>
                    </div>
                </section>
            </main>
        </>
    )
}