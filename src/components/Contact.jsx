import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contactcontainer">
        <h1>Contactanos</h1>
      <div className="block-container">
        <div className="contact-column">
          <form action="" className="form-control">
            <div className="form-item">
              <p>Nombres</p>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-item">
              <p>Email</p>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-item">
              <p>Teléfono</p>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className="form-item">
              <p>Producto</p>
              <input type="text" name="product" id="product" />
            </div>
            <div className="form-item">
              <p>Mensaje</p>
              <textarea name="mesage" id="" cols="64" rows="10" />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-column">
          <div>
              <h2>Nosotros</h2>
              <p className="contact-item">Somos una empresa enconstante crecimiento, de desarrolladores de tecnología y productores de nuestro equipo</p>
              <p className="contact-item">Nosotros contamos con varias líneas de productos, como sistemas de iluminaria, domótica, robótica, electrónica, electrodomésticos, páneles de control, botoneras personalizadas entre otros...</p>
              <p className="contact-item">Contamos con personal calificado con la instrumentación adecuada, nuestro file de proyectos, nos encontramos en constante crecimiento con nuestra propia política de calidad, compromiso y confidencialidad de nuestros clientes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
