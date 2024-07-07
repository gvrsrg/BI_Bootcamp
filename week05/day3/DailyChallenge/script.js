function generateMadLib(event) {
    event.preventDefault()
    const nounValue = document.getElementById('noun').value;
    const adjectiveValue = document.getElementById('adjective').value;
    const personValue = document.getElementById('person').value;
    const verbValue = document.getElementById('verb').value;
    const placeValue = document.getElementById('place').value;
    const stories = [
        `Once upon a time, a ${adjectiveValue} ${nounValue} named ${personValue} decided to ${verbValue} at the ${placeValue}. It was an adventure they would never forget!`,
        `${personValue} always thought that the ${adjectiveValue} ${nounValue} would ${verbValue} at the ${placeValue}. And one day, it did.`,
        `In a ${adjectiveValue} land, far away, a ${nounValue} named ${personValue} loved to ${verbValue} at the ${placeValue}.`,
        `Every ${nounValue} in the ${placeValue} knew that ${personValue} was the most ${adjectiveValue} because they could ${verbValue} so well.`,
        `The ${adjectiveValue} ${nounValue} and ${personValue} went on a journey to ${verbValue} at the famous ${placeValue}.`,
        `Long ago, in the ${placeValue}, there was a ${nounValue} that ${verbValue} every day with ${personValue}. It was ${adjectiveValue}.`,
        `${personValue} found a ${adjectiveValue} ${nounValue} while walking through the ${placeValue}. They decided to ${verbValue} together.`,
        `At the ${placeValue}, a ${nounValue} named ${personValue} was known for being very ${adjectiveValue}. They loved to ${verbValue}.`,
        `Everyone in the ${placeValue} talked about the ${adjectiveValue} ${nounValue} that ${personValue} brought to life with their ${verbValue}.`,
        `The ${adjectiveValue} ${nounValue} and ${personValue} became best friends when they met at the ${placeValue} and decided to ${verbValue} together.`
    ];
    const story = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById('story').innerText = story;

}

function dc(){
    const form = document.getElementById('libform');
    form.addEventListener('submit', generateMadLib);


    document.getElementById('noun').setAttribute("required", "");
    document.getElementById('adjective').setAttribute("required", "");
    document.getElementById('person').setAttribute("required", "");
    document.getElementById('verb').setAttribute("required", "");
    document.getElementById('place').setAttribute("required", "");
}

dc()