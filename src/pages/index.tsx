import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <VideoCard
                title={"How to learn coding in 30 Days-Code with Me season 1"}
                image={"photo.png"}
                thumbImage={"photo.png"}
                author={"Gaurav"}
                views={"20M"}
                timestamp={"2 Days ago"}
            ></VideoCard>
        </div>
    )
}
