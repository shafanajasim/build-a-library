
class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
 
 get title() {
  return this._title;
 }
 get isCheckedOut() {
  return this._isCheckedOut;
}
 
 get ratings() {
  return this._ratings;
 }

 set isCheckedOut(value){
  this._isCheckedOut = value;
 }

 toggleCheckOutStatus() {
  this._isCheckedOut = !this._isCheckedOut;
 }

getAverageRating() {
  let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
      return ratingsSum / this.ratings.length
}

addRating(rating) {
  if (rating >= 1 && rating <= 5) {
      this._ratings.push(rating);
    } else {
      console.log('Rating must be between 1 and 5.');
    }
  }
}

class Book extends Media {
  constructor(author,title,pages,genre) {
    super(title);
    this._author = author;
    this._title = title;
    this._pages = pages;
    this._genre = genre;
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
  get pages() {
    return this._pages;
  }
  get genre() {
    return this._genre;
  }
}
class Movie extends Media {
  constructor(director,title,runTime,mmovieCast) {
    super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }

    get runTime() {
      return this._runTime;
    }
    get movieCast() {
      return this._movieCast;
    }
  }

  class CD extends Media {
    constructor(artist,title,songs) {
      super(title);
      this._artist = artist;
      this._songs = songs;
    }

    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    shuffle() {
    for (let i = this._songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._songs[i], this._songs[j]] = [this._songs[j], this._songs[i]];
    }
    return this._songs;
  }
}
class Catalog {
  constructor() {
    this._mediaItems = [];
  }

  addMedia(mediaItem) {
    this._mediaItems.push(mediaItem);
  }

  listMedia() {
    this._mediaItems.forEach(item => {
      console.log(`Title: ${item.title}, Type: ${item.constructor.name}`);
    });
  }
}


  const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544,'science');
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);

  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont','Speed',116, ['Keanu Reeves', 'Sandra Bullock']);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


const darkSideOfTheMoon = new CD('Pink Floyd', 'The Dark Side of the Moon', ['Speak to Me', 'Breathe', 'On the Run']);

// Create an instance of Catalog
const libraryCatalog = new Catalog();

// Add media instances to the catalog
libraryCatalog.addMedia(historyOfEverything);
libraryCatalog.addMedia(speed);
libraryCatalog.addMedia(darkSideOfTheMoon);

// Log the catalog contents
libraryCatalog.listMedia();



