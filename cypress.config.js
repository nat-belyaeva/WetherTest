const { defineConfig } = require("cypress");
const fs = require('fs')
let href

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    defaultCommandTimeout: 7000,
    e2e: {
        baseUrl: 'https://openweathermap.org',
        setupNodeEvents(on, config) {
            on('task', {
                myLog(message) {
                    console.log(message)

                    return message
                },
                countFiles(folderName) {
                    return new Promise((resolve, reject) => {
                        fs.readdir(folderName, (err, files) => {
                            if (err) {
                                return reject(err)
                            }

                            resolve(files.length)
                        })
                    })
                },
                setHref: (val) => {
                    return (href = val)
                },
                getHref: () => {
                    return href
                },
            })
        },
    },
    env: {
        apiBaseUrl: 'https://restful-booker.herokuapp.com',
        homePageUrl: 'https://openweathermap.org'
    },
    video: false,
    reporter: 'junit',
    reporterOptions: {
        mochaFile: 'reports/test-results-[hash].xml',
    },

});
