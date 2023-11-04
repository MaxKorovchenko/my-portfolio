import filmoteka from '../images/projects/filmoteka.jpg';
import iceCream from '../images/projects/ice-cream.jpg';
import gooseTrack from '../images/projects/goose-track.jpg';
import photoGallery from '../images/projects/photo-gallery.jpg';
import movieFinder from '../images/projects/movie-finder.jpg';
import retroGames from '../images/projects/retro-games.jpg';

export const projects = [
  {
    id: '1',
    name: 'Ice Cream',
    type: 'team',
    role: 'Team lead',
    cover: iceCream,
    description:
      'Ice company website with responsive layout, burger menu, modal window, and attractive design',
    technologies: 'HTML, SASS, JS',
    github: 'https://github.com/MaxKorovchenko/goit-icecream',
    livePage: 'https://maxkorovchenko.github.io/goit-icecream/',
  },
  {
    id: '2',
    name: 'Filmoteka',
    type: 'team',
    role: 'Developer',
    cover: filmoteka,
    description: 'An application for choosing a movie',
    technologies: 'HTML, SASS, JS, REST API',
    github: 'https://github.com/vadrille12/Filmoteka',
    livePage: 'https://vadrille12.github.io/Filmoteka/',
  },
  {
    id: '3',
    name: 'Goose Track',
    type: 'team',
    role: 'Developer',
    cover: gooseTrack,
    description: 'An application for planning any tasks',
    technologies: 'HTML, CSS, JS, React, Redux, Node.js, Express, MongoDB',
    github: 'https://github.com/vadrille12/GooseTrack_frontend',
    livePage: 'https://vadrille12.github.io/GooseTrack_frontend',
  },
  {
    id: '4',
    name: 'Photo Gallery',
    type: 'solo',
    role: 'Developer',
    cover: photoGallery,
    description: 'An application for searching and viewing images by keyword',
    technologies: 'HTML, CSS, JS, React',
    github: 'https://github.com/MaxKorovchenko/goit-js-hw-11',
    livePage: 'https://maxkorovchenko.github.io/goit-js-hw-11/',
  },
  {
    id: '5',
    name: 'Movie Finder',
    type: 'solo',
    role: 'Developer',
    cover: movieFinder,
    description: 'An application for searching movies',
    technologies: 'HTML, CSS, JS, React',
    github: 'https://github.com/MaxKorovchenko/goit-react-hw-05-movies',
    livePage: 'https://maxkorovchenko.github.io/goit-react-hw-05-movies/',
  },
  {
    id: '6',
    name: 'Retro games (site under construction)',
    type: 'solo',
    role: 'Developer',
    cover: retroGames,
    description:
      'Nostalgic application immersing you in the gaming world of the 90s',
    technologies: 'HTML, CSS, JS, React, Redux, Node.js, Express, MongoDB',
    github: '',
    livePage: '',
  },
];
