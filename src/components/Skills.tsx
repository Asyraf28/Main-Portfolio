import React from "react";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills main-container">
                <h3 className="pre-title">Learning Path</h3>
                <h1 className="section-title">Skills & Education</h1>

                <div className="skills-grid">
                    <div className="skills-left">
                        {/* Education 1 */}
                        <div className="education">
                            <div className="line">
                                <div></div>
                            </div>
        
                            <div className="education-info">
                                <h4 className="education-title">Universitas Pembangunan Nasional "Veteran" Jawa Timur</h4>
                                <p>S1 - Informatika</p>
                                <h4 className="education-years">2022 - Sekarang</h4>
                            </div>
                        </div>
        
                        {/* Education 2 */}
                        <div className="education">
                            <div className="line">
                                <div></div>
                            </div>
        
                            <div className="education-info">
                                <h4 className="education-title">SMAN 1 Maospati</h4>
                                <p>IPA</p>
                                <h4 className="education-years">2019 - 2022</h4>
                            </div>
                        </div>
        
                        {/* Education 3 */}
                        <div className="education">
                            <div className="line">
                                <div></div>
                            </div>
        
                            <div className="education-info">
                                <h4 className="education-title">Vocational School Graduate Academy Digital Talent Scholarship 2023</h4>
                                <p>Junior Web Developer</p>
                                <h4 className="education-years">2023 - 2023</h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills-right">
                        <p>Mengikuti berbagai pelatihan juga sertifikasi di bidang Website Development selama dua tahun masa kuliah. Memiliki banyak pengalaman dalam meningkatkan sofskill dengan mengikuti beberapa volunteer maupun internship.</p>
        
                        <div className="skills-list">
                            <ul>
                                <li>HTML & CSS</li>
                                <li>Typescript</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Bootstrap</li>
                                <li>Laravel</li>
                                <li>ReactJS</li>
                                <li>SQL</li>
                            </ul>
        
                            <ul>
                                <li>Problem Solving</li>
                                <li>Kerjasama Tim</li>
                                <li>Time Management</li>
                                <li>Kepemimpinan</li>
                                <li>Negosiasi</li>
                                <li>Komunikasi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;