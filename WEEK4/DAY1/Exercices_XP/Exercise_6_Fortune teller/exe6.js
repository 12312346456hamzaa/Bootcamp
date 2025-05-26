(function(children, partner, location, job) {
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    // On crée un nouvel élément dans le DOM
    const p = document.createElement('p');
    p.textContent = sentence;
    document.body.appendChild(p);
})(3, "Alex", "Paris", "Web Developer");
