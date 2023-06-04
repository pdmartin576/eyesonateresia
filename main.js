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
    { name: 'abilities', anchorLink: 'abilities/index.html', secret: false},
    { name: 'pantheon', anchorLink: '#', secret: false},
    { name: 'why', anchorLink: '#', secret: false},
    { name: 'eden', anchorLink: '#', secret: true}
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