import React from "react";
import styles from './styleHome.module.css';


const moonImage = 'https://hips.hearstapps.com/clv.h-cdn.co/assets/17/26/1600x1040/gallery-1498838810-gettyimages-461493851.jpg?resize=1200:*';

const Home = () => {
   return (
      <div className={styles.container}>
         <img className={styles.moon} src={moonImage} alt="moonImage" />
         <p className={styles.paragraph}>The Moon is Earth's only natural satellite and is about 1/6th the size of Earth. It's approximately 4.5 billion years old, which makes it relatively young compared to some other objects in our solar system.

            Phases of the Moon: The Moon goes through different phases as it orbits the Earth. These phases are caused by the changing positions of the Moon, Earth, and the Sun. The most well-known phases are the New Moon (when the Moon is mostly invisible), First Quarter, Full Moon, and Last Quarter.

            Lunar Impact Craters: The Moon's surface is covered with impact craters, which were formed by the impact of meteoroids and asteroids over millions of years. One of the most famous impact craters is the "Tycho" crater, known for its prominent rays that stretch across the Moon's surface.

            Moon's Effect on Earth: The Moon plays a significant role in Earth's tides due to its gravitational pull. This phenomenon is most noticeable in oceans, where high and low tides are influenced by the Moon's position relative to the Earth.

            Moon Landing: On July 20, 1969, NASA's Apollo 11 mission successfully landed the first humans, Neil Armstrong and Edwin "Buzz" Aldrin, on the Moon. Armstrong's famous words as he stepped onto the lunar surface were, "That's one small step for [a] man, one giant leap for mankind."

            Moon's Far Side: The side of the Moon that faces away from Earth is often referred to as the "far side" or the "dark side" of the Moon. Despite the common misconception, the far side isn't always dark; it's just not visible from Earth. The Soviet spacecraft Luna 3 captured the first images of the Moon's far side in 1959.

            Moonquakes: The Moon experiences seismic activities known as moonquakes, although they are generally weaker than earthquakes. They are believed to be caused by the gravitational interactions between the Moon and the Earth.

            Future Lunar Missions: After the Apollo program, there's renewed interest in exploring the Moon. NASA's Artemis program aims to return humans to the Moon and establish a sustainable presence there by the mid-2020s. Additionally, other space agencies and private companies are planning their own lunar missions.

            The Moon continues to capture the imagination of scientists, astronomers, and space enthusiasts worldwide, offering valuable insights into the early history of our solar system and the potential for future space exploration.</p>
      </div>
   );
};

export default Home;

