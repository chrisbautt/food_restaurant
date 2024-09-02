interface OrderCardProps {
    image: string;
    name: string;
    price: number;
    content: string;
}

const OrderCard: React.FC<OrderCardProps> = (props) => {
    return (
        <>
            <div className="max-w-[350px] lg:hover:border-blue p-[15px] border-[1px] border-light-gray rounded-xl text-start flex flex-col lg:flex-row lg:max-w-[600px] gap-[25px]">
                <a href={`/order/${encodeURIComponent(props.name)}`}>
                    <img src={props.image} alt={props.name} className="rounded-xl lg:max-w-[150px]" />
                </a>
                <div>
                    <div>
                        <div className="lg:flex lg:justify-between lg:items-center">
                            <a href={`/order/${encodeURIComponent(props.name)}`}>
                                <h3 className="text-lg cursor-pointer"><b>{props.name}</b></h3>
                            </a>
                            <span className="text-blue">$ {props.price} USD</span>
                        </div>
                        <p className="my-[15px] text-gray">{props.content}</p>
                    </div>
                    <div>
                        <div className="flex justify-start items-center gap-[15px]">
                            <input 
                                type="number"
                                className="max-w-[60px] min-h-[45px] bg-light-gray border-[1px] border-black rounded-md p-[10px]" 
                                defaultValue={1}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <button className="py-3 px-6 rounded-md bg-blue lg:hover:bg-blue-hover text-white">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderCard;
