export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer ">
        <img className="rounded" src={props.thumbImage}></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full h-12 w-12" src={props.image}></img>
            </div>
            <div className="col-span-11 pl-2">
                <div>
                    {props.title}
                </div>
                <div className="col-span-11 text-gray-400 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-400 text-sm">
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
    </div>
}
