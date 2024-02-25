import ceoPhoto from "../../../../assets/about.png"
const About = () => {
    return (
        <div className="w-3/4 mx-auto my-10">
            <h1 className="text-3xl font-bold text-[#14A800]">About Us</h1>
            <p>The world’s work marketplace</p>
            <div className="flex gap-3 items-center my-3">
                <div>
                    <img className="w-20" src={ceoPhoto} alt="" />
                </div>
                <div>
                    <p className="text-2xl font-bold">Hayden Brown</p>
                    <p className="text-base font-bold">President & CEO</p>
                </div>
            </div>
            <p className="text-gray-500">HirePark began over two decades ago by pioneering a better way of working, helping businesses find more flexibility and connecting talent with more opportunities.</p>
            <p className="text-xl text-[#14A800]">Our mission to create economic opportunities so people have better lives has taken us so much further. As a result, we’ve become the world’s work marketplace where every day businesses of all sizes and independent talent from around the globe meet here to accomplish incredible things.</p>
            <p>Like for so many, HirePark has had a big impact on my life. I first came to this company on the product team and over the years have understood what makes this platform really work: the relationships.

                We see what you do

                I have personally seen the passion and commitment that every user puts into their work here. Whether it’s a quick powerpoint presentation or a multi-year development project - both talent on HirePark and our clients care about doing really good work because they love what they do.

                In fact, we designed it that way. Our work marketplace aligns the goals of our clients with the goals of talent on HirePark so that outcomes are better and everyone grows in the same direction. You’ll find tools to develop your skills, evolve your business, and gain the control and freedom you need for success.

                HirePark is your workforce

                If you’re a client that’s come here to get things done, use this workforce of independent  talent to build faster and transform your business. If you’re independent talent that’s come here to realize your potential, know that you are a valuable and instrumental part of someone’s team.

                We make work more rewarding

                We see your vision, and everything we do is an effort to help you make the connections that will turn that vision into reality, by building your Virtual Talent Bench of trusted people.

                The impact is both economic and personal, in the everyday and in the long run. When you find the right people, you stop working to get by and start working strategically.

                That is when real opportunity emerges.

                I can say with confidence that the HirePark team - the team that serves you the talent and you the client - is still driven by our mission to create economic opportunity for our people around the world.

                You are our people now, and we are glad that you are here.

                We can not wait to see what you do.

            </p>
        </div>
    );
};

export default About;