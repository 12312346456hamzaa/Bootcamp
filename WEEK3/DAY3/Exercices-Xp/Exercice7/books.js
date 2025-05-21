const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
    alreadyRead: false
  }
];


const section = document.querySelector('.listBooks');


allBooks.forEach(book => {
  const bookDiv = document.createElement('div');
  bookDiv.style.marginBottom = "20px";
  
  
  const details = document.createElement('p');
  details.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    details.style.color = 'red';
  }

  
  const img = document.createElement('img');
  img.src = book.image;
  img.style.width = "100px";
  
  
  bookDiv.appendChild(details);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
});
