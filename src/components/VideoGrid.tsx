import { VideoCard } from "./VideoCard"
const VIDEOS = [{
    title: "How to learn coding in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
},
{
    title: "How to learn jumping in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
},
{
    title: "How to learn falling in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
},
{
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
},
{
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
},
{
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}, {
    title: "How to learn crying in 30 Days-Code with Me season 1",
    image: "photo.png",
    thumbImage: "photo.png",
    author: "Gaurav",
    views: "20M",
    timestamp: "2 Days ago"
}

]
export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}
