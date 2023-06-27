
function getdata(){
    let inputfield=document.getElementById('searchBar').value;
    let content=document.getElementById('content')
    if(!inputfield){
        alert('Enter a movie name');
        return;
    }
    let key= `https://www.omdbapi.com/?t=${inputfield}&apikey=70dad08f`; // Replace YOUR_API_KEY with your actual API key
    let moviedetails=fetch(key);
    moviedetails.then((res)=>{
        return res.json();
    }).then(result=>{
        if(result.Response !== 'True'){
            content.innerHTML='No such movie exists.';
            return;
        }
        let datarequired=["Title","Year","imdbRating","Director","Writer","Actors"];
        let reqcontent="<img src="+result.Poster+">" + "<br>";
        for(let i=0;i<datarequired.length;i++){
            reqcontent+=datarequired[i]+ ": " + result[datarequired[i]]+ "<br>";
        }
        content.innerHTML +=reqcontent;
        document.getElementById('searchBar').value=''

    });
}