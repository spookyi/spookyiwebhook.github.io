var button = document.getElementById('webhookbutton')

button.onclick = function() {
    var message = document.getElementById('webhookmessage').value; // Retrieve the current value of the input field
    var wUrl = 'https://discord.com/api/webhooks/1238121476541120704/geLX1N2YA7BAFlif95r4R5NlcqG0UmS9hY1OUGlyxsEiB0GJht7ytnA3SYPg-DVxLtfm';
    var xhr = new XMLHttpRequest();

    var data = {
        username: 'iota.gg',
        avatar_url : 'https://i.pinimg.com/736x/ea/57/93/ea5793102cd39351cb7efcf50fc78354.jpg',
        embeds : [
            {
                fields : [
                    {
                        name : 'Message Sent:',
                        value : message,
                        inline : true
                    }
                ]
            }
        ]
    };

    xhr.open('POST', wUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
};
