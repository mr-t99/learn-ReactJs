const fs = require('fs');
const path = process.env.DB_PATH;
const readFile = () => {
    if (!fs.existsSync(path)) {
        return false;
    } else {
        var data = fs.readFileSync(path,
            { encoding: 'utf8', flag: 'r' });
        if (!data) {
            data = { "body": [] }
            return data
        }
        data = JSON.parse(data)
        return data;
    }
}

const addItem = (req, res) => {
    const { title, conten } = req.body;
    if (!readFile()) {
        res.status(404).send({
            err: "Lỗi không tim thay file"
        })
        return;
    }
    
    var jsonData = readFile();
    var id = 0;
    if (jsonData.body.length) {
        id = jsonData.body[jsonData.body.length - 1].id + 1
    }
    jsonData = {
        body: [...jsonData.body,
        {
            id: id,
            title: title,
            conten: conten
        }]
    }
    try {
        fs.writeFileSync(path, JSON.stringify(jsonData))
        res.send({
            message:"Add complete"
        });
    } catch (error) {
        res.status(400).send({
            err: "err undifine"
        })
    }
}

//da hoan thanh

module.exports = {
    readFile,
    addItem
}


