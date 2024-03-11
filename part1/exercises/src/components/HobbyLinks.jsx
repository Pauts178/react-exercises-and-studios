export default function HobbyLinks() {
    const hobbyLinks = ['https://design.cricut.com/', 
    'https://www.iheart.com/podcast/', 
    'https://barkdogbar.com/locations/st-louis-mo/' ];
    return (
        <div>
            <h1>My Hobbies</h1>
            <a href= {hobbyLinks[0]}>Cricut Design Space</a>
            <a href= {hobbyLinks[1]}>iHeart Radio Podcasts</a>
            <a href= {hobbyLinks[2]}>Bar K</a>
        </div>
    )
}