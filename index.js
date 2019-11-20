$(document).ready(function () {
    ChamarRepositorios();
    ChamarUsuario();
});
var usuario = "machado6";
function ChamarRepositorios(){
    $.getJSON("https://api.github.com/users/"+ usuario +"/repos",function (data) 
    {
        var txt = '';
         $.each(data, function () { 
              txt += `
              <li class="list-group-item">
                <a href="${this.html_url}" target="_blank">${this.name}</a>
              </li>
              `;
         });
         $("#divRepos").html(txt);
    }

);
}
function ChamarUsuario(){
    var img = '';
    var login = '';
    $.getJSON("https://api.github.com/users/"+ usuario, function (data) {
         img = `${data.avatar_url}`;
         login = `Repositórios Git de ${data.name}`;
         $("#divImg").attr('src', img);
         $("#divLogin").html(login);
    }
);
}
