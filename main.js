$('#menu-toggle').click(function(){
  
    $('#menu').slideToggle(300);
  })
  
  $(document).ready(function() {
    // Check window width on page load
    if (window.innerWidth < 660) {
      $("#menu").hide();
    } else {
      $("#menu").show();
    }
  
    // Check window width on window resize
    $(window).resize(function() {
      if (window.innerWidth < 660) {
        $("#menu").hide();
      } else {
        $("#menu").show();
      }
    });
  });
  
  const search = [
    { name: 'abilities', anchorLink: 'pages/character/index.html', secret: false},
    { name: 'pantheon', anchorLink: 'pages/character/index.html#pantheon', secret: false},
    { name: 'magnava', anchorLink: '#', secret: false},
    { name: 'porsculla', anchorLink: '#', secret: false},
    { name: 'tovarich', anchorLink: '#', secret: false},
    { name: 'kasparak', anchorLink: '#', secret: false},
    { name: 'loravia', anchorLink: '#', secret: false},
    { name: 'hevesta', anchorLink: '#', secret: false},
    { name: 'vospol', anchorLink: '#', secret: false},
    { name: 'optera', anchorLink: '#', secret: false},
    { name: 'helavos', anchorLink: '#', secret: false},
    { name: 'ancient history', anchorLink: '#', secret: false},
    { name: 'modern history', anchorLink: '#', secret: false},
    { name: 'nas botal', anchorLink: '#', secret: false},
    { name: 'eden', anchorLink: 'data/cache/index.html', secret: true}
    
]

const searchInput = document.querySelector('.input')

searchInput.addEventListener("input", (e) => {
    let value = e.target.value //defines user input

    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase() //ignores outside

        setList(search.filter(section => {
            return section.name.includes(value)
        }))
    }
    else {
        clearList()
    }
})

function setList(results){
    clearList()
    for (const section of results){
        const resultItem = document.createElement('li');
        //made with the help of ChatGPT
        const anchorTag = document.createElement('a');
        anchorTag.href = section.anchorLink; //sets the href of the anchor tag to the anchorLink detailed before
        const text = document.createTextNode(capitalCase(section.name));
        anchorTag.appendChild(text);
        //back to the tutorial
        resultItem.appendChild(anchorTag);
        if (section.secret == true){
          resultItem.classList.add('hide');
        }
        else{
          resultItem.classList.add('result-item');
        }
        list.appendChild(resultItem);
        
    }

    if (results.length === 0){
        noResults()
    }
}

function noResults(){
    const error = document.createElement('li')
    error.classList.add('error-message')
    const text = document.createTextNode('No results found. Sorry!')
    error.appendChild(text)
    list.appendChild(error)
}

function clearList(){
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function capitalCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }