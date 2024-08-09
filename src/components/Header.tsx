import React, { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        const burger = document.querySelector(".burger") as HTMLElement | null;
        const navLists = document.querySelector("nav") as HTMLElement | null;

        if (burger && navLists) {
            const handleBurgerClick = () => {
                navLists.classList.toggle("nav-active");
                burger.classList.toggle("toggle-burger");
            };

            burger.addEventListener("click", handleBurgerClick);

            // Cleanup function
            return () => {
                burger.removeEventListener("click", handleBurgerClick);
            };
        }
    }, []);

    return (
        <header>
            <div className="main-container">
                <div className="nav">
                    <div className="logo">
                        <a href="#hero">PORTFOLIO.</a>
                    </div>

                    <nav>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#experiences">Experience</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#portfolios">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="burger">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>
                </div>

                <section id="hero">
                    <div className="hero-left">
                        <h3 className="pre-title">Halo! Namaku</h3>
                        <h1 className="hero-name">Muhammad <span>Asyraf</span></h1>
                        <p>
                            Mahasiswa IT dengan pengalaman di berbagai bidang. Fokus dalam Website Development, serta berpengalaman di bidang Public Relation.
                        </p>
                    </div>
                    <div className="hero-right">
                        <img src="./images/foto_diri.png" alt="foto_diri" />
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;