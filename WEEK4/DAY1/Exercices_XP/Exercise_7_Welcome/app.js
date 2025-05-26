(function(username) {
    
    const profileDiv = document.createElement('div');
    profileDiv.className = 'user-profile';

    const nameSpan = document.createElement('span');
    nameSpan.textContent = username;

    const img = document.createElement('img');
    img.src = "https://i.pravatar.cc/150?u=" + username; 
    img.alt = username + " profile picture";

    profileDiv.appendChild(nameSpan);
    profileDiv.appendChild(img);

    document.querySelector('.navbar').appendChild(profileDiv);
})('John');
