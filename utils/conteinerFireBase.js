class AlmacenFireBase{

    constructor(ruta){
        this.ruta = ruta
    }
    async getAll(){
        try{
            const querySnapShot = await this.ruta.get();
            const docs = querySnapShot.docs;
            const result = docs.map(doc=>{
                return {...doc.data(), id: doc.id}
            });
            return result;
        }catch(err){
            console.log(err);
        }
    }
    async getById (id){
        try{
            const doc = this.ruta.doc(id);
            const result = await doc.get();
            const info = result.data();
            console.log(info);
            return  {...info,id};
        } catch(err){
            console.log(err);
        }
    }
    async save(info){
        try{
            const doc = this.ruta.doc();
            const result = await doc.create({...info});
            return result;
        }catch(err){
            console.log(err);
        }

    }
    async updateById (id,info){
        try{
            const doc = this.ruta.doc(id);
            const result = await doc.update({...info});
            return result;
        } catch (err){
            console.log(err);
        }
    }
    async deleteById(id){
        try{
            const doc = this.ruta.doc(id);
            const result = await doc.delete();
            return result;            
        }catch(err){
            console.log(err);
        }
    }
}

module.exports = AlmacenFireBase;