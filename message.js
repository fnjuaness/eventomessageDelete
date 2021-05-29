client.on("messageDelete", (message) => {
let canal = client.channels.cache.get(`ID DEL CANAL`);
canal.send(`**${message.author.username}** elimino un mensaje con el contenido ${message}`)

})

