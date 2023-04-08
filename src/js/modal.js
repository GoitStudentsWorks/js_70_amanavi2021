import markupModalMovie from '../templates/markupModalMovie.hbs';
import apiService from './apiService';

export function toggleModal() {
  const refs = {
    openModal: document.querySelector('[data-modal-open]'),
    closeModal: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    testbtn: document.querySelector('.button-movie'),
    filmInfo: document.querySelector('.film-info__wrap'),
  };

  refs.openModal.addEventListener('click', toggleModal);
  refs.closeModal.addEventListener('click', toggleModal);
  refs.testbtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    renderList();
  }
}

function renderList(data) {

 const markupList =
       `<div class="thumb">
    <img class="modal__image" src='{{curFilm.poster_path}}' alt="" />
</div>
<div class="content__text">
    {{#if curFilm.original_title}}
    <h2 class="modal__title">{{curFilm.original_title}}</h2>
    {{/if}}
    {{#if curFilm.name}}
    <h2 class="modal__title">{{curFilm.name}}</h2>
    {{/if}}
    <div class="wrap-modal">
        <ul class="modal__list modal__list--keys">
            <li>Vote / Votes</li>
            <li>Popularity</li>
            <li>Original Title</li>
            <li>Genre</li>
        </ul>
        <ul class="modal__list modal__list--values">
            <li class="modal-list__item">
                <span class="modal__rating--orange">{{curFilm.vote_average}}</span>
                <span class="modal__rating--slash"> /</span>
                <span class="modal__rating">{{curFilm.vote_count}}</span>
            </li>
            <li>{{curFilm.popularity}}</li>
            <li>{{#if curFilm.original_title}}
                <p>{{curFilm.original_title}}</p>
                {{/if}}
                {{#if curFilm.name}}
                <p>{{curFilm.name}}</p>
                {{/if}}
            </li>
            <li>{{curFilm.genre_ids}}</li>
        </ul>
    </div>
    <div class="modal-text">
        <h3 class="modal-text__title">About</h3>
        <p class="modal-text__item">{{curFilm.overview}}</p>
    </div>
    <ul class='list-buttons'>
        <li>
            <button type='submit' class='button-modal button-modal--orange' id='watchedInModal'>Add to watched</button>
        </li>
        <li>
            <button type='submit' class='button-modal' id='queueInModal'>add to queue</button>
        </li>
        <li>
            <button type='submit' class='button-modal button-modal--trailer' id='trailer'>Trailer</button>
        </li>
    </ul>
</div>`;
    refs.filmInfo.insertAdjacentHTML(`beforeend`, markupList);
    }
    


