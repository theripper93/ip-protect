Hooks.on("renderInvitationLinks", (app,html)=>{
html.find(".form-group").append(`<i class="fas fa-eye-slash hidepassword"></i>`)
html.on("click", ".hidepassword", (event)=>{
    $(event.currentTarget).toggleClass("fa-eye-slash fa-eye")
    $(event.currentTarget).siblings("input").attr("type",  (i, attr) => attr == "text" ? "password" : "text")

})
html.find("input").off()
html.on("click", ".invite-link",(event)=>{
    const isPw = $(event.currentTarget).attr("type") == "password"
    isPw && $(event.currentTarget).attr("type",  (i, attr) => attr == "text" ? "password" : "text")
    event.preventDefault();
    event.target.select();
    document.execCommand('copy');
    ui.notifications.info("INVITATIONS.Copied", {localize: true});
    isPw && $(event.currentTarget).attr("type",  (i, attr) => attr == "text" ? "password" : "text")
})
html.find(".invite-link").each(function(i,e){
    //toggle text and password for the input
    e.type = "password";
});
})