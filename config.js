let baseUrl = '';
module.exports = {
    port: 3000,
    allowOrigin: '*',
    localTokens: ['ewrewirjklnhwuer234jkjn434hd'],
    routes: [
        {
            localUrl: '/vkapi',
            remoteUrl: 'https://vk.com/api/method',
            localMethod: 'GET',
            remoteMethod: 'POST',
            baseParams: {
                app_id: "554434908",
                token: "ljkljweklrjewklkmr45"
            },
            baseHeaders: []
        },
        {
            localUrl: '/googleapi',
            remoteUrl: 'https://google.com/api/method',
            localMethod: 'GET',
            remoteMethod: 'POST',
            baseParams: {
                key: "AIZfrekjlskdukjrkkn34234342m"
            },
            baseHeaders: []
        }
    ]
};