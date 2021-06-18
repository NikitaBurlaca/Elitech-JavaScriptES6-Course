const key = '7349d306f4dfc228c852c6efdb4c79cc';

// const firstUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=7349d306f4dfc228c852c6efdb4c79cc';

// fetch(firstUrl)
//.then((data) => {console.log('response', data.json())})
// .catch((error) => {
  //  console.log(error);
//});

const searchPlace = async (city) => {
    const firstUrl = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

   
    const response = await fetch(firstUrl + query);

   
    const data = await response.json();
    return data;

}
