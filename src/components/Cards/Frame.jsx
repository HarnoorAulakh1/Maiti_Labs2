import Card from "./Card";
import styles from "./Card.module.css";

const card = [
  {
    img: "https://s3-alpha-sig.figma.com/img/ff0e/5958/2400382be08eedc8fb2d36b2fd7c58a7?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IO5Cf1WaRTtgkUwb4IcDE0LGmBzM9j2nyRkoythvVdcu3N7F6AbDjjuVzcbdMQaglxmlRao~kJZgSnYNKBbqVhO75P3-iw9Y3VlPTiNtcjfRYx-BrafLpF5QhubvmwJt-XSOsI4g~Ew3a5DF~iIfVVWHjoHaCBJWT7xrzTkgRF4lmvtVCmo4C1oCQVVosCLU54zUVoajta8693PFWi~s-ZUZPeh2AlUorn8YYEGAjsBCkTDeRKieczYBFg9bbEfrOw2BkBxsNms2XiZp8HJe3wYlgbomENZDzNGvNtXI9lKiXcz7xz8ULIUzApPkbSgxLVvdVK7~xmnwaq5aU-dMTw__",
    heading: "India - Odisha & Assam",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    short: [
      "Southern Asia",
      <br key={1} />,
      "Lasts 100+ years",
      <br key={2} />,
      "€140.00 (VAT excluded)",
    ],
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/9a7a/2c3c/db0ac37f437b6f876c9bf047405b9342?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NQJURzKcGSgIXff5z4bTPZVpymmMsQpb8kDH8FMhFYBZIJDb~fbFhxOC1Snn8ZEelFYN1KQ59P1PJ7ydkqcJ~WouiEtucex0dWfAHH7tD5-zsRVOfrYEajHYDbUB0-kvNA~cnMwu-3EuN~Vz63Y4Oj464J359ev-sgs~3KOh2grwhs3J8J3ijcpTGFOgnOV68jl-odiYkQU-KCz8G0xSz2q962W~CVpvJKxkZz3VXcSQogINeprY2nhs5lcHCf7q5RmgJN5fMhS3BtseGuJFHq~-vm9Q56r~BBP8iYkfR3OS25DYyyQwfhjD~QYM7B9~s845HtBr~IMj6Fxsqm8BzQ__",
    heading: "Africa - Ghana",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    short: [
      "Africa",
      <br key={1} />,
      "Lasts 100+ years",
      <br key={2} />,
      "€140.00 (VAT excluded)",
    ],
  },
];

function Frame() {
  return (
    <div className={styles.frame1}>
        <p>Biochar Projects</p>
      <div className={styles.frame}>
        {card.map((card) => (
          <Card
            img={card.img}
            heading={card.heading}
            para={card.para}
            short={card.short}
            key={card.heading}
          />
        ))}
      </div>
    </div>
  );
}

export default Frame;
