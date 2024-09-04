import Image from "next/image";

interface OrderCardProps {
    image: string;
    name: string;
    price: number;
    content: string;
}

const OrderCard: React.FC<OrderCardProps> = (props) => {
    return (
        <>
            <div className="max-w-[350px] md:hover:border-blue p-[15px] border-[1px] border-light-gray rounded-xl text-start flex flex-col md:flex-row md:max-w-full lg:min-w-[500px] lg:max-w-[600px] gap-[25px]">
                <a href={`/order/${encodeURIComponent(props.name)}`} className="block relative">
                    <Image 
                        src={props.image} 
                        alt={props.name}
                        width={500}
                        height={500}
                        className="rounded-xl md:max-w-[150px] object-fill" 
                    />
                </a>
                <div>
                    <div>
                        <div className="md:flex md:justify-between md:items-center">
                            <a href={`/order/${encodeURIComponent(props.name)}`}>
                                <h3 className="text-md cursor-pointer"><b>{props.name}</b></h3>
                            </a>
                            <span className="text-blue">$ {props.price} USD</span>
                        </div>
                        <p className="my-[15px] text-gray">{props.content}</p>
                    </div>
                    <div>
                        <div className="flex justify-start items-center gap-[15px]">
                            <input 
                                type="number"
                                className="max-w-[60px] min-h-[45px] md-light-gray border-[1px] border-black rounded-md p-[10px]" 
                                defaultValue={1}
                                min={1}
                                max={100}
                                step={1}
                            />
                            <button className="py-3 px-6 rounded-md bg-blue md:hover:bg-blue-hover text-white">
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
