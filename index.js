const { execSync } = require("child_process");

execSync(`chmod +x ./main.sh && ./main.sh`,{
    cwd: './'
})
