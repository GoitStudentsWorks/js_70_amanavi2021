import apiService from './apiService';
import { paginationSearch } from './pagination-search';
import onClickPlayer from './trailerplayer';
import refs from './service/refs';
import notifier from './service/notifier'
import localStore from './service/localstorage'
import catchError from './service/catcherror';
import { clearPagination } from './pagination-functions';

const formRef = document.querySelector('#search-form');
const containerRef = document.querySelector('.gallery');
const BtnRef = document.querySelector('.search__button');
const paginationDigits = document.querySelector('.pagination__box');

refs.formSearch.addEventListener('submit', onClick);

async function onClick (e) {
  e.preventDefault();

  const searchQueryName = e.currentTarget.elements.searchQuery.value.trim();
  apiService.query = searchQueryName;

  if(e.target.elements.searchQuery.value.trim() === "") {
    return;
  }

  apiService.resetPage();

  try {
    
    // запит фільма за ключовим словом 
    const  findingFilms = await apiService.fetchFilmByName();
    // додаємо перевірку, якщо нічого не знайдено, Notifier
   if ( findingFilms.results.length === 0) {
    notifier.warning('No such film, try again...');
    refs.formSearch.reset();
    return;

  }
  
  // Якщо ЗНАЙДЕНО, записуємо в localStoridge і запускаємо пагінацію по знайденому фільму
  localStore.save('currentFilms', findingFilms);
  paginationSearch(searchQueryName);
  //  Вішаємо слухача і при click на кнопку, запускаємо Відео
    refs.filmsContainer.addEventListener('click', onClickPlayer);
    refs.filmsContainer.addEventListener('touchstart', onClickPlayer);

  } catch (error) {
            catchError(error, 'Something went wrong...');
    };
  

  
refs.formSearch.reset();
}


