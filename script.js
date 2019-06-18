//alert("hola mundo");

//post

var post = [
        
        {
            title: "Prueba de titulo 1",
            date: `Publicado el: ` + moment().format('D MMMM  YYYY, h:mm:ss a'),
            content: `In et mi nulla. Ut rhoncus dolor pretium facilisis rhoncus. Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros. Duis porttitor ullamcorper eros, dictum scelerisque ante maximus sit amet. Nam et nulla sed dolor rhoncus condimentum eu nec enim. Nulla ornare, diam quis finibus pretium, odio sapien finibus ante, id placerat nisl risus ultricies mauris.Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros.`
            
        },
        {  
            title: 'Prueba de titulo 2',
            date:`Publicado el: ` + moment().format('D MMMM YYYY, h:mm:ss a'),
            content: `In et mi nulla. Ut rhoncus dolor pretium facilisis rhoncus. Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros. Duis porttitor ullamcorper eros, dictum scelerisque ante maximus sit amet. Nam et nulla sed dolor rhoncus condimentum eu nec enim. Nulla ornare, diam quis finibus pretium, odio sapien finibus ante, id placerat nisl risus ultricies mauris.Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros.`
            
        },
        {
            title: 'Prueba de titulo 3',
            date:`Publicado el: ` + moment().format('D MMMM  YYYY, h:mm:ss a'),
            content: `In et mi nulla. Ut rhoncus dolor pretium facilisis rhoncus. Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros. Duis porttitor ullamcorper eros, dictum scelerisque ante maximus sit amet. Nam et nulla sed dolor rhoncus condimentum eu nec enim. Nulla ornare, diam quis finibus pretium, odio sapien finibus ante, id placerat nisl risus ultricies mauris.Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros.`
            
        },
        {
            title: 'Prueba de titulo 4',
            date:`Publicado el: ` + moment().format('D MMMM  YYYY, h:mm:ss a'),
            content: `In et mi nulla. Ut rhoncus dolor pretium facilisis rhoncus. Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros. Duis porttitor ullamcorper eros, dictum scelerisque ante maximus sit amet. Nam et nulla sed dolor rhoncus condimentum eu nec enim. Nulla ornare, diam quis finibus pretium, odio sapien finibus ante, id placerat nisl risus ultricies mauris.Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros.`
            
        },
        {
            title: 'Prueba de titulo 5',
            date: moment().format('D MMMM  YYYY, h:mm:ss a'),
            content: `In et mi nulla. Ut rhoncus dolor pretium facilisis rhoncus. Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros. Duis porttitor ullamcorper eros, dictum scelerisque ante maximus sit amet. Nam et nulla sed dolor rhoncus condimentum eu nec enim. Nulla ornare, diam quis finibus pretium, odio sapien finibus ante, id placerat nisl risus ultricies mauris.Nulla id laoreet tortor, id feugiat metus. Aenean quis posuere diam. Nulla dictum gravida facilisis. Aliquam congue nisi orci, non ullamcorper sapien tempor id. Curabitur ut est malesuada, suscipit neque in, sodales eros.`
            
        }
];
        post.forEach((item,index) => {
                        var post = `
                                   <article class="post" >
                                        <h2 class="titulo">${item.title}</h2>
                                        <span class="fecha">${item.date}</span>
                                        <p>${item.content}</p>
                                        <button class="leerMas">Leer más.</button>
                                        
                                    </article>
            
                            `;
                        
                            $("#posts").append(post);
            
        });
        
