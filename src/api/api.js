import axios from 'axios';

// axios.defaults.baseURL = '';
axios.get('https://pixabay.com/api/', {
    params: {
        apiKey: "36947214-e67710a045a4cff9982bc6142"
    }
})
.then(response => {
    console.log(response.data)
})
.catch(error => {
    console.log(error)
})


// export const getAllImages = async () => {

//     const {data} = axios()
//     return data;
// }


// URL-рядок HTTP-запиту.
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
// \
// Pixabay API підтримує пагінацію, за замовчуванням параметр page дорівнює 1. Нехай у відповіді надходить по 12 об'єктів, встановлено в параметрі per_page. Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати значення page до 1.

// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна