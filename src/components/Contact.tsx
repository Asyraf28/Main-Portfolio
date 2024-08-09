import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xovaaelk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success
      alert('Pesan berhasil dikirim!');
      reset(); // Reset form fields
    } catch (error) {
      // Handle error
      alert('Terjadi kesalahan, silakan coba lagi.');
    }
  };

  return (
    <section id="contact">
      <div className="contact main-container">
        <h3 className="pre-title">Contact</h3>
        <h1 className="section-title contact-title">Lebih Dekat</h1>

        <div className="contact-grid">
          <div className="contact-left">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Nama"
                  {...register('name', { required: 'Nama wajib diisi' })}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email', { 
                    required: 'Email wajib diisi',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Format email tidak valid'
                    }
                  })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Pesan"
                  {...register('message', { required: 'Pesan wajib diisi' })}
                  cols={30}
                  rows={10}
                />
                {errors.message && <p className="error-message">{errors.message.message}</p>}
              </div>
              <div>
                <button type="submit" className="btn-submit">Kirim Pesan</button>
              </div>
            </form>
          </div>
          <div className="contact-right">
            {/* Contact item 1 */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                </svg>
              </div>                
              <div className="contact-item-detail">
                <h4>Alamat</h4>
                <p>Jl.Raya Medokan Sawah No.70a, Medokan Ayu, Rungkut, Surabaya</p>
              </div>
            </div>
            {/* Contact item 2 */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"/>
                </svg>
              </div>                
              <div className="contact-item-detail">
                <h4>Nomor</h4>
                <p>+62 813 5725 1810</p>
              </div>
            </div>
            {/* Contact item 3 */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                </svg>
              </div>                
              <div className="contact-item-detail">
                <h4>Email</h4>
                <p>mohasyraf28@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
