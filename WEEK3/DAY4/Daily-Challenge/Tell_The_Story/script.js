const form = document.getElementById('libform');
const storySpan = document.getElementById('story');
const shuffleBtn = document.getElementById('shuffle-button');

let userValues = {};
let stories = [
    (n, a, p, v, pl) => `Once upon a time, ${p} went to the ${pl} with a ${a} ${n}. There, they decided to ${v} all day long!`,
    (n, a, p, v, pl) => `${p} couldn't believe their eyes when they saw a ${a} ${n} trying to ${v} at the ${pl}.`,
    (n, a, p, v, pl) => `In the middle of the ${pl}, ${p} found a ${a} ${n}. "Let's ${v}!" shouted everyone.`,
    (n, a, p, v, pl) => `Legend has it that only a ${a} ${n} can ${v} in ${pl}, and ${p} was ready to try.`,
];

let lastStoryIndex = -1;

function generateStory() {
    if (!userValues.noun || !userValues.adjective || !userValues.person || !userValues.verb || !userValues.place) {
        storySpan.textContent = "Please fill in all fields!";
        return;
    }
    let idx = Math.floor(Math.random() * stories.length);
    
    while (stories.length > 1 && idx === lastStoryIndex) {
        idx = Math.floor(Math.random() * stories.length);
    }
    lastStoryIndex = idx;
    const { noun, adjective, person, verb, place } = userValues;
    storySpan.textContent = stories[idx](noun, adjective, person, verb, place);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    userValues = {
        noun: document.getElementById('noun').value.trim(),
        adjective: document.getElementById('adjective').value.trim(),
        person: document.getElementById('person').value.trim(),
        verb: document.getElementById('verb').value.trim(),
        place: document.getElementById('place').value.trim(),
    };
    
    if (Object.values(userValues).some(val => val === "")) {
        storySpan.textContent = "Please fill in all fields!";
        return;
    }
    generateStory();
});


shuffleBtn.addEventListener('click', function() {
    
    if (userValues && Object.values(userValues).every(val => val !== "")) {
        generateStory();
    } else {
        storySpan.textContent = "Please fill in all fields and submit first!";
    }
});
