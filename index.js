$(document).ready(function () {
    ChamarRepositorios();
    ChamarUsuario();
});

function ChamarRepositorios(){
    $.getJSON("https://api.github.com/users/machado6/repos",function (data) 
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
    $.getJSON("https://api.github.com/users/machado6", function (data) {
         img = `${data.avatar_url}`;
         login = `Repositórios Git de ${data.name}`;
         $("#divImg").attr('src', img);
         $("#divLogin").html(login);
    }
);
}
