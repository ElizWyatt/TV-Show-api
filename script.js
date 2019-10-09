let input;


$('button').on('click', () => {
    input = $('input').val().toLowerCase().replace(/ /g, "-");
    console.log(input);
    fetch(`http://api.tvmaze.com/search/shows?q=${input}`)
    .then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data);
        $('#summary').html(data[0].show.summary);
        $('#rating').html(data[0].show.rating.average);
        $('img').attr('src', data[0].show.image.medium);
    
    })
    .catch(error => {
        console.log(error);
    });
    
}); 


