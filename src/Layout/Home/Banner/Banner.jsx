import Feature from "./Feature";
import classes from "./Banner.module.css";
const Banner = () => {
  const features = [
    {
      id: 1,
      icon: ()=><>shopping</>,
      description: "Compra simples e segura",
      backgroundColor: '#c47f17'
    },
    {
      id: 2,
      icon: ()=><>faBoxesPacking</>,
      description: "Embalagem mantém o café intacto",
      backgroundColor: '#574f4d'
    },
    {
      id: 3,
      icon: ()=><>faStopwatch</>,
      description: "Entrega rápida e rastreada",
      backgroundColor: '#dbac2c'
    },
    {
      id: 4,
      icon: ()=><>faMugHot</>,
      description: "O café chega fresquinho até você",
      backgroundColor: '#8047f8'
    },
  ];
  return (
    <div className={classes["banner-container"]}>
      <div className={classes["banner"]}>
        <section className={classes["banner-section"]}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
          <div className={classes["banner-features"]}>
            {features.map((feature) => (
              <Feature
                key={feature.id}
                id={feature.id}
                description={feature.description}
                backgroundColor = {feature.backgroundColor}
              >
               <feature.icon></feature.icon>
              </Feature>
            ))}
          </div>
        </section>

        <div className={classes["banner-image"]}>
          <img
            src="https://coffe-delivery-lemon.vercel.app/assets/hero-image.731f3849.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
