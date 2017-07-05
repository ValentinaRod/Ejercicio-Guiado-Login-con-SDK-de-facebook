
/*El primer paso al cargar tu página web es determinar si una persona ya inició sesión 
en tu aplicación con el inicio de sesión con Facebook. Este proceso comienza con una 
llamada a FB.getLoginStatus. Esta función activa una llamada a Facebook para obtener el estado de 
inicio de sesión y llamar a tu función de devolución de llamada con el resultado.*/

FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

/*El objeto response que se proporciona a la devolución de llamada puede contener uno o varios campos*/

{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}/*Esta es la devolución de llamada. Llama a FB.getLoginStatus() 
para obtener el estado de inicio de sesión más reciente. (statusChangeCallback() es 
una función que forma parte del ejemplo que procesa la respuesta).*/

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


