    'use client';

   import React, { useState } from 'react';

   export default function Search() {
     const [searchQuery, setSearchQuery] = useState('');

     const handleSearchQueryChange = (event) => {
       setSearchQuery(event.target.value);
     };

     const handleSubmit = (event) => {
       event.preventDefault();
       // Обработка запроса поиска
       console.log('Запрос поиска:', searchQuery);
     };

     return (
       <main>
         <h1>Поиск пользователей</h1>
         <form onSubmit={handleSubmit}>
           <div>
             <label htmlFor="search-query">Поиск:</label>
             <input
               type="text"
               id="search-query"
               value={searchQuery}
               onChange={handleSearchQueryChange}
             />
           </div>
           <button type="submit">Искать</button>
         </form>
       </main>
     );
   }
   