class Video {
  constructor(titre, uploader, temps) {
    this.titre = titre;
    this.uploader = uploader;
    this.temps = temps;
  }

  watch() {
    console.log(`${this.uploader} a regardé toute la vidéo "${this.titre}" (${this.temps} secondes) !`);
  }
}

// Création de deux instances
const video1 = new Video("JavaScript Basics", "Alice", 300);
video1.watch();

const video2 = new Video("Python for Beginners", "Bob", 450);
video2.watch();

// Bonus:
const videoData = [
  { titre: "HTML Crash Course", uploader: "Charlie", temps: 200 },
  { titre: "CSS Mastery", uploader: "Diana", temps: 350 },
  { titre: "React Intro", uploader: "Eve", temps: 400 },
  { titre: "Node.js Basics", uploader: "Frank", temps: 250 },
  { titre: "Vue.js Quickstart", uploader: "Grace", temps: 180 }
];


const videos = videoData.map(data => new Video(data.titre, data.uploader, data.temps));
videos.forEach(video => video.watch());
