import React from "react";

const Experiences = () => {
    return (
        <section id="experiences">
            <div className="experiences main-container">
                <h3 className="pre-title">Experince</h3>
                <h1 className="section-title experiences-title">Pengalaman Diri</h1>

                <div className="grid-3">
                    {/* Service 1 */}
                    <div className="experince">
                        <div className="experince-icon"> 
                            <img src="./images/logo_sp.png" width="50" height="50" alt="Logo Smartpath" />
                        </div>
                        <h3>SmartPath</h3>
                        <h4>Community Development</h4>
                        <p>Menjadi customer service perusahaan, serta handle komunitas internal. Marketing promotion untuk setiap event ataupun produk melalui berbagai platform.</p>
                    </div>
                    {/* Service 2 */}
                    <div className="experince">
                        <div className="experince-icon">
                            <img src="./images/logo_ideal2.jpg" width="50" height="50" alt="Logo IDEAL" />
                        </div>
                        <h3>IDEAL</h3>
                        <h4>Public Relation</h4>
                        <p>Narahubung antara internal dengan komunitas luar. Listing komunitas external untuk menjadi partnership dan menjadi MC pada beberapa event.</p>
                    </div>
                    {/* Service 3 */}
                    <div className="experince">
                        <div className="experince-icon"> 
                            <img src="./images/logo_pr.png" width="50" height="50" alt="Logo Pagar Raya" />
                        </div>
                        <h3>Pagar Raya</h3>
                        <h4>Social Media</h4>
                        <p>Membuat content planning untuk konten-konten di instagram organisasi. Berhasil mendapatkan insight yang cukup besar baik followers maupun interaction.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;