import React, { useEffect } from "react";

const Portfolios = () => {
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper") as HTMLElement | null;
        const carousel = document.querySelector(".carousel") as HTMLElement | null;
        const arrowBtns = document.querySelectorAll(".wrapper i") as NodeListOf<HTMLElement>;

        if (!carousel || !wrapper) return;

        const firstCardWidth = carousel.querySelector(".portfolio")?.clientWidth || 0;
        const carouselChildren = Array.from(carousel.children);

        let isDragging = false, startX: number | undefined, startScrollLeft: number | undefined, timeoutId: NodeJS.Timeout | undefined;

        let cardPerView = Math.round(carousel.clientWidth / firstCardWidth);

        carouselChildren.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", (card as HTMLElement).outerHTML);
        });

        carouselChildren.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", (card as HTMLElement).outerHTML);
        });

        carousel.scrollLeft = carousel.clientWidth;

        const handleArrowClick = (direction: "left" | "right") => {
            carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
        };

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => handleArrowClick(btn.id as "left" | "right"));
        });

        const dragStart = (e: MouseEvent) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e: MouseEvent) => {
            if (!isDragging || startX === undefined || startScrollLeft === undefined) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        const autoPlay = () => {
            if (window.innerWidth < 800) return;
            timeoutId = setTimeout(() => {
                carousel.scrollLeft += firstCardWidth;
                autoPlay();
            }, 2500);
        };

        autoPlay();

        const infiniteScroll = () => {
            if (carousel.scrollLeft < 1) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.clientWidth);
                requestAnimationFrame(() => carousel.classList.remove("no-transition"));
            } else if (Math.abs(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth)) < 1) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.clientWidth;
                requestAnimationFrame(() => carousel.classList.remove("no-transition"));
            }

            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        };

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("scroll", infiniteScroll);
            wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.removeEventListener("mouseleave", autoPlay);
        };
    }, []);

    return (
        <section id="portfolios">
            <div className="main-container">
                <h3 className="pre-title">My Works</h3>
                <h1 className="section-title">Featured Portofolios</h1>
                <div className="portfolios">
                    <div className="wrapper">
                        <i id="left" className="fa-solid fa-angle-left"></i>
                        <ul className="carousel">
                            {/* Portfolio 1 */}
                            <li className="portfolio">
                                <div className="portfolio-cover">
                                    <img src="./images/portfolios/port_ilc.png" alt="Portfolio ILC" draggable="false" />
                                </div>

                                <div className="portfolio-info">
                                    <div className="portfolio-title">
                                        <h4>Landing Page ILC</h4>
                                        <a href="https://ilc.webacop.com/" className="portfolio-link" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                        </a>
                                    </div>

                                    <div className="portfolio-tags">
                                        <div>Bootstrap</div>
                                        <div>JavaScript</div>
                                    </div>

                                    <p>
                                        Pembuatan landing page Informatics Learning Club, sebagai penugasan bootcamp untuk mengimplementasikan pengetahuan seputar html, css, javascript dan bootstrap.
                                    </p>
                                </div>
                            </li>
                            {/* Portfolio 2 */}
                            <li className="portfolio">
                                <div className="portfolio-cover">
                                    <img src="./images/portfolios/port_pibiti.png" alt="Portfolio INSAK" draggable="false" />
                                </div>

                                <div className="portfolio-info">
                                    <div className="portfolio-title">
                                        <h4>Website Inspirasi Masak</h4>
                                        <a href="https://insak.webacop.com/" className="portfolio-link" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                        </a>
                                    </div>

                                    <div className="portfolio-tags">
                                        <div>Bootstrap</div>
                                        <div>Rest API</div>
                                    </div>

                                    <p>
                                        Final projek dari Pelatihan Bidang Teknologi dan Informasi yang diadakan oleh HIMATIFA. Website untuk referensi masakan berdasarkan bahan utama menggunakan API.
                                    </p>
                                </div>
                            </li>
                            {/* Portfolio 3 */}
                            <li className="portfolio">
                                <div className="portfolio-cover">
                                    <img src="./images/portfolios/port_jst.png" alt="Portfolio JST" draggable="false" />
                                </div>

                                <div className="portfolio-info">
                                    <div className="portfolio-title">
                                        <h4>JST Generator</h4>
                                        <a href="https://webjst.webacop.com/" className="portfolio-link" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                        </a>
                                    </div>

                                    <div className="portfolio-tags">
                                        <div>Javascript</div>
                                    </div>

                                    <p>
                                        Penerapan Jaringan Syaraf Tiruan dalam studi kasus logika AND untuk memenuhi final projek mata kuliah Kecerdasan Buatan. 
                                    </p>
                                </div>
                            </li>
                            {/* Portfolio 4 */}
                            <li className="portfolio">
                                <div className="portfolio-cover">
                                    <img src="./images/portfolios/port_webworld.png" alt="Portfolio JST" draggable="false" />
                                </div>

                                <div className="portfolio-info">
                                    <div className="portfolio-title">
                                        <h4>Dunia Web</h4>
                                        <a href="https://duniaweb.webacop.com/" className="portfolio-link" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                        </a>
                                    </div>

                                    <div className="portfolio-tags">
                                        <div>Javascript</div>
                                        <div>Laravel</div>
                                    </div>

                                    <p>
                                        Final project dari mata kuliah Rekayasa Perangkat Lunak. Game edukasi naratif untuk media pembelajaran pemrograman web bagi siswa ataupun mahasiswa.
                                    </p>
                                </div>
                            </li>
                            {/* Portfolio 5 */}
                            <li className="portfolio">
                                <div className="portfolio-cover">
                                    <img src="./images/portfolios/port_genteng.png" alt="Portfolio JST" draggable="false" />
                                </div>

                                <div className="portfolio-info">
                                    <div className="portfolio-title">
                                        <h4>Marketplace Genteng</h4>
                                        <a href="https://gentenggulun.webacop.com/" className="portfolio-link" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                        </a>
                                    </div>

                                    <div className="portfolio-tags">
                                        <div>Javascript</div>
                                        <div>PHP</div>
                                    </div>

                                    <p>
                                        Tugas Final Project dari mata kuliah Pemrograman Web. Website marketplace Genteng Gulun sebagai media promosi genteng di desa Gulun Magetan. 
                                    </p>
                                </div>
                            </li>
                            {/* Portfolio 6 */}
                            <li className="portfolio">
                                <div className="portfolio-cover">
                                    <img src="./images/portfolios/port_cashflow.png" alt="Portfolio JST" draggable="false" />
                                </div>

                                <div className="portfolio-info">
                                    <div className="portfolio-title">
                                        <h4>Aplikasi Cash Flow</h4>
                                        <a href="https://cashflow.rafsite.com/" className="portfolio-link" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                        </a>
                                    </div>

                                    <div className="portfolio-tags">
                                        <div>Laravel</div>
                                    </div>

                                    <p>
                                        Hasil Final Project dari bootcamp PIBITI 2024. Aplikasi kasir dengan nama Cash Flow, sebagai platform untuk administrasi pada usaha F&B.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <i id="right" className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolios;