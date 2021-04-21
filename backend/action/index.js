const response = require('../helpers/response');

async function beranda(request, reply) {
    let data = { 'isi': 'beranda' }
    return response.ok(data, "berhasil", reply)
}

async function getData(request, reply) {
    const pool = await this.pg.connect();
    const res = await pool.query("SELECT id, nama, keterangan FROM tabellatihan");
    await pool.release();
    return response.ok(res.rows, "berhasil", reply)
}

async function getDatabyId(request, reply) {

    let sql = 'SELECT id, nama, keterangan FROM tabellatihan WHERE id = $1';
    console.log(request.params.id);
    const id = request.params.id;
    const pool = await this.pg.connect();
    const res = await pool.query(sql, [id]);
    await pool.release();
    return response.ok(res.rows, "Ok", reply);
}

async function saveData(request, reply) {
    console.log(request.body);

    const pool = await this.pg.connect();
    let nama = request.body.nama;
    let keterangan = request.body.keterangan;
    const sql = 'INSERT INTO public.tabellatihan (nama, keterangan) VALUES ($1, $2) RETURNING id'
    const res = await pool.query(sql, [nama, keterangan]);
    await pool.release();
    let hasil = {};
    hasil['key'] = res.rows[0].id;
    hasil['kode'] = 200;
    hasil['deskripsi'] = 'insert data berhasil';
    return response.ok(hasil, "Ok", reply);
}


module.exports = {
    beranda, getData, saveData, getDatabyId
}