import React from "react";
import pdfFile from "../assets/resume.pdf";

const About = () => {
    return (
        <section id="about" className="main-container">
            <div className="about">
                <div className="about-left">
                    <img src="./images/foto_diri2.jpg" alt="foto_diri" />
                </div>
                <div className="about-right">
                    <h3 className="pre-title">About Me</h3>
                    <h1 className="section-about-title">Data Diri</h1>
                    <p>Mahasiswa Informatika tahun kedua yang cukup aktif dalam organisasi maupun dunia karir. Memiliki beberapa pengalaman profesional dengan pencapaian yang bagus.</p>

                    <div className="data-diri">
                        <div className="label-about">
                            <p><strong>Nama</strong></p>
                            <p><strong>TTL</strong></p>
                            <p><strong>Umur</strong></p>
                            <p><strong>Alamat</strong></p>
                            <p><strong>Interest</strong></p>
                        </div>
                        <div className="desk-about">
                            <p>: Muhammad Asyraf</p>
                            <p>: Magetan, 28 Juni 2004</p>
                            <p>: 20 Tahun</p>
                            <p>: Jl.Raya Medokan Sawah No.70a Rungkut</p>
                            <p>: Website Development, Digital Marketing, Public Relation</p>
                        </div>
                    </div>
                    <a href={pdfFile} target="_blank" rel="noopener noreferrer">
                        <button className="btn"><strong>Download CV</strong></button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;