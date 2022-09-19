import React from "react";
import photo from '../../assets/img/mifoto.jpg'
import './Profile.css'

export const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__photo">
        <img src={photo} alt="Personal profile" loading="lazy" />
      </div>
      <div className="profile__description">
        <h1>Perfil</h1>
        <h2>
          Me integro al proceso de <strong>Tecnologías de Información o Sistemas</strong> de una
          empresa aportando desde mi rol de Ingeniero en Software. Aunque mis
          limitaciones físicas puedan generar algunas barreras en los procesos,
          son superadas con mi capacidad intelectual y mis habilidades.
        </h2>
      </div>
    </section>
  );
};
