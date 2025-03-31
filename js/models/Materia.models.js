class MateriaModel {
    constructor ({nome, _id}) {
        this.nome = nome
        this._id = _id !== undefined ? _id : this.generateId()
    }

    generateId(){
        MateriaModel.maxId += 1
        return MaterialModel.maxId
    }
}

MateriaModel.maxId = 0