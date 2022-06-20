export default class Package {
    constructor(title, additive, benefits, volume, parent, url, isActive, textToToggle) {
        this.title = title,
            this.additive = additive,
            this.benefits = benefits,
            this.volume = volume,
            this.parent = document.querySelector(parent),
            this.isActive = isActive,
            this.url = url,
            this.textToToggle = textToToggle
    }
    render() {
        const pack = document.createElement('div');
        pack.classList.add('package__item');
        pack.innerHTML = `
        <div class="package__inner">
         <div class="corner"></div>
         <h3 class="package__title">${this.title}</h3>
         <h5 class="package__additive">${this.additive}</h5>
         <ul class="package__benefits-list">
         </ul>
         <img class="package__img" src="./images/package-fon.jpg" alt="cat">
         <div class="package__volume">
            ${this.volume}
            <span>КГ</span>
         </div>
        </div>
        <p class="package__text">Чего сидишь? поррадуй котэ,<a class="package__link" href="${this.url}">купи</a></p>
        `;
        this.parent.append(pack);
        for (let i = 0; i < this.benefits.length; i++) {
            const parentBenefits = document.querySelectorAll('.package__benefits-list');
            let advantage = document.createElement('li');
            advantage.classList.add('benefits__item');
            advantage.textContent = this.benefits[i];
            parentBenefits[parentBenefits.length - 1].append(advantage);
        }
        if (!this.isActive) {
            pack.querySelector('.package__inner').classList.add('inActive');
            pack.querySelector('p').textContent = `Печалька, с ${this.additive} закончился.`;
            pack.querySelector('p').style.color = '#FFFF66';
        }
        pack.addEventListener('click' , handler.bind(this));
        return this;
    }
}
function handler(event){
    let target = event.currentTarget.firstElementChild;
    if(target.classList.contains('inActive')) return false;
    if(!target.classList.contains('selected')){
        target.classList.add('selected')
        event.currentTarget.lastElementChild.textContent = this.textToToggle;
    }else{
        target.classList.remove('selected')
        event.currentTarget.lastElementChild.innerHTML = ` <p class="package__text">Чего сидишь? поррадуй котэ,<a class="package__link" href="${this.url}">купи</a></p>`;
    }
}
















// {
//     let text = pack.querySelector('p');
//     const oldValue = pack.querySelector('p').textContent;
//     let textValue = this.text;
//     pack.addEventListener('click', function () {
//         if (!pack.parentElement.classList.contains('selected')) {
//             console.log('asd')
//             text.textContent = textValue;
          
//         }
//         if (oldValue === this.textToToggle) {
//             console.log('asdddd')
//             text.textContent = oldValue;
//         }
//     });
// }
