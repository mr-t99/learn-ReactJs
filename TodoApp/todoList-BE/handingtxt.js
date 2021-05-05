const fs = require('fs');
const path = process.env.DB_PATH;
const readFile = () => {
    if (!fs.existsSync(path)) {
        return "Không tìm thấy file";
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
            message: "Add complete"
        });
    } catch (error) {
        res.status(400).send({
            err: "err undifine"
        })
    }
}

const editNote = (req, res) => {
    const id = req.params.id;
    console.log(id)
    if (!readFile()) {
        res.status(404).send({
            err: "Lỗi không tim thay file"
        })
        return;
    }
    var dataJson = readFile();
    var newValue, index;
    dataJson.body.map((value, indexx) => {
        if (value.id === parseInt(id)) {
            newValue = {
                ...value,
                title: req.body.title,
                conten: req.body.conten,
            }
            index = indexx
        }
    })
    if (newValue) {
        dataJson = {
            body: [
                ...dataJson.body.slice(0, index),
                newValue,
                ...dataJson.body.slice(index + 1)
            ]
        }
        try {
            fs.writeFileSync(path, JSON.stringify(dataJson))
            res.send({
                message: "Add complete"
            });
        } catch (error) {
            res.status(400).send({
                err: "err undifine"
            })
        }
    }
    else{
        res.status(404).send({
            message:"Không tìm thấy id: "+id
        })
    }


}

//da hoan thanh

module.exports = {
    readFile,
    addItem,
    editNote
}


