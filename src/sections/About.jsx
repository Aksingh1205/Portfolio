const About = () => {
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Hi, I'm Arpit</p>
                        <p className="grid-subtext">Aspiring Software Engineer with a passion for web development and programming. Currently exploring innovative solutions through technology.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid21.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                    I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                    applications
                </p>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About