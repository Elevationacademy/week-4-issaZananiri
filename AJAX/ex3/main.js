const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (response) { 
                for(let item of response.items){
                console.log(item.volumeInfo.industryIdentifiers[0].identifier)
                console.log(item.volumeInfo.title)
                console.log(item.volumeInfo.authors)
                }
        },
    })
}
fetch("isbn", 9781451621716)
fetch("title", "How to Win Friends and Influence People")
